import React from "react";
import { useTranslation } from "react-i18next";
import { languages } from "../../constants/languages";
import { Language, AuthFooter } from "./../../auth.styled";
import { Link } from "react-router-dom";

export default function LanguageFooter() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
  };

  return (
    <AuthFooter>
      <Link to="/">{t("index page")}</Link>
      {languages.map((lang, id) => (
        <Language
          key={id}
          onClick={() => changeLanguage(lang.l)}
          selected={i18n.language === lang.l}
        >
          {lang.title}
        </Language>
      ))}
    </AuthFooter>
  );
}
