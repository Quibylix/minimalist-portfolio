import type { AstroGlobal } from "astro";
import { en } from "../i18n/en";
import { es } from "../i18n/es";

export function getLocale(astro: AstroGlobal) {
  const localeCookie = astro.cookies.get("locale");

  if (localeCookie?.value && ["en", "es"].includes(localeCookie.value)) {
    return localeCookie.value;
  }

  const preferredLocaleFromHeaders = astro.preferredLocale ?? "en";

  astro.cookies.set("locale", preferredLocaleFromHeaders);

  return preferredLocaleFromHeaders;
}

export function getTranslations(astro: AstroGlobal) {
  switch (getLocale(astro)) {
    case "en":
      return en;
    case "es":
      return es;
    default:
      return en;
  }
}
