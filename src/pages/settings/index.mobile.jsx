import React from "react";
import { Main, MainContainer, PageTitle } from "./../../common.styled";
import Search from "./../../components/SearchBar/index";
import {
  SettingsMenu,
  SettingsMenuLink,
  SettingsContainer,
} from "./index.styled";
import Loader from "../../components/Loader";
import CommonSettings from "../../layouts/CommonSettings";
import { Collapse } from "antd";

export default function SettingsMobile({ t, loading }) {
  if (loading) return <Loader />;
  return (
    <Main>
      <Search />
      <MainContainer>
        <PageTitle>{t("settings")}</PageTitle>
        <Collapse accordion>
          <Collapse.Panel
            header={
              t("common settings")[0].toUpperCase() +
              t("common settings").slice(1)
            }
            key="1"
          >
            <CommonSettings />
          </Collapse.Panel>
          <Collapse.Panel
            header={
              t("account settings")[0].toUpperCase() +
              t("account settings").slice(1)
            }
            key="2"
          >
            account settings
          </Collapse.Panel>
          <Collapse.Panel
            header={t("support")[0].toUpperCase() + t("support").slice(1)}
            key="3"
          >
            support
          </Collapse.Panel>
        </Collapse>
      </MainContainer>
    </Main>
  );
}
