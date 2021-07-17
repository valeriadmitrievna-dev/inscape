import React from "react";
import styled from "styled-components";
import SearchBar from "../../components/SearchBar";
import { Main, MainContainer } from "../../common.styled";

const EmptyPage = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function Empty() {
  return (
    <Main>
      <SearchBar />
      <MainContainer>
        <EmptyPage>Comming soon!</EmptyPage>
      </MainContainer>
    </Main>
  );
}
