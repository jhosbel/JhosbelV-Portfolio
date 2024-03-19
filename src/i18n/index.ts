import spanish from "../i18n/locales/es.json";
import english from "../i18n/locales/en.json";

const LANG = {
  SPANISH: "es",
  ENGLISH: "en",
};

export const getI18n = ({ currentLocale = "es" }) => {
  if (currentLocale === LANG.ENGLISH) return { ...spanish, ...english };
  return spanish;
};
