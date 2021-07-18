import React from "react";
import { Select } from "antd";
import * as S from "../../auth.styled";
import Checkbox from "antd/lib/checkbox/Checkbox";
import { useTranslation } from "react-i18next";

export default function SignUpStep2({
  handleChange,
  inputs,
  handleChangeRole,
}) {
  const { t } = useTranslation();
  return (
    <>
      <S.AuthInput>
        <label htmlFor="role">{t("role")}</label>
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
          id="role"
          onChange={handleChangeRole}
          value={inputs?.role || ""}
        >
          <Select.Option value="resident" className="dark-select-option">
            {t("resident")}
          </Select.Option>
          <Select.Option value="commandant" className="dark-select-option">
            {t("commandant")}
          </Select.Option>
          <Select.Option value="admin" className="dark-select-option">
            {t("admin")}
          </Select.Option>
        </Select>
      </S.AuthInput>
      {inputs?.role === "admin" && (
        <Checkbox
          id="live_in"
          onChange={handleChange}
          checked={inputs?.live_in}
        >
          {t("live in")}
        </Checkbox>
      )}
      {(inputs?.role === "admin" || inputs?.role === "commandant") && (
        <S.VerifyRole>
          <label htmlFor="verification_code">verification code</label>
          <input
            onChange={handleChange}
            type="text"
            id="verification_code"
            value={inputs?.verification_code || ""}
          />
        </S.VerifyRole>
      )}
      <p className="admin-will-verify">
        {t("administration will verify info")}
      </p>
    </>
  );
}
