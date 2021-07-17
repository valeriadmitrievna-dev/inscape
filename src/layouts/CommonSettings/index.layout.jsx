import React from "react";
import { Select } from "antd";
import { languages } from "./../../constants/languages";
import * as S from "./index.styled";

export default function CommonSettingsLayouts({ t, changeLanguage }) {
  return (
    <S.CommonSettingsContent>
      <S.SettingsRow divided>
        <div>
          <S.SettingTitle>{t("language")}</S.SettingTitle>
          <Select
            style={{
              flexGrow: 1,
              background: "#1b2735",
              borderBottom: "1px solid #fff",
              color: "#fff",
            }}
            bordered={false}
            dropdownStyle={{
              background: "#1b2735",
            }}
            defaultValue={
              languages.find((lang) => lang.l === localStorage.getItem("lang"))
                .title
            }
            onChange={(e) => changeLanguage(e)}
          >
            {languages.map((lang, id) => (
              <Select.Option
                key={id}
                value={lang.l}
                className="dark-select-option"
              >
                {lang.title}
              </Select.Option>
            ))}
          </Select>
        </div>
      </S.SettingsRow>
    </S.CommonSettingsContent>
  );
}
