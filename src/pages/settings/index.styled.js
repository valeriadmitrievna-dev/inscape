import styled from "styled-components";

export const SettingsMenu = styled.div`
  background: #1b2735;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  border-radius: 4px;
  overflow: hidden;
  @media (max-width: 640px) {
    margin-top: 3vw;
    border-radius: 1vw 1vw 0 0;
  }
`;

export const SettingsMenuLink = styled.span`
  display: block;
  padding: 10px 16px;
  color: #5c5e6e;
  transition: 0.3s;
  cursor: pointer;
  position: relative;
  z-index: 20;
  user-select: none;
  font-size: 16px;
  line-height: 150%;
  font-weight: 400;
  &::first-letter {
    text-transform: uppercase;
  }
  &:hover {
    color: #fff;
    background-color: #18212d;
  }
  ${({ active }) =>
    active &&
    `
    color: #fff;
    background-color: #141c27;
    box-shadow: inset 0px -3px 0 0 #00afb6;
    font-weight: 300;
  `}
  text-align: center;
  @media (max-width: 640px) {
    padding: 3vw 2vw;
    font-size: 4vw;
    ${({ active }) =>
      active &&
      `
    color: #fff;
    background-color: #141c27;
    box-shadow: inset 0px -0.5vw 0 0 #00afb6;
  `}
  }
`;

export const SettingsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: #1b2735;
  border-radius: 4px;
  padding: 20px;
  margin-top: 8px;
  margin-bottom: 40px;
  button {
    border: 1px solid #00afb6;
    transition: 0.2s;
    background-color: rgba(0, 175, 182, 0.3);
    &:hover {
      box-shadow: none;
      background-color: transparent;
      color: #00afb6;
    }
  }
  @media (max-width: 640px) {
    gap: 3vw;
    border-radius: 0 0 1vw 1vw;
    padding: 3vw;
    margin-top: 0.5vw;
    margin-bottom: 4vw;
    button {
      padding: 3vw 7vw;
      font-size: 4.3vw;
    }
  }
`;
