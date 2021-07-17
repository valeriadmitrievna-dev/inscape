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

export default function SettingsLayout({
  t,
  activeTab,
  setActiveTab,
  loading,
}) {
  if (loading) return <Loader />;
  return (
    <Main>
      <Search />
      <MainContainer>
        <SettingsMenu>
          <SettingsMenuLink
            onClick={() => setActiveTab("common")}
            active={activeTab === "common"}
          >
            {t('common settings')}
          </SettingsMenuLink>
          <SettingsMenuLink
            onClick={() => setActiveTab("account")}
            active={activeTab === "account"}
          >
            {t('account settings')}
          </SettingsMenuLink>
          <SettingsMenuLink
            onClick={() => setActiveTab("support")}
            active={activeTab === "support"}
          >
            {t('support')}
          </SettingsMenuLink>
        </SettingsMenu>
        <SettingsContainer>
          {activeTab === "common" && <CommonSettings />}
          {activeTab === "account" && "account settings"}
          {activeTab === "support" && "support"}
        </SettingsContainer>
      </MainContainer>
    </Main>
  );
}
