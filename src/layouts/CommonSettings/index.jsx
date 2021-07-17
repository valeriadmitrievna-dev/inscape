import React from "react";
import { useTranslation } from "react-i18next";
import CommonSettingsLayouts from "./index.layout";

export default function CommonSettings() {
  const [t, i18n] = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
  };

  return <CommonSettingsLayouts t={t} changeLanguage={changeLanguage} />;
}
