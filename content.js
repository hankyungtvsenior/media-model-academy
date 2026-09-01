const SITE_CONTENT = {
  brand: {
    english: "K-SENIOR MEDIA MODEL ACADEMY",
    korean: "K-시니어 미디어 모델 아카데미",
    sub: "한국경제TV × 사단법인 시니어패션모델협회",

    // 로고 확정 전에는 빈칸("")으로 두면 기존 텍스트 로고가 표시됩니다.
    // 로고 확정 후 예: "assets/brand/k-senior-logo.png"
    logo: "",
    logoAlt: "K-시니어 미디어 모델 아카데미"
  },

  ars: {
    title: "ARS 결제 안내",
    message: "ARS 결제 번호 및 안내 문구가 확정되면 이곳에 표시됩니다."
  },


  popup: {
    enabled: true,

    // 포스터 팝업 사용 시 이미지 경로를 입력하세요. 비워두면 아래 텍스트형 팝업이 표시됩니다.
    posterImage: "assets/popup/poster.jpg",
    posterAlt: "K-시니어 미디어 모델 아카데미 1기 모집안내",

    // 포스터 아래 참가신청 버튼을 눌렀을 때 이동할 주소
    buttonUrl: "https://form.naver.com/response/jNOhKvMCS5",

    // posterImage를 비워둘 때만 사용하는 텍스트 팝업 내용
    kicker: "K-SENIOR 1기 모집",
    title: "K-SENIOR 1기 공개 오디션",
    message: "2026년 10월 17일(토) 공개 오디션\n신청 마감 2026년 10월 15일 23:59",
    buttonText: "참가신청 바로가기"
  },

  hero: {
    eyebrow: "NEW STAGE, NEW BEGINNING",
    title: "우리는 지금도\n심장이 뛴다.",
    description: "나이는 우리의 가능성을 정하지 않습니다.\n새로운 꿈을 꾸고, 새로운 무대에 서고, 다시 한 번 설레는 순간을 만듭니다.",
    primaryButton: "1기 모집 안내",
    secondaryButton: "아카데미 소개"
  },

  quickInfo: {
    audition: "2026년 10월 17일(토)",
    capacity: "최종 20명",
    course: "15주 전문과정",
    deadline: "2026년 10월 15일 23:59"
  },

  academy: {
    headline: "새로운 도전과 아름다운 인생 2막을 함께합니다.",
    quote: "심장 뛰는 꿈의 무대가 펼쳐진다",
    text1: "K-시니어 미디어 모델 아카데미는 패션·방송·라이프스타일 분야를 아우르는 시니어 전문 아카데미입니다.",
    text2: "한국경제TV의 미디어 역량과 사단법인 시니어패션모델협회의 전문성을 바탕으로 패션모델, 방송·미디어, 이미지 메이킹, 스피치 및 다양한 활동 기회를 제공하고 시니어 세대의 새로운 가능성과 활발한 사회활동을 지원합니다."
  },

  features: [
    { title: "미디어 실전 경험", text: "한국경제TV의 방송·미디어 환경을 바탕으로 실제 콘텐츠 제작과 현장 경험의 기회를 제공합니다." },
    { title: "시니어 모델 전문 교육", text: "워킹, 포즈, 이미지 메이킹 등 모델 활동에 필요한 핵심 역량을 단계적으로 익힙니다." },
    { title: "새로운 사회활동 연결", text: "교육 이후에도 모델 활동과 다양한 대외 활동으로 이어질 수 있는 기회를 지원합니다." }
  ],

  curriculum: [
    { title: "모델 워킹", text: "기본 자세부터 런웨이 워킹까지 단계별 실습" },
    { title: "포즈 & 표현", text: "카메라와 무대에서 자연스럽게 자신을 표현하는 방법" },
    { title: "이미지 메이킹", text: "개인의 강점을 살리는 스타일과 이미지 연출" },
    { title: "스피치", text: "방송과 대외 활동에 필요한 발성, 전달력, 자신감 훈련" },
    { title: "방송·미디어", text: "카메라 적응과 방송 콘텐츠 참여를 위한 실전 교육" },
    { title: "실전 무대", text: "교육 내용을 종합해 무대와 촬영 환경에서 실전 적용" }
  ],

  benefits: [
    { title: "방송 콘텐츠 직접 참여", text: "한국경제TV 각종 방송 콘텐츠 제작에 직접 참여할 수 있는 기회를 제공합니다." },
    { title: "SFMA 무료 회원가입", text: "사단법인 시니어패션모델협회(SFMA) 무료 회원가입 혜택을 제공합니다." },
    { title: "다양한 모델 활동 지원", text: "교육 이후 패션·모델 관련 다양한 활동 기회를 지원합니다." },
    { title: "전문 아카데미 교육", text: "패션모델, 방송·미디어, 이미지 메이킹, 스피치 등 전문 교육 프로그램을 제공합니다." },
    { title: "K시니어 ONE봉사단 우선가입", text: "한국경제TV × SFMA K시니어 ONE봉사단 우선가입 기회를 제공합니다." }
  ],

  instructors: [
    { name: "강사 정보 준비 중", role: "강사진 정보가 확정되면 입력해 주세요.", photo: "" },
    { name: "강사 정보 준비 중", role: "강사진 정보가 확정되면 입력해 주세요.", photo: "" },
    { name: "강사 정보 준비 중", role: "강사진 정보가 확정되면 입력해 주세요.", photo: "" },
    { name: "강사 정보 준비 중", role: "강사진 정보가 확정되면 입력해 주세요.", photo: "" }
  ],

  recruitment: {
    title: "2026 K-SENIOR 1기 모집",
    subtitle: "새로운 무대를 향한 첫걸음, 공개 오디션에서 시작합니다.",
    items: [
      { label: "공개 오디션", value: "2026년 10월 17일(토)" },
      { label: "오디션 장소", value: "한국경제TV 11층 스튜디오" },
      { label: "모집 인원", value: "최종 20명" },
      { label: "선발 방법", value: "참가신청서 접수 → 오디션 심사 → 최종 20명 선발" },
      { label: "교육 기간", value: "2026년 10월 24일 ~ 2027년 1월 30일 / 15주" },
      { label: "교육 장소", value: "서울 성동문화원 · 한국경제TV" },
      { label: "오디션 참가비", value: "무료" },
      { label: "신청 마감", value: "2026년 10월 15일 23:59" }
    ],
    originalPrice: "200만원",
    specialPrice: "150만원",
    priceNote: "1기 모집에 한하여 적용되는 특별가입니다.",
    notes: [
      "최종 선발자는 오디션 심사 후 개별 안내드립니다.",
      "신청자가 많을 경우 조기 마감될 수 있습니다."
    ]
  },

  application: {
    title: "참가신청서를 작성해 주세요.",
    description: "작성해 주신 내용은 오디션 심사 및 참가자 선발을 위해 활용됩니다.",
    privacyNote: "신청서 제출 전 개인정보 수집·이용 및 사진·영상·초상권 활용 동의 내용을 반드시 확인해 주시기 바랍니다.",
    buttonText: "참가신청서 작성하기",
    applicationUrl: "https://form.naver.com/response/jNOhKvMCS5"
  },

  contact: {
    wowtvPhone: "02-6676-0448",
    sfmaPhone: "010-4214-7787",
    wowtvUrl: "https://www.wowtv.co.kr/",
    sfmaUrl: "https://www.sfma.kr/",
    instagramUrl: "#",
    email: "",
    address: ""
  },

  sponsors: [
    { name: "이루탄 메디케어", logo: "assets/sponsors/erutan.png", url: "https://erutan.co.kr/" },
    { name: "세라치과", logo: "assets/sponsors/sera.svg", url: "https://www.ceradento.com/" },
    { name: "에듀윌", logo: "assets/sponsors/eduwill.png", url: "https://www.eduwill.net/sites/home" },
    { name: "법무법인 한평", logo: "assets/sponsors/hanpyung.svg", url: "https://jbaelaw.com/" }
  ],

  footer: {
    message: "여러분의 새로운 도전과 멋진 시작을 응원합니다.",
    wowtvLogo: "assets/sponsors/hankyungtv.png",
    sfmaLogo: "assets/sponsors/sfma.png"
  }
};
