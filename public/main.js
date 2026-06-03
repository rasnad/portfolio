const nav = document.querySelector("[data-nav]");
const navToggle = document.querySelector("[data-nav-toggle]");
const navSheet = document.querySelector("[data-nav-sheet]");
const localeButtons = document.querySelectorAll("[data-locale-set]");
const form = document.querySelector("[data-contact-form]");
const okMessage = document.querySelector("[data-form-ok]");

function setScrolledNav() {
  nav?.classList.toggle("scrolled", window.scrollY > 24);
}

function getLocale() {
  return localStorage.getItem("portfolio-locale") || "en";
}

function applyLocale(locale) {
  document.documentElement.lang = locale;

  document.querySelectorAll("[data-i18n-en]").forEach((element) => {
    const value = locale === "es" ? element.dataset.i18nEs : element.dataset.i18nEn;
    if (value) element.textContent = value;
  });

  document.querySelectorAll("[data-i18n-html-en]").forEach((element) => {
    const value = locale === "es" ? element.dataset.i18nHtmlEs : element.dataset.i18nHtmlEn;
    if (value) element.innerHTML = value;
  });

  document.querySelectorAll("[data-i18n-placeholder-en]").forEach((element) => {
    const value = locale === "es" ? element.dataset.i18nPlaceholderEs : element.dataset.i18nPlaceholderEn;
    if (value) element.placeholder = value;
  });

  document.querySelectorAll("[data-i18n-aria-en]").forEach((element) => {
    const value = locale === "es" ? element.dataset.i18nAriaEs : element.dataset.i18nAriaEn;
    if (value) element.setAttribute("aria-label", value);
  });

  localeButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.localeSet === locale);
  });
}

setScrolledNav();
window.addEventListener("scroll", setScrolledNav, { passive: true });

navToggle?.addEventListener("click", () => {
  const isOpen = navToggle.classList.toggle("open");
  navSheet?.classList.toggle("open", isOpen);
  navToggle.setAttribute("aria-expanded", String(isOpen));
  document.body.classList.toggle("menu-open", isOpen);
});

navSheet?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navToggle?.classList.remove("open");
    navSheet.classList.remove("open");
    navToggle?.setAttribute("aria-expanded", "false");
    document.body.classList.remove("menu-open");
  });
});

applyLocale(getLocale());

localeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const locale = button.dataset.localeSet || "en";
    localStorage.setItem("portfolio-locale", locale);
    applyLocale(locale);
  });
});

const validationMessages = {
  en: {
    nombre: "Enter your name.",
    email: "Enter a valid email.",
    mensaje: "Tell me a bit more (minimum 8 characters).",
  },
  es: {
    nombre: "Ingresá tu nombre.",
    email: "Ingresá un email válido.",
    mensaje: "Contame un poco más (mín. 8 caracteres).",
  },
};

function setFieldState(field, message) {
  const wrapper = field.closest(".field");
  const error = wrapper?.querySelector(".err");
  wrapper?.classList.toggle("invalid", Boolean(message));
  if (error) error.textContent = message || "";
}

function validateField(field) {
  const locale = document.documentElement.lang === "es" ? "es" : "en";
  const validators = {
    nombre: (value) => value.trim().length >= 2 || validationMessages[locale].nombre,
    email: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim()) || validationMessages[locale].email,
    mensaje: (value) => value.trim().length >= 8 || validationMessages[locale].mensaje,
  };

  const validator = validators[field.name];
  if (!validator) return true;
  const result = validator(field.value);
  const message = result === true ? "" : result;
  setFieldState(field, message);
  return result === true;
}

if (form) {
  const fields = Array.from(form.querySelectorAll("input, textarea"));

  fields.forEach((field) => {
    field.addEventListener("blur", () => {
      if (field.value) validateField(field);
    });

    field.addEventListener("input", () => {
      if (field.closest(".field")?.classList.contains("invalid")) validateField(field);
    });
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const isValid = fields.map(validateField).every(Boolean);

    if (!isValid) {
      fields.find((field) => field.closest(".field")?.classList.contains("invalid"))?.focus();
      return;
    }

    const locale = document.documentElement.lang === "es" ? "es" : "en";
    const firstName = fields.find((field) => field.name === "nombre")?.value.trim().split(" ")[0];
    const template = locale === "es" ? okMessage?.dataset.i18nSuccessEs : okMessage?.dataset.i18nSuccessEn;
    const text = template?.replace("{name}", firstName ? `, ${firstName}` : "") || "";
    const message = okMessage?.querySelector("span");
    if (message) message.textContent = text;

    form.hidden = true;
    okMessage?.classList.add("show");
  });
}
