import React from "react";
import styled from "styled-components";
import SearchBar from "../../components/SearchBar";
import { Main, MainContainer } from "../../common.styled";
import { useTranslation } from "react-i18next";

const EmptyPage = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function Empty() {
  const [t] = useTranslation();
  return (
    <Main>
      <SearchBar />
      <MainContainer>
        <EmptyPage>
          {t("comming soon")[0].toUpperCase() + t("comming soon").slice(1)}
        </EmptyPage>
      </MainContainer>
    </Main>
  );
}
