"""유튜브 채널의 새 영상을 읽어 video-content.js 를 자동으로 갱신합니다.
(GitHub Actions 가 6시간마다 실행합니다. 로그인/키 불필요: 공개 RSS 사용)
- 롱폼(제목에 #shorts 없는 영상)만 '방송 영상' 페이지에 올립니다.
- 이미 등록된 영상의 설명 문구는 그대로 유지합니다.
"""
import json, re, sys, urllib.request, xml.etree.ElementTree as ET
from pathlib import Path

HANDLE = "한경시니어모델"
MAX_VIDEOS = 12
OUT = Path(__file__).resolve().parent.parent / "video-content.js"
UA = {"User-Agent": "Mozilla/5.0"}


def get(url):
    return urllib.request.urlopen(urllib.request.Request(url, headers=UA), timeout=30).read().decode("utf-8", "replace")


def channel_id():
    html = get("https://www.youtube.com/@" + urllib.request.quote(HANDLE))
    m = re.search(r'"channelId":"(UC[\w-]{22})"', html) or re.search(r'channel_id=(UC[\w-]{22})', html)
    if not m:
        raise SystemExit("채널 ID를 찾지 못했습니다")
    return m.group(1)


def parse_feed(xml_text):
    ns = {"a": "http://www.w3.org/2005/Atom", "y": "http://www.youtube.com/xml/schemas/2015",
          "m": "http://search.yahoo.com/mrss/"}
    out = []
    for e in ET.fromstring(xml_text).findall("a:entry", ns):
        vid = e.find("y:videoId", ns).text
        title = e.find("a:title", ns).text or ""
        pub = e.find("a:published", ns).text[:10].replace("-", ".")
        out.append({"id": vid, "title": title, "date": pub})
    return out


def existing_entries():
    """이미 등록된 영상은 제목/날짜/설명을 직접 쓴 그대로 유지합니다."""
    if not OUT.exists():
        return {}
    txt = OUT.read_text(encoding="utf-8")
    d = {}
    for blk in re.findall(r"\{[^{}]*?url:[^{}]*?\}", txt, re.S):
        g = lambda k: (re.search(k + r':\s*("(?:[^"\\]|\\.)*")', blk) or [None, '""'])[1]
        m = re.search(r'url:\s*"[^"]*?([\w-]{11})(?:\?[^"]*)?"', blk)
        if m:
            d[m.group(1)] = {k: json.loads(g(k)) for k in ("title", "date", "description")}
    return d


def main():
    feed = parse_feed(get("https://www.youtube.com/feeds/videos.xml?channel_id=" + channel_id()))
    longs = [v for v in feed if "#short" not in v["title"].lower()][:MAX_VIDEOS]
    if not longs:
        print("롱폼 영상이 없어 변경하지 않습니다"); return
    old = existing_entries()
    items = []
    for v in longs:
        e = old.get(v["id"]) or {"title": v["title"].split(" | ")[0], "date": v["date"], "description": ""}
        items.append({**e, "url": "https://youtu.be/" + v["id"]})
    body = ",\n".join(
        "  {\n    title: %s,\n    date: %s,\n    description: %s,\n    url: %s\n  }" % tuple(
            json.dumps(i[k], ensure_ascii=False) for k in ("title", "date", "description", "url")) for i in items)
    new = "// 이 파일은 scripts/update_videos.py 가 자동으로 갱신합니다. (수정해도 되지만 다음 갱신 때 목록이 다시 맞춰집니다)\nconst ACADEMY_VIDEOS = [\n" + body + "\n];\n"
    if OUT.exists() and OUT.read_text(encoding="utf-8") == new:
        print("변경 없음"); return
    OUT.write_text(new, encoding="utf-8")
    print("갱신:", len(items), "개")


if __name__ == "__main__":
    main()
