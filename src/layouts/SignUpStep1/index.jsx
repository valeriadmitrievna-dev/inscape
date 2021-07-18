import React from "react";
import { useTranslation } from "react-i18next";
import * as S from "../../auth.styled";

export default function SignUpStep1({ inputs, handleChange }) {
  const { t } = useTranslation();
  return (
    <>
      <S.AuthInputs id="sign-up-inputs">
        <S.AuthRow>
          <S.AuthInput>
            <label htmlFor="first_name">{t("first name")}</label>
            <input
              onChange={handleChange}
              type="text"
              id="first_name"
              value={inputs?.first_name || ""}
            />
          </S.AuthInput>
          <S.AuthInput>
            <label htmlFor="last_name">{t("last name")}</label>
            <input
              onChange={handleChange}
              type="text"
              id="last_name"
              value={inputs?.last_name || ""}
            />
          </S.AuthInput>
        </S.AuthRow>
        <S.AuthInput>
          <label htmlFor="username">{t("username")}</label>
          <input
            onChange={handleChange}
            type="text"
            id="username"
            value={inputs?.username || ""}
          />
        </S.AuthInput>
        <S.AuthInput>
          <label htmlFor="email">{t("email")}</label>
          <input
            onChange={handleChange}
            type="text"
            id="email"
            value={inputs?.email || ""}
          />
        </S.AuthInput>
      </S.AuthInputs>
    </>
  );
}
