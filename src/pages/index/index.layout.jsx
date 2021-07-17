import React from "react";
import { IndexContainer, Logo } from "./index.styled";
import { ReactComponent as LogoTransparent } from "../../assets/logo_transparent_whited.svg";
import { BlueButton } from "./../../common.styled";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageFooter from "../../components/LanguageFooter";

export default function IndexLayout() {
  const [t] = useTranslation();
  return (
    <IndexContainer>
      <Logo>
        <LogoTransparent />
      </Logo>
      <div>
        <BlueButton>
          <Link to="/signin">{t("sign in")}</Link>
        </BlueButton>
        <span></span>
        <BlueButton>
          <Link to="/signup">{t("sign up")}</Link>
        </BlueButton>
      </div>
      <LanguageFooter />
    </IndexContainer>
  );
}
