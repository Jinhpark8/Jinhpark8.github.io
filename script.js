const careers = [
  {
    id: "mps",
    company: "MPS",
    role: "경영지원본부장",
    period: "2024.07 - 현재",
    summary:
      "글로벌 민간 우주항공 고객사 기준의 HR/GA/보안 체계를 구축하고, 핵심 인재 확보 및 KPI 기반 운영으로 사업 성장에 기여.",
    facts: [
      { label: "업종", value: "전자소재·부품 제조, 우주항공용 소재·부품 공급" },
      { label: "임직원", value: "60명" },
      { label: "매출", value: "420억원 (2025년)" },
    ],
    tags: ["HR Strategy", "GA", "ISO27001", "AI Tooling"],
    details: [
      "글로벌 Top-tier 고객사 컴플라이언스 기준에 맞춘 HR/GA/보안 운영 체계 수립",
      "6개월간 조직 인원 Double-up(30명 → 60명) 및 1년 이내 이탈률 10% 이하 관리",
      "핵심 리더/포지션 Direct Sourcing으로 채용 리드타임 단축 및 비용 절감",
      "KPI Cascading 성과관리, CFR 코칭 프로그램 도입으로 조직 안정화 및 성과 개선",
      "중장기 전략사업(생산 내재화) 총괄: 생산시설 리모델링/증설, 법인 설립 및 인허가 완료",
    ],
  },
  {
    id: "tving",
    company: "TVING (CJ ENM)",
    role: "Talent Senior Manager",
    period: "2022.12 - 2024.07",
    summary:
      "합병 이후 조직 안정화와 Squad 조직 운영을 리드하고, 조직문화 개발/리더십 프로그램/노무 이슈 대응을 통합 수행.",
    facts: [
      { label: "업종", value: "CJ ENM 계열 미디어제작·제공, 모바일 OTT(IT·개발)" },
      { label: "임직원", value: "230명" },
    ],
    tags: ["M&A", "PMI", "Org Design", "Culture"],
    details: [
      "TVING-kt seezn 합병 이후 조직/인원 밀접 관리로 적격합병 요건 유지 및 조직 안정화",
      "전사 전략과제 달성을 위한 Squad(Agile) 조직 기획/운영으로 3개월 내 KBO 중계 서비스 론칭 기여",
      "핵심인재/리더 육성 프로그램(TRS/TMS), 리더십 코칭 및 온보딩 프로그램 운영",
      "조직진단(CJ Voice on) 기반 Intervention 도출 및 일하는 방식(Work-rule) 수립",
      "노사협의회/노무 이슈 대응 및 M&A 실사(Due Diligence)·PMI 준비 수행",
    ],
  },
  {
    id: "seezn",
    company: "kt seezn",
    role: "경영지원팀장",
    period: "2022.01 - 2022.12",
    summary:
      "법인 분사 직후 HR 및 총무 체계를 제로베이스로 수립하고 TVING과의 합병 실사 및 PMI를 성공적으로 추진.",
    facts: [
      { label: "업종", value: "미디어제작·제공, 모바일 OTT(IT·개발) (kt 자회사)" },
      { label: "임직원", value: "85명 (TVING 합병 시점)" },
    ],
    tags: ["HR Setup", "HRIS", "Labor", "Governance"],
    details: [
      "분사 신설 법인 HR/총무 체계를 Zero-base에서 구축(평가/보상/승진/교육 포함)",
      "더존 ERP 기반 HRIS 커스터마이징 및 운영 체계 정립",
      "주 4.5일제, 재택근무 Rule, 복리후생 제도 등 맞춤형 근무제 도입",
      "노사협의체 및 보안/개인정보 관련 제도 신설, 그룹 보안진단 대응",
      "TVING 합병 실사 및 PMI 수행으로 노무 이슈 Zero 목표 달성 및 성공적 합병 지원",
    ],
  },
  {
    id: "polus",
    company: "POLUS",
    role: "HR/전략기획팀장",
    period: "2016.06 - 2022.01",
    summary:
      "창립 멤버로 조직 확장(최대 320명), 평가/보상 체계, 투자 및 경영관리 전반을 리드하며 성장과 위기 국면 모두를 경험.",
    facts: [
      { label: "업종", value: "미생물 기반 바이오시밀러 제조업" },
      { label: "임직원", value: "최대 320명(2020년)" },
    ],
    tags: ["Scale-up", "Compensation", "IR", "Crisis 대응"],
    details: [
      "창립 멤버로 합류해 최대 4개 계열사, 320명 규모까지 조직/인력 확충",
      "단계별 HR 전략 수립, 평가·보상 체계 및 스톡옵션 제도 설계/운영",
      "투자유치(3,000억원) 관련 IR, 실사, 이사회/주총, 공시(DART) 업무 주관",
      "조직문화/변화관리 프로그램 운영으로 청년친화강소기업 선정(장관 표창)",
      "경영 악화 국면에서 임금/노무 법적 이슈 대응 및 구성원 고충 커뮤니케이션 수행",
    ],
  },
  {
    id: "lginnotek",
    company: "LG이노텍",
    role: "파주인사노경팀",
    period: "2010.01 - 2016.05",
    summary:
      "인력 운영, 채용, 평가·보상, 조직진단 및 교육체계 운영 등 대기업 HRM의 핵심 실무를 폭넓게 수행.",
    facts: [
      { label: "업종", value: "전기전자부품 제조 (LED, 카메라모듈, 차량용 장치, 기판소재 등)" },
      { label: "임직원", value: "13,000명 (2016년 기준)" },
      { label: "매출", value: "약 13조원 (2016년 기준)" },
    ],
    tags: ["HRM", "Recruiting", "Performance", "L&D"],
    details: [
      "채용 브랜딩, 산학 연계 프로그램, 인턴십 운영 등 채용 체계 고도화",
      "인사 발령/퇴직/근태/모성보호제도 등 HR 운영 프로세스 관리",
      "평가 운영, 승진 심사, 인센티브 제도 기획 및 핵심인재 육성 Track 운영",
      "조직진단(LG Way Survey) 분석 및 변화관리 프로그램으로 조직지수 개선",
      "신입사원 입문교육/멘토링, 직무·공통 역량개발 프로그램 기획/운영",
    ],
  },
];

function renderCareerList() {
  const list = document.getElementById("experience-list");
  if (!list) return;

  list.innerHTML = careers
    .map(
      (item) => `
      <article class="experience-item">
        <p class="meta">${item.period}</p>
        <button class="experience-trigger" type="button" aria-expanded="false" aria-controls="detail-${item.id}">
          <h3>${item.company} | ${item.role}</h3>
          <span class="caret" aria-hidden="true">+</span>
        </button>
        <p class="experience-summary">${item.summary}</p>
        ${
          item.facts?.length
            ? `<dl class="experience-facts" aria-label="회사 개요">
          ${item.facts
            .map(
              (f) => `<div class="experience-fact">
            <dt>${f.label}</dt>
            <dd>${f.value}</dd>
          </div>`
            )
            .join("")}
        </dl>`
            : ""
        }
        <div class="chips">
          ${item.tags.map((tag) => `<span>${tag}</span>`).join("")}
        </div>
        <div class="experience-detail" id="detail-${item.id}" hidden>
          <ul>
            ${item.details.map((line) => `<li>${line}</li>`).join("")}
          </ul>
        </div>
      </article>
    `
    )
    .join("");
}

function setupExperienceAccordion() {
  const triggers = document.querySelectorAll(".experience-trigger");
  if (!triggers.length) return;

  triggers.forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const detailId = trigger.getAttribute("aria-controls");
      if (!detailId) return;
      const detail = document.getElementById(detailId);
      if (!detail) return;

      const isOpen = trigger.getAttribute("aria-expanded") === "true";
      trigger.setAttribute("aria-expanded", String(!isOpen));
      detail.hidden = isOpen;
    });
  });
}

function setupSectionSpy() {
  const sections = document.querySelectorAll(".section[id]");
  const links = document.querySelectorAll(".nav-link");
  if (!sections.length || !links.length) return;

  const linkById = new Map();
  links.forEach((link) => {
    const id = link.getAttribute("href")?.slice(1);
    if (id) linkById.set(id, link);
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const id = entry.target.getAttribute("id");
        if (!id) return;
        links.forEach((link) => link.classList.remove("active"));
        linkById.get(id)?.classList.add("active");
      });
    },
    { threshold: 0.35, rootMargin: "-10% 0px -45% 0px" }
  );

  sections.forEach((section) => observer.observe(section));
}

function start() {
  renderCareerList();
  setupExperienceAccordion();
  setupSectionSpy();
}

start();
