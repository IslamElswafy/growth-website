const CONTACT = {
  whatsapp: "https://wa.me/201211398298",
  whatsappLabel: "+20 12 11398298"
};

const PARTNERS = [
  { name: "Graphinion", logo: "assets/portfolio/graphinion-logo.png" },
  { name: "Blox", logo: "assets/portfolio/blox-logo.png" },
  { name: "Savvy", logo: "assets/portfolio/savvy-logo.svg" },
  { name: "ElAvvocato", logo: "assets/portfolio/elavvocato-logo.png" },
  { name: "Taqdum", text: "Taqdum" }
];

const CONTENT = {
  en: {
    dir: "ltr",
    display: "'Sora', sans-serif",
    body: "'Manrope', sans-serif",
    langBtn: "ع",
    langSwitchLabel: "العربية",
    nav: {
      home: "Home",
      services: "Services",
      work: "Work",
      process: "Process",
      about: "About",
      insights: "Insights",
      contact: "Contact",
      start: "Start Your Growth"
    },
    hero: {
      eyebrow: "Integrated Business Growth Partner",
      h1a: "We Don’t Just Market Businesses.",
      h1b: "We Build Their Growth.",
      sub: "Strategy, marketing, sales, technology, and AI working together to move your business forward.",
      cta1: "Explore Our Services",
      cta2: "Start Your Growth",
      scroll: "Scroll"
    },
    trust: {
      line: "Trusted by ambitious businesses across different industries.",
      note: "Selected partners and products from the portfolio"
    },
    serv: {
      eyebrow: "What we do",
      title: "Our services",
      intro: "From strategy and brand to AI-powered products — we design and build the growth systems ambitious businesses need.",
      cta: "Start a conversation",
      all: "View all services"
    },
    services: [
      { n: "01", name: "Business Strategy", tag: "Strategy", desc: "Clarity on where to play and how to win - grounded in market reality, not guesswork.", caps: ["Market & business analysis", "Competitive analysis", "Growth planning", "Business model development", "Market-entry strategy"] },
      { n: "02", name: "Marketing & Branding", tag: "Brand", desc: "A brand people remember and a presence that compounds attention into demand.", caps: ["Brand strategy & identity", "Social media management", "Paid advertising", "Content strategy & production", "Digital presence development"] },
      { n: "03", name: "Sales Growth", tag: "Sales", desc: "Turn interest into revenue with journeys and systems built to convert.", caps: ["Customer journey design", "Sales offers & proposals", "CRM strategy", "Conversion optimization", "Lead follow-up systems"] },
      { n: "04", name: "Digital Products", tag: "Product", desc: "Websites, apps, and platforms engineered to perform and scale.", caps: ["Corporate websites", "E-commerce experiences", "Mobile applications", "Dashboards & internal systems", "System integrations"] },
      { n: "05", name: "AI & Automation", tag: "AI", desc: "Put intelligent systems to work across operations and customer experience.", caps: ["Business process automation", "AI assistants", "Customer service automation", "Data & insight solutions", "Custom AI applications"] },
      { n: "06", name: "Business Consulting", tag: "Advisory", desc: "Hands-on guidance that diagnoses problems and follows through on execution.", caps: ["Growth problem diagnosis", "Operational improvement", "Expansion planning", "Customer experience improvement", "Execution follow-up & guidance"] }
    ],
    proc: {
      eyebrow: "Process",
      title: "A clear path from idea to impact."
    },
    process: [
      { n: "01", name: "Discover", desc: "Understand the business, market, audience, and obstacles." },
      { n: "02", name: "Strategize", desc: "Define priorities, positioning, roadmap, and measurable goals." },
      { n: "03", name: "Build", desc: "Execute the marketing, sales, technology, and creative work." },
      { n: "04", name: "Launch", desc: "Release campaigns, products, platforms, and systems." },
      { n: "05", name: "Scale", desc: "Review performance, improve results, and expand what works." }
    ],
    port: {
      eyebrow: "Featured projects",
      title: "Selected work",
      intro: "Strategy, design, and technology woven into products and platforms — part of the Growth story, not a separate gallery.",
      view: "View project",
      all: "View all projects"
    },
    projects: [
      { n: "01", client: "Graphinion", industry: "Social Media Application", services: "React Native · TypeScript · Redux", cover: "assets/portfolio/graphinion-cover.webp", url: "https://apps.apple.com/us/app/graphinion/id6503644174" },
      { n: "02", client: "Blox", industry: "Marketplace Platform", services: "Full-stack · Search · Transactions", cover: "assets/portfolio/blox-cover.png", url: "https://www.linkedin.com/posts/islam-elswifiy-117785246_reactnative-blox-marketplaceapp-activity-7196490222585495552-Ohzh?utm_source=share&utm_medium=member_desktop&rcm=ACoAADz7nmMBt5P0ODlhTJi-vlUlyVsdyW9q0gE" },
      { n: "03", client: "Savvy", industry: "AI Chat Product", services: "Vite · NestJS · OpenAI", cover: "assets/portfolio/savvy-cover.png", url: "https://savvyai.info/" },
      { n: "04", client: "ElAvvocato", industry: "Law Firm Management System", services: "Full-stack · Roles · Documents", cover: "assets/portfolio/elavvocato-cover.png", url: "https://apps.apple.com/eg/app/elavvocato/id6670542137" },
      { n: "05", client: "Taqdum ERP", industry: "ERP and Operations Platform", services: "React · NestJS · Automation", placeholder: "Private Case Study" }
    ],
    res: {
      eyebrow: "Results",
      title: "Growth You Can Measure.",
      note: "Verified metrics appear here once supplied",
      metrics: [
        { v: "5", l: "Portfolio projects" },
        { v: "4", l: "Product categories" },
        { v: "3", l: "Build tracks" },
        { v: "1", l: "Private ERP case" }
      ]
    },
    about: {
      eyebrow: "About",
      title: "Growth Is Not a Service. It’s a System.",
      para: "Growth is a business growth partner bringing strategy, marketing, sales, technology, and artificial intelligence together in one integrated system built to create measurable progress.",
      pillars: ["Strategy-led", "Technology-driven", "Results-focused"]
    },
    ind: {
      eyebrow: "Industries",
      title: "Different industries. One objective: sustainable growth."
    },
    industries: ["Real Estate", "Restaurants & Hospitality", "Education", "E-commerce", "Professional Services", "Healthcare", "Technology", "Retail", "Manufacturing", "Startups"],
    ins: {
      eyebrow: "Insights",
      title: "Ideas on building growth.",
      soon: "Coming soon"
    },
    insights: ["Why advertising doesn’t always generate sales", "When your business actually needs a CRM", "How marketing, sales, and technology should work together"],
    cta: {
      title: "Your Next Stage Starts Here.",
      sub: "Tell us where you want to grow. We’ll map the path together.",
      btn: "Start a Conversation on WhatsApp"
    },
    foot: {
      statement: "An integrated business growth partner uniting strategy, marketing, sales, technology, and AI.",
      navTitle: "Navigate",
      servTitle: "Services",
      contactTitle: "Contact",
      wa: "WhatsApp",
      waVal: CONTACT.whatsappLabel,
      ig: "Instagram",
      li: "LinkedIn",
      fb: "Facebook",
      privacy: "Privacy Policy",
      terms: "Terms & Conditions",
      rights: "© 2026 Growth - Business Growth Partners. All rights reserved."
    }
  },
  ar: {
    dir: "rtl",
    display: "'IBM Plex Sans Arabic', sans-serif",
    body: "'IBM Plex Sans Arabic', sans-serif",
    langBtn: "EN",
    langSwitchLabel: "English",
    nav: {
      home: "الرئيسية",
      services: "خدماتنا",
      work: "أعمالنا",
      process: "آلية العمل",
      about: "من نحن",
      insights: "رؤيتنا",
      contact: "تواصل معنا",
      start: "ابدأ رحلة النمو"
    },
    hero: {
      eyebrow: "شريك متكامل لنمو الأعمال",
      h1a: "لا نكتفي بتسويق الشركات،",
      h1b: "بل نبني منظومة نموها.",
      sub: "نجمع الاستراتيجية والتسويق والمبيعات والتكنولوجيا والذكاء الاصطناعي لدفع شركتك نحو المرحلة القادمة.",
      cta1: "اكتشف خدماتنا",
      cta2: "ابدأ رحلة النمو",
      scroll: "اسحب"
    },
    trust: {
      line: "شركاء في نجاح شركات طموحة من قطاعات مختلفة.",
      note: "شركاء ومنتجات مختارة من البرتفوليو"
    },
    serv: {
      eyebrow: "ماذا نفعل",
      title: "خدماتنا",
      intro: "من الاستراتيجية والعلامة إلى المنتجات المدعومة بالذكاء الاصطناعي — نصمّم ونبني منظومات النمو التي تحتاجها الشركات الطموحة.",
      cta: "ابدأ المحادثة",
      all: "عرض كل الخدمات"
    },
    services: [
      { n: "01", name: "استراتيجية الأعمال", tag: "الاستراتيجية", desc: "رؤية واضحة لأين تتنافس وكيف تكسب، مبنية على واقع السوق لا على التخمين.", caps: ["تحليل السوق والأعمال", "تحليل المنافسين", "تخطيط النمو", "تطوير نموذج العمل", "استراتيجية دخول السوق"] },
      { n: "02", name: "التسويق والعلامة", tag: "العلامة", desc: "علامة لا تُنسى وحضور يحوّل الانتباه إلى طلب حقيقي.", caps: ["استراتيجية وهوية العلامة", "إدارة وسائل التواصل", "الإعلانات المدفوعة", "استراتيجية وإنتاج المحتوى", "تطوير الحضور الرقمي"] },
      { n: "03", name: "تنمية المبيعات", tag: "المبيعات", desc: "نحوّل الاهتمام إلى إيرادات عبر رحلات وأنظمة مصممة للتحويل.", caps: ["تصميم رحلة العميل", "العروض والمقترحات", "استراتيجية إدارة العملاء", "تحسين معدلات التحويل", "أنظمة متابعة العملاء"] },
      { n: "04", name: "المنتجات الرقمية", tag: "المنتج", desc: "مواقع وتطبيقات ومنصات مصممة للأداء والتوسّع.", caps: ["المواقع المؤسسية", "تجارب التجارة الإلكترونية", "تطبيقات الجوال", "لوحات التحكم والأنظمة", "تكامل الأنظمة"] },
      { n: "05", name: "الذكاء الاصطناعي والأتمتة", tag: "الذكاء الاصطناعي", desc: "نسخّر الأنظمة الذكية في العمليات وتجربة العملاء.", caps: ["أتمتة العمليات", "مساعدون بالذكاء الاصطناعي", "أتمتة خدمة العملاء", "حلول البيانات والرؤى", "تطبيقات ذكاء اصطناعي مخصصة"] },
      { n: "06", name: "الاستشارات", tag: "الإرشاد", desc: "إرشاد عملي يشخّص المشكلات ويتابع التنفيذ حتى النتيجة.", caps: ["تشخيص مشكلات النمو", "تحسين العمليات", "تخطيط التوسّع", "تحسين تجربة العميل", "متابعة التنفيذ والإرشاد"] }
    ],
    proc: {
      eyebrow: "آلية العمل",
      title: "مسار واضح من الفكرة إلى الأثر."
    },
    process: [
      { n: "01", name: "نفهم", desc: "نفهم النشاط والسوق والجمهور والتحديات." },
      { n: "02", name: "نخطط", desc: "نحدد الأولويات والتموضع وخارطة الطريق وأهدافاً قابلة للقياس." },
      { n: "03", name: "ننفذ", desc: "ننفذ أعمال التسويق والمبيعات والتقنية والإبداع." },
      { n: "04", name: "نطلق", desc: "نطلق الحملات والمنتجات والمنصات والأنظمة." },
      { n: "05", name: "نتوسع", desc: "نقيس الأداء، نحسّن النتائج، ونوسّع ما ينجح." }
    ],
    port: {
      eyebrow: "مشاريع مميزة",
      title: "أعمال مختارة",
      intro: "استراتيجية وتصميم وتقنية في منتجات ومنصات حقيقية — جزء من قصة Growth، وليست معرضًا منفصلًا.",
      view: "عرض المشروع",
      all: "عرض كل المشاريع"
    },
    projects: [
      { n: "01", client: "Graphinion", industry: "تطبيق تواصل اجتماعي", services: "React Native · TypeScript · Redux", cover: "assets/portfolio/graphinion-cover.webp", url: "https://apps.apple.com/us/app/graphinion/id6503644174" },
      { n: "02", client: "Blox", industry: "منصة سوق سيارات", services: "Full-stack · Search · Transactions", cover: "assets/portfolio/blox-cover.png", url: "https://www.linkedin.com/posts/islam-elswifiy-117785246_reactnative-blox-marketplaceapp-activity-7196490222585495552-Ohzh?utm_source=share&utm_medium=member_desktop&rcm=ACoAADz7nmMBt5P0ODlhTJi-vlUlyVsdyW9q0gE" },
      { n: "03", client: "Savvy", industry: "منتج دردشة بالذكاء الاصطناعي", services: "Vite · NestJS · OpenAI", cover: "assets/portfolio/savvy-cover.png", url: "https://savvyai.info/" },
      { n: "04", client: "ElAvvocato", industry: "نظام إدارة مكاتب محاماة", services: "Full-stack · Roles · Documents", cover: "assets/portfolio/elavvocato-cover.png", url: "https://apps.apple.com/eg/app/elavvocato/id6670542137" },
      { n: "05", client: "Taqdum ERP", industry: "منصة ERP وتشغيل داخلي", services: "React · NestJS · Automation", placeholder: "دراسة حالة خاصة" }
    ],
    res: {
      eyebrow: "النتائج",
      title: "نمو يمكن قياسه.",
      note: "تظهر هنا المؤشرات الموثّقة عند توفّرها",
      metrics: [
        { v: "5", l: "مشاريع في البرتفوليو" },
        { v: "4", l: "فئات منتجات" },
        { v: "3", l: "مسارات تنفيذ" },
        { v: "1", l: "دراسة ERP خاصة" }
      ]
    },
    about: {
      eyebrow: "من نحن",
      title: "Growth ليست خدمة منفصلة، بل منظومة نمو متكاملة.",
      para: "Growth هي شريك لنمو الأعمال، نجمع الاستراتيجية والتسويق والمبيعات والتكنولوجيا والذكاء الاصطناعي في منظومة واحدة تساعد الشركات على تحقيق تقدم واضح وقابل للقياس.",
      pillars: ["قيادة استراتيجية", "مدفوعة بالتقنية", "مركّزة على النتائج"]
    },
    ind: {
      eyebrow: "القطاعات",
      title: "قطاعات مختلفة وهدف واحد: نمو مستدام."
    },
    industries: ["العقارات", "المطاعم والضيافة", "التعليم", "التجارة الإلكترونية", "الخدمات المهنية", "الرعاية الصحية", "التقنية", "التجزئة", "التصنيع", "الشركات الناشئة"],
    ins: {
      eyebrow: "رؤى",
      title: "أفكار في بناء النمو.",
      soon: "قريباً"
    },
    insights: ["لماذا لا يحقق الإعلان المبيعات دائماً", "متى يحتاج عملك فعلاً إلى نظام CRM", "كيف يجب أن يعمل التسويق والمبيعات والتقنية معاً"],
    cta: {
      title: "مرحلة نمو شركتك القادمة تبدأ من هنا.",
      sub: "أخبرنا أين تريد أن تنمو، وسنرسم لك الطريق معاً.",
      btn: "ابدأ محادثة عبر واتساب"
    },
    foot: {
      statement: "شريك متكامل لنمو الأعمال يجمع الاستراتيجية والتسويق والمبيعات والتقنية والذكاء الاصطناعي.",
      navTitle: "تصفّح",
      servTitle: "خدماتنا",
      contactTitle: "تواصل",
      wa: "واتساب",
      waVal: CONTACT.whatsappLabel,
      ig: "إنستغرام",
      li: "لينكدإن",
      fb: "فيسبوك",
      privacy: "سياسة الخصوصية",
      terms: "الشروط والأحكام",
      rights: "© 2026 Growth - شركاء النمو. جميع الحقوق محفوظة."
    }
  }
};

let state = {
  lang: localStorage.getItem("growth-lang") || "en",
  activeService: 0,
  portOn: false,
  maxPortX: 0
};

const root = document.querySelector(".site");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

function get(path, object) {
  return path.split(".").reduce((value, key) => value && value[key], object);
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function iconArrow() {
  return '<svg class="arrow-icon" data-arrow width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';
}

function iconOpen() {
  return '<svg data-iconflip width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17L17 7M7 7h10v10"/></svg>';
}

function renderStaticText(t) {
  document.documentElement.lang = state.lang;
  document.documentElement.dir = t.dir;
  root.style.setProperty("--display", t.display);
  root.style.setProperty("--body", t.body);

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const value = get(node.dataset.i18n, t);
    if (value !== undefined) node.textContent = value;
  });

  document.querySelectorAll("[data-lang-toggle]").forEach((node) => {
    node.textContent = t.langBtn;
  });

  document.querySelectorAll("[data-lang-toggle-secondary]").forEach((node) => {
    node.textContent = t.langSwitchLabel;
  });

  const whatsapp = document.querySelector("[data-contact-whatsapp]");
  if (whatsapp) whatsapp.textContent = `${t.foot.wa} · ${t.foot.waVal}`;
}

function renderPartners(t) {
  const list = document.querySelector("[data-partner-list]");
  if (!list) return;
  list.innerHTML = PARTNERS.map((partner) => {
    const label = escapeHtml(partner.name);
    if (partner.logo) {
      return `
        <div class="partner-logo" title="${label}">
          <img src="${escapeHtml(partner.logo)}" alt="${label}">
        </div>
      `;
    }
    return `<div class="partner-logo partner-logo-text" title="${label}">${escapeHtml(partner.text || partner.name)}</div>`;
  }).join("") + `<span>${escapeHtml(t.trust.note)}</span>`;
}

function renderServices(t) {
  const list = document.querySelector("[data-service-list]");
  if (!list) return;
  list.innerHTML = t.services.map((service) => `
    <article class="service-row" data-serv-card data-reveal>
      <div class="service-row-top">
        <span class="service-row-num">${escapeHtml(service.n)}</span>
        <div class="service-row-main">
          <h3>${escapeHtml(service.name)}</h3>
          <p>${escapeHtml(service.desc)}</p>
        </div>
        <span class="service-row-arrow" aria-hidden="true">${iconArrow()}</span>
      </div>
      <div class="service-row-caps">
        ${service.caps.map((cap) => `<span>${escapeHtml(cap)}</span>`).join("")}
      </div>
    </article>
  `).join("");
}

function renderProjects(t) {
  const list = document.querySelector("[data-project-list]");
  if (!list) return;
  list.innerHTML = t.projects.map((project, index) => {
    const href = project.url || "#contact";
    const external = project.url ? 'target="_blank" rel="noopener"' : "";
    const media = project.cover
      ? `<img class="featured-cover" src="${escapeHtml(project.cover)}" alt="${escapeHtml(project.client)}" loading="${index < 2 ? "eager" : "lazy"}">`
      : `<div class="featured-placeholder"><strong>${escapeHtml(project.placeholder || "PRIVATE CASE STUDY")}</strong><span>${escapeHtml(project.client)}</span></div>`;

    return `
      <a class="featured-item" href="${escapeHtml(href)}" ${external} data-port-card data-reveal data-cursor data-cursor-text="${escapeHtml(t.port.view)}">
        <article class="featured-card">
          <div class="featured-media" data-port-media>
            ${media}
          </div>
          <div class="featured-copy">
            <h3 class="featured-heading">
              <span class="featured-client">${escapeHtml(project.client)}</span>
              <span class="featured-sep" aria-hidden="true"> – </span>
              <span class="featured-tagline">${escapeHtml(project.industry)}</span>
            </h3>
            <p class="featured-stack">${escapeHtml(project.services)}</p>
            <span class="featured-link">${escapeHtml(t.port.view)}${iconArrow()}</span>
          </div>
        </article>
      </a>
    `;
  }).join("");
}

function renderProcess(t) {
  const list = document.querySelector("[data-process-list]");
  if (!list) return;
  list.innerHTML = t.process.map((step) => `
    <article class="process-node" data-proc-node>
      <span class="process-dot" data-proc-dot>${escapeHtml(step.n)}</span>
      <div>
        <h3>${escapeHtml(step.name)}</h3>
        <p>${escapeHtml(step.desc)}</p>
      </div>
    </article>
  `).join("");
}

function renderMetrics(t) {
  const list = document.querySelector("[data-metrics-list]");
  if (!list) return;
  list.innerHTML = t.res.metrics.map((metric) => `
    <article class="metric-card" data-reveal>
      <strong>${escapeHtml(metric.v)}</strong>
      <span>${escapeHtml(metric.l)}</span>
    </article>
  `).join("");
}

function renderPillars(t) {
  const list = document.querySelector("[data-pillars-list]");
  if (!list) return;
  list.innerHTML = t.about.pillars.map((pillar) => `
    <span class="pillar"><span aria-hidden="true"></span>${escapeHtml(pillar)}</span>
  `).join("");
}

function renderIndustries(t) {
  const list = document.querySelector("[data-industries-list]");
  if (!list) return;
  list.innerHTML = t.industries.map((industry) => `
    <span class="industry-chip" data-ind-chip>${escapeHtml(industry)}</span>
  `).join("");
}

function renderInsights(t) {
  const list = document.querySelector("[data-insights-list]");
  if (!list) return;
  list.innerHTML = t.insights.map((insight) => `
    <article class="insight-card" data-reveal data-cursor>
      <span>${escapeHtml(t.ins.soon)}</span>
      <h3>${escapeHtml(insight)}</h3>
      <span class="open-icon">${iconOpen()}</span>
    </article>
  `).join("");
}

function renderFooterServices(t) {
  const list = document.querySelector("[data-footer-services]");
  if (!list) return;
  list.innerHTML = t.services.map((service) => `<a href="#services">${escapeHtml(service.name)}</a>`).join("");
}

function setupPortfolio() {
  const track = document.querySelector("[data-port-track]");
  if (track) track.style.transform = "none";
}

function updatePortfolio() {}

function setupServiceRows() {
  document.querySelectorAll("[data-serv-card]").forEach((row) => {
    if (row.dataset.servBound) return;
    row.dataset.servBound = "true";
    row.addEventListener("mouseenter", () => row.classList.add("is-active"));
    row.addEventListener("mouseleave", () => row.classList.remove("is-active"));
    row.addEventListener("focusin", () => row.classList.add("is-active"));
    row.addEventListener("focusout", () => row.classList.remove("is-active"));
  });
}

function updateProcess() {
  const process = document.querySelector("#process");
  const fill = document.querySelector("[data-proc-fill]");
  const nodes = [...document.querySelectorAll("[data-proc-node]")];
  if (!process || !fill) return;

  const rect = process.getBoundingClientRect();
  let progress = (window.innerHeight * .75 - rect.top) / (rect.height * .7);
  progress = Math.max(0, Math.min(1, progress));

  if (window.innerWidth > 880) {
    fill.style.transformOrigin = state.lang === "ar" ? "right center" : "left center";
    fill.style.transform = `scaleX(${progress})`;
  } else {
    fill.style.transform = "scaleX(1)";
  }

  nodes.forEach((node, index) => {
    const on = progress >= index / Math.max(1, nodes.length - 1) - .03;
    node.classList.toggle("is-on", on);
  });
}

function updateNav() {
  const nav = document.querySelector("[data-nav]");
  nav?.classList.toggle("is-scrolled", window.scrollY > 30);

  const links = [...document.querySelectorAll("[data-nav-link]")];
  const sections = links
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);
  const current = sections.reduce((active, section) => {
    const rect = section.getBoundingClientRect();
    return rect.top <= 120 ? section : active;
  }, sections[0]);

  links.forEach((link) => {
    link.classList.toggle("is-active", current && link.getAttribute("href") === `#${current.id}`);
  });
}

function updateHeroParallax() {
  const heroBg = document.querySelector("[data-hero-bg]");
  if (!heroBg) return;
  if (reduceMotion.matches) {
    heroBg.style.transform = state.lang === "ar" ? "scaleX(-1)" : "none";
    return;
  }
  const flip = state.lang === "ar" ? "scaleX(-1) " : "";
  heroBg.style.transform = `${flip}translateY(${window.scrollY * .12}px) scale(1.06)`;
}

function onScroll() {
  updateNav();
  updateHeroParallax();
  updateProcess();
  updatePortfolio();
}

function setupReveals() {
  const revealNodes = [...document.querySelectorAll("[data-reveal]")];
  if (reduceMotion.matches || !("IntersectionObserver" in window)) {
    revealNodes.forEach((node) => node.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const delay = entry.target.dataset.delay || "0";
      entry.target.style.transitionDelay = `${delay}ms`;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  }, { threshold: .08, rootMargin: "0px 0px -10% 0px" });

  revealNodes.forEach((node) => observer.observe(node));
}

function setupCursor() {
  const fine = window.matchMedia("(pointer: fine)").matches;
  if (!fine || reduceMotion.matches || window.innerWidth <= 900) return;

  const ring = document.querySelector("[data-cursor-ring]");
  const dot = document.querySelector("[data-cursor-dot]");
  const label = document.querySelector("[data-cursor-label]");
  if (!ring || !dot || !label) return;

  ring.style.display = "block";
  let rx = window.innerWidth / 2;
  let ry = window.innerHeight / 2;
  let cx = rx;
  let cy = ry;

  window.addEventListener("mousemove", (event) => {
    rx = event.clientX;
    ry = event.clientY;
  });

  const loop = () => {
    cx += (rx - cx) * .2;
    cy += (ry - cy) * .2;
    ring.style.transform = `translate(${cx}px, ${cy}px)`;
    requestAnimationFrame(loop);
  };
  loop();

  document.querySelectorAll("[data-cursor]").forEach((element) => {
    if (element.dataset.cursorBound) return;
    element.dataset.cursorBound = "true";
    element.addEventListener("mouseenter", () => {
      const text = element.dataset.cursorText;
      if (text) {
        dot.style.width = "80px";
        dot.style.height = "80px";
        dot.style.background = "#46C35A";
        dot.style.borderColor = "#46C35A";
        label.textContent = text;
        label.style.opacity = "1";
      } else {
        dot.style.width = "50px";
        dot.style.height = "50px";
        dot.style.background = "rgba(70, 195, 90, .14)";
        dot.style.borderColor = "rgba(70, 195, 90, .6)";
      }
    });

    element.addEventListener("mouseleave", () => {
      dot.style.width = "32px";
      dot.style.height = "32px";
      dot.style.background = "transparent";
      dot.style.borderColor = "rgba(70, 195, 90, .75)";
      label.textContent = "";
      label.style.opacity = "0";
    });
  });
}

function setupMagnetic() {
  const fine = window.matchMedia("(pointer: fine)").matches;
  if (!fine || reduceMotion.matches || window.innerWidth <= 900) return;

  document.querySelectorAll("[data-magnetic]").forEach((element) => {
    if (element.dataset.magneticBound) return;
    element.dataset.magneticBound = "true";
    element.style.transition = "transform .25s cubic-bezier(.2, .8, .3, 1)";
    element.addEventListener("mousemove", (event) => {
      const rect = element.getBoundingClientRect();
      const mx = event.clientX - (rect.left + rect.width / 2);
      const my = event.clientY - (rect.top + rect.height / 2);
      element.style.transform = `translate(${mx * .22}px, ${my * .3}px)`;
    });
    element.addEventListener("mouseleave", () => {
      element.style.transform = "translate(0, 0)";
    });
  });
}

function setupIndustryGlow() {
  const glow = document.querySelector("[data-ind-glow]");
  if (!glow || reduceMotion.matches) return;

  document.querySelectorAll("[data-ind-chip]").forEach((chip, index) => {
    if (chip.dataset.industryBound) return;
    chip.dataset.industryBound = "true";
    chip.addEventListener("mouseenter", () => {
      glow.style.transform = `translate(${(index % 3 - 1) * 120}px, ${(Math.floor(index / 3) - 1) * 70}px)`;
      glow.style.opacity = ".85";
    });
    chip.addEventListener("mouseleave", () => {
      glow.style.opacity = ".5";
    });
  });
}

function setupPortfolioHover() {
  document.querySelectorAll("[data-port-card]").forEach((card) => {
    if (card.dataset.portBound) return;
    card.dataset.portBound = "true";
    const cover = card.querySelector(".featured-cover");
    if (!cover) return;
    card.addEventListener("mouseenter", () => {
      if (!reduceMotion.matches) cover.style.transform = "scale(1.045)";
    });
    card.addEventListener("mouseleave", () => {
      cover.style.transform = "scale(1)";
    });
  });
}

function setupCtaGlow() {
  const glow = document.querySelector("[data-cta-glow]");
  const cta = document.querySelector("#contact");
  if (!glow || !cta || reduceMotion.matches) return;

  cta.addEventListener("mousemove", (event) => {
    const rect = cta.getBoundingClientRect();
    glow.style.transform = `translate(${(event.clientX - rect.left - rect.width / 2) * .3}px, ${(event.clientY - rect.top - rect.height / 2) * .3}px)`;
  });
}

function setupHeroVideo() {
  const video = document.querySelector("[data-hero-video]");
  if (!video) return;
  video.muted = true;
  video.loop = true;
  video.defaultMuted = true;

  const tryPlay = () => {
    try {
      const promise = video.play();
      if (promise && promise.catch) promise.catch(() => {});
    } catch (_) {
      // Some browsers block autoplay until interaction; muted autoplay retries below.
    }
  };

  const restart = () => {
    try {
      video.currentTime = 0;
    } catch (_) {
      // Ignore media seek edge cases.
    }
    tryPlay();
  };

  video.addEventListener("ended", restart);
  video.addEventListener("loadeddata", tryPlay);
  document.addEventListener("visibilitychange", () => {
    if (!document.hidden) tryPlay();
  });
  tryPlay();
}

function openMenu() {
  const drawer = document.querySelector("[data-drawer]");
  drawer?.classList.add("is-open");
  drawer?.setAttribute("aria-hidden", "false");
  document.body.classList.add("menu-open");
}

function closeMenu() {
  const drawer = document.querySelector("[data-drawer]");
  drawer?.classList.remove("is-open");
  drawer?.setAttribute("aria-hidden", "true");
  document.body.classList.remove("menu-open");
}

function toggleLanguage() {
  state.lang = state.lang === "en" ? "ar" : "en";
  localStorage.setItem("growth-lang", state.lang);
  render();
  setupPortfolio();
  onScroll();
}

function bindEvents() {
  document.querySelector("[data-burger]")?.addEventListener("click", openMenu);
  document.querySelector("[data-close-menu]")?.addEventListener("click", closeMenu);
  document.querySelectorAll("[data-close-on-click]").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });
  document.querySelectorAll("[data-lang-toggle], [data-lang-toggle-secondary]").forEach((button) => {
    button.addEventListener("click", toggleLanguage);
  });

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", () => {
    setupPortfolio();
    onScroll();
  });
}

function render() {
  const t = CONTENT[state.lang] || CONTENT.en;
  state.activeService = 0;
  renderStaticText(t);
  renderPartners(t);
  renderServices(t);
  renderProcess(t);
  renderProjects(t);
  renderMetrics(t);
  renderPillars(t);
  renderIndustries(t);
  renderInsights(t);
  renderFooterServices(t);
  setupReveals();
  setupServiceRows();
  setupIndustryGlow();
  setupPortfolioHover();
  setupCursor();
  setupMagnetic();
}

document.addEventListener("DOMContentLoaded", () => {
  render();
  bindEvents();
  setupCtaGlow();
  setupHeroVideo();
  setupPortfolio();
  onScroll();
  setTimeout(() => {
    setupPortfolio();
    onScroll();
  }, 250);
});
