import styled from "styled-components";

export const CommonSettingsContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const SettingsRow = styled.div`
  ${({ divided }) =>
    divided
      ? `
    display: grid;
    grid-template-columns: 1fr 1fr;
    > div {
        display: flex;
        align-items: center;
        gap: 16px;
    }
  `
      : `
    display: flex;
    align-items: center;
    > div {
      width: 100%;
    }
  `}
  gap: 16px;
  @media (max-width: 640px) {
    display: flex;
    align-items: center;
    gap: 3vw;
    > div {
      width: 100%;
    }
  }
`;

export const SettingTitle = styled.span`
  text-transform: capitalize;
  font-size: 14px;
`;
