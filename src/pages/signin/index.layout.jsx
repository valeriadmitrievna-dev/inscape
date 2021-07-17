import React from "react";
import { Link } from "react-router-dom";
import {
  AuthButton,
  AuthContent,
  AuthInput,
  AuthPage,
  AuthTitle,
  AuthRow,
  AuthSwitch,
  AuthInputs,
} from "../../auth.styled";
import LanguageFooter from "../../components/LanguageFooter";

export default function SignInLayout({ t, handleChange, handleSignIn }) {
  return (
    <AuthPage>
      <AuthContent loading={`${false}`}>
          <AuthTitle>{t("sign in")}</AuthTitle>
          <AuthInputs id="sign-in-inputs">
            <AuthInput>
              <label htmlFor="login">{t("username or email")}</label>
              <input type="text" id="login" onChange={handleChange} />
            </AuthInput>
            <AuthInput>
              <label htmlFor="password">{t("password")}</label>
              <input type="password" id="password" onChange={handleChange} />
            </AuthInput>
          </AuthInputs>
          <AuthRow>
            <AuthButton onClick={handleSignIn}>{t("sign in")}</AuthButton>
            <AuthSwitch>
              <Link to="/signup">{t("sign up")}</Link>
            </AuthSwitch>
          </AuthRow>
      </AuthContent>
      <LanguageFooter />
    </AuthPage>
  );
}
