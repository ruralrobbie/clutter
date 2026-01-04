// script.js
"use strict";

const I18N = {
  en: {
    meta: {
      title: "Stewardship in Practice",
      description: "A simple, step-by-step approach to declutter with purpose."
    },
    brand: { name: "Stewardship in Practice" },
    a: { skip: "Skip to content" },
    lang: { label: "Language" },
    nav: {
      home: "Home",
      why: "Why it matters",
      method: "The Method",
      resources: "Resources"
    },
    hero: {
      title: "Declutter with purpose.",
      lead: "A simple, step-by-step approach to keep what you value and let go of what you don’t."
    },
    cta: {
      takeAction: "Take Action Now",
      learnMore: "Learn the method"
    },
    why: {
      title: "Why stewardship matters",
      body: "Stewardship is caring for what you’ve been given—time, space, and belongings—so they serve your life, not weigh it down."
    },
    method: {
      title: "Actionable Stewardship",
      lead: "Use this five-step loop whenever you declutter:",
      step1: { title: "1. Set a boundary", body: "Choose one drawer, one shelf, or 15 minutes." },
      step2: { title: "2. Sort honestly", body: "Keep, donate, recycle, or discard—no “maybe” pile." },
      step3: { title: "3. Return with intention", body: "Put items where you’ll use them. Store by frequency." },
      step4: { title: "4. Release responsibly", body: "Donate what’s usable, recycle what isn’t, and trash the rest." },
      step5: { title: "5. Maintain lightly", body: "One in, one out. Review monthly." }
    },
    resources: {
      title: "Quick resources",
      r1: "10-minute reset checklist",
      r2: "Donation drop-off plan",
      r3: "“Keep list” questions"
    },
    footer: { note: "Built for practical, respectful decluttering." },
    noscript:
      "This page works best with JavaScript enabled for language switching and smooth scrolling."
  },

  fr: {
    meta: {
      title: "Stewardship en pratique",
      description: "Une méthode simple, étape par étape, pour désencombrer avec intention."
    },
    brand: { name: "Stewardship en pratique" },
    a: { skip: "Aller au contenu" },
    lang: { label: "Langue" },
    nav: {
      home: "Accueil",
      why: "Pourquoi c’est important",
      method: "La méthode",
      resources: "Ressources"
    },
    hero: {
      title: "Désencombrez avec intention.",
      lead: "Une méthode simple, étape par étape, pour garder l’essentiel et vous séparer du reste."
    },
    cta: {
      takeAction: "Agir maintenant",
      learnMore: "Découvrir la méthode"
    },
    why: {
      title: "Pourquoi la bonne gestion compte",
      body: "La bonne gestion (stewardship), c’est prendre soin de ce que vous avez—votre temps, votre espace, vos objets—pour qu’ils soutiennent votre vie au lieu de l’alourdir."
    },
    method: {
      title: "Stewardship concrète",
      lead: "Utilisez cette boucle en cinq étapes à chaque session de tri :",
      step1: { title: "1. Fixez une limite", body: "Un tiroir, une étagère ou 15 minutes, pas plus." },
      step2: {
        title: "2. Triez sans vous mentir",
        body: "Garder, donner, recycler ou jeter—pas de pile “au cas où”."
      },
      step3: {
        title: "3. Remettez en place avec intention",
        body: "Rangez là où vous l’utiliserez. Stockez selon la fréquence."
      },
      step4: {
        title: "4. Séparez-vous de façon responsable",
        body: "Donnez ce qui peut servir, recyclez ce qui le peut, jetez le reste."
      },
      step5: {
        title: "5. Entretenez sans effort",
        body: "Un objet qui entre, un objet qui sort. Faites un point chaque mois."
      }
    },
    resources: {
      title: "Ressources rapides",
      r1: "Checklist “reset” en 10 minutes",
      r2: "Plan de dépôt pour les dons",
      r3: "Questions pour décider ce qu’on garde"
    },
    footer: { note: "Conçu pour un désencombrement pratique et respectueux." },
    noscript:
      "Cette page fonctionne mieux avec JavaScript activé pour le changement de langue et le défilement fluide."
  },

  ko: {
    meta: {
      title: "실천하는 스튜어드십",
      description: "의미 있게 정리할 수 있도록 돕는 간단한 단계별 방법입니다."
    },
    brand: { name: "실천하는 스튜어드십" },
    a: { skip: "본문으로 건너뛰기" },
    lang: { label: "언어" },
    nav: {
      home: "홈",
      why: "중요한 이유",
      method: "방법",
      resources: "자료"
    },
    hero: {
      title: "의미 있게 정리하세요.",
      lead: "꼭 필요한 것은 남기고, 부담이 되는 것은 놓아주는 간단한 단계별 방법입니다."
    },
    cta: {
      takeAction: "지금 실천하기",
      learnMore: "방법 알아보기"
    },
    why: {
      title: "왜 ‘관리’가 중요한가요",
      body: "스튜어드십은 시간, 공간, 물건처럼 내가 맡은 것을 잘 돌보는 태도입니다. 내 삶을 돕게 만들지, 짐이 되게 두지 않는 것이 핵심입니다."
    },
    method: {
      title: "바로 실행하는 스튜어드십",
      lead: "정리할 때마다 아래 5단계를 반복해 보세요.",
      step1: { title: "1. 범위를 정하세요", body: "서랍 하나, 선반 한 칸, 또는 15분처럼 딱 한계를 정합니다." },
      step2: { title: "2. 솔직하게 분류하세요", body: "보관, 기부, 재활용, 폐기. “일단 보류” 더미는 만들지 않습니다." },
      step3: { title: "3. 의도적으로 제자리에 두세요", body: "실제로 쓰는 곳에 두고, 사용 빈도대로 보관합니다." },
      step4: { title: "4. 책임 있게 보내세요", body: "쓸 수 있는 것은 기부하고, 가능하면 재활용하고, 나머지는 폐기합니다." },
      step5: { title: "5. 가볍게 유지하세요", body: "하나 들이면 하나 내보내기. 한 달에 한 번만 점검하세요." }
    },
    resources: {
      title: "빠른 자료",
      r1: "10분 리셋 체크리스트",
      r2: "기부 전달 계획",
      r3: "“남길까?” 판단 질문"
    },
    footer: { note: "실용적이고 존중하는 정리를 위해 만들었습니다." },
    noscript:
      "언어 전환과 부드러운 스크롤을 위해 JavaScript를 켜면 더 편리합니다."
  }
};

function getByPath(obj, path) {
  return path.split(".").reduce((acc, key) => (acc && acc[key] != null ? acc[key] : null), obj);
}

function prefersReducedMotion() {
  return window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function setLanguage(lang) {
  const safeLang = I18N[lang] ? lang : "en";

  document.documentElement.lang = safeLang;
  localStorage.setItem("lang", safeLang);

  // Update pressed state on language buttons
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.setAttribute("aria-pressed", btn.dataset.lang === safeLang ? "true" : "false");
  });

  // Update all translatable nodes
  const nodes = document.querySelectorAll("[data-i18n]");
  nodes.forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const value = getByPath(I18N[safeLang], key);

    if (value == null) return;

    const attr = el.getAttribute("data-i18n-attr");
    if (attr) {
      el.setAttribute(attr, String(value));
      return;
    }

    // Title elements also update the document title for better UX
    if (el.tagName.toLowerCase() === "title") {
      el.textContent = String(value);
      document.title = String(value);
      return;
    }

    el.textContent = String(value);
  });
}

function enableSmoothScroll() {
  document.addEventListener("click", (e) => {
    const link = e.target.closest('a[href^="#"]');
    if (!link) return;

    const hash = link.getAttribute("href");
    if (!hash || hash === "#") return;

    const target = document.querySelector(hash);
    if (!target) return;

    e.preventDefault();

    const behavior = prefersReducedMotion() ? "auto" : "smooth";
    target.scrollIntoView({ behavior, block: "start" });

    // If the target contains a focusable heading, focus it for accessibility
    const focusTarget = target.matches("section") ? target.querySelector("h2, h1, [tabindex='-1']") : target;
    if (focusTarget && typeof focusTarget.focus === "function") {
      // Delay focus slightly so it follows the scroll on some browsers
      window.setTimeout(() => focusTarget.focus({ preventScroll: true }), behavior === "smooth" ? 250 : 0);
    }
  });
}

function setupFloatingCta() {
  const floating = document.querySelector(".floating-cta");
  const method = document.querySelector("#method");
  const home = document.querySelector("#home");

  if (!floating || !method) return;

  const revealAfterPx = 120;

  function updateVisibility() {
    // Show after the user has started scrolling a bit
    const show = window.scrollY > revealAfterPx;
    floating.classList.toggle("is-visible", show);
  }

  updateVisibility();
  window.addEventListener("scroll", updateVisibility, { passive: true });

  // When the method section comes into view, animate the CTA briefly
  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;

        document.querySelectorAll(".action-link").forEach((cta) => {
          cta.classList.remove("cta-animate");
          // Force reflow to restart animation
          void cta.offsetWidth;
          cta.classList.add("cta-animate");
        });
      }
    },
    { threshold: 0.35 }
  );

  io.observe(method);

  // If there's no hero section, keep the floating CTA available immediately
  if (!home) {
    floating.classList.add("is-visible");
  }
}

function detectInitialLanguage() {
  const stored = localStorage.getItem("lang");
  if (stored && I18N[stored]) return stored;

  const langs = navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language || "en"];
  const normalized = langs.map((l) => String(l).toLowerCase());

  if (normalized.some((l) => l.startsWith("fr"))) return "fr";
  if (normalized.some((l) => l.startsWith("ko"))) return "ko";
  return "en";
}

document.addEventListener("DOMContentLoaded", () => {
  // Language switching
  const initial = detectInitialLanguage();
  setLanguage(initial);

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => setLanguage(btn.dataset.lang));
  });

  // Behaviors
  enableSmoothScroll();
  setupFloatingCta();
});
