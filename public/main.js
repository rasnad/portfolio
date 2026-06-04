const nav = document.querySelector("[data-nav]");
const navToggle = document.querySelector("[data-nav-toggle]");
const navSheet = document.querySelector("[data-nav-sheet]");
const localeButtons = document.querySelectorAll("[data-locale-set]");
const localeModal = document.querySelector("[data-locale-modal]");
const localeModalOpen = document.querySelector("[data-locale-modal-open]");
const localeCurrentLabel = document.querySelector("[data-locale-current-label]");
const localeModalOptions = document.querySelectorAll("[data-locale-modal-option]");
const form = document.querySelector("[data-contact-form]");
const okMessage = document.querySelector("[data-form-ok]");
const submitButton = form?.querySelector("[data-submit-button]");
const submitButtonLabel = submitButton?.querySelector("span");
const localeSessionKey = "portfolio-locale-session-seen";

function setScrolledNav() {
  nav?.classList.toggle("scrolled", window.scrollY > 24);
}

function getLocale() {
  return localStorage.getItem("portfolio-locale") || "en";
}

function hasSeenLocaleModalThisSession() {
  return sessionStorage.getItem(localeSessionKey) === "true";
}

function markLocaleModalSeen() {
  sessionStorage.setItem(localeSessionKey, "true");
}

function isMobileViewport() {
  return window.matchMedia("(max-width: 760px)").matches;
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

  if (localeCurrentLabel && localeModalOpen) {
    const text = locale === "es" ? localeModalOpen.dataset.localeLabelEs : localeModalOpen.dataset.localeLabelEn;
    if (text) localeCurrentLabel.textContent = text;
  }

  localeModalOptions.forEach((button) => {
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

function toggleLocaleModal(isOpen) {
  if (!localeModal) return;
  localeModal.hidden = !isOpen;
  localeModal.classList.toggle("open", isOpen);
  document.body.classList.toggle("locale-modal-open", isOpen);
}

localeModalOpen?.addEventListener("click", () => {
  toggleLocaleModal(true);
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

if (isMobileViewport()) {
  if (!hasSeenLocaleModalThisSession()) {
    toggleLocaleModal(true);
  }
}

window.addEventListener("resize", () => {
  if (!isMobileViewport()) {
    toggleLocaleModal(false);
  }
});

localeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const locale = button.dataset.localeSet || "en";
    localStorage.setItem("portfolio-locale", locale);
    markLocaleModalSeen();
    applyLocale(locale);
    toggleLocaleModal(false);
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

function getFormLocale() {
  return document.documentElement.lang === "es" ? "es" : "en";
}

function setFormMessage(text, tone = "success") {
  const message = okMessage?.querySelector("span");
  if (message) message.textContent = text;
  okMessage?.classList.toggle("is-error", tone === "error");
  okMessage?.classList.add("show");
}

function setSubmitState(isSending) {
  if (!submitButton) return;
  const locale = getFormLocale();
  const idleLabel = locale === "es" ? submitButton.dataset.i18nEs : submitButton.dataset.i18nEn;
  const sendingLabel = locale === "es" ? form?.dataset.i18nSendingEs : form?.dataset.i18nSendingEn;

  submitButton.disabled = isSending;
  submitButton.setAttribute("aria-busy", String(isSending));
  if (submitButtonLabel) submitButtonLabel.textContent = isSending ? sendingLabel || idleLabel || "" : idleLabel || "";
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

    const locale = getFormLocale();
    const firstName = fields.find((field) => field.name === "nombre")?.value.trim().split(" ")[0];
    const endpoint = form.dataset.contactEndpoint;
    const payload = new FormData(form);

    if (!endpoint) return;

    okMessage?.classList.remove("show", "is-error");
    setSubmitState(true);

    fetch(endpoint, {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: payload,
    })
      .then(async (response) => {
        const data = await response.json().catch(() => ({}));
        if (!response.ok || data.success === "false") {
          throw new Error("request_failed");
        }

        const template = locale === "es" ? okMessage?.dataset.i18nSuccessEs : okMessage?.dataset.i18nSuccessEn;
        const text = template?.replace("{name}", firstName ? `, ${firstName}` : "") || "";

        fields.forEach((field) => {
          field.value = "";
          setFieldState(field, "");
        });

        setFormMessage(text, "success");
      })
      .catch(() => {
        const errorText = locale === "es" ? form.dataset.i18nErrorEs : form.dataset.i18nErrorEn;
        setFormMessage(errorText || "", "error");
      })
      .finally(() => {
        setSubmitState(false);
      });
  });
}
