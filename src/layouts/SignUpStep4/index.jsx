import React from "react";
import * as S from "../../auth.styled";

export default function SignUpStep4({t, handleChange}) {
  return (
    <S.AuthInputs>
      <S.AuthInput>
        <label htmlFor="password">{t("password")}</label>
        <input onChange={handleChange} type="password" id="password" />
      </S.AuthInput>
      <S.AuthInput>
        <label htmlFor="repeat_password">{t("repeat password")}</label>
        <input onChange={handleChange} type="password" id="repeat_password" />
      </S.AuthInput>
    </S.AuthInputs>
  );
}
