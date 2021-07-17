import React from "react";
import { Link } from "react-router-dom";
import { Select } from "antd";
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

export default function SignUpLayout({
  t,
  dormitories,
  handleChange,
  handleSignUp,
}) {
  const { Option } = Select;
  return (
    <AuthPage>
      <AuthContent loading={`${false}`}>
        <AuthTitle>{t("sign up")}</AuthTitle>
        <AuthInputs id="sign-up-inputs">
          <AuthInput>
            <label htmlFor="username">{t("username")}</label>
            <input onChange={handleChange} type="text" id="username" />
          </AuthInput>
          <AuthInput>
            <label htmlFor="email">{t("email")}</label>
            <input onChange={handleChange} type="text" id="email" />
          </AuthInput>
          <AuthInput>
            <label htmlFor="full_name">{t("full name")}</label>
            <input onChange={handleChange} type="text" id="full_name" />
          </AuthInput>
          <AuthRow>
            <AuthInput>
              <label htmlFor="dormitory">{t("dormitory")}</label>
              <Select
                style={{
                  width: "100%",
                  background: "#1b2735",
                  borderBottom: "1px solid #fff",
                  color: "#fff",
                }}
                bordered={false}
                dropdownStyle={{
                  background: "#1b2735",
                }}
                id="dormitory"
                onChange={handleChange}
              >
                {dormitories.map((number, id) => (
                  <Option
                    key={id}
                    value={number}
                    className="dark-select-option"
                  >
                    {number}
                  </Option>
                ))}
              </Select>
            </AuthInput>
            <AuthInput>
              <label htmlFor="room">{t("room")}</label>
              <input onChange={handleChange} type="text" id="room" />
            </AuthInput>
          </AuthRow>
          <AuthInput>
            <label htmlFor="password">{t("password")}</label>
            <input onChange={handleChange} type="password" id="password" />
          </AuthInput>
          <AuthInput>
            <label htmlFor="repeat_password">{t("repeat password")}</label>
            <input
              onChange={handleChange}
              type="password"
              id="repeat_password"
            />
          </AuthInput>
        </AuthInputs>
        <AuthRow>
          <AuthButton onClick={handleSignUp}>{t("sign up")}</AuthButton>
          <AuthSwitch>
            <Link to="/signin">{t("sign in")}</Link>
          </AuthSwitch>
        </AuthRow>
      </AuthContent>
      <LanguageFooter />
    </AuthPage>
  );
}
