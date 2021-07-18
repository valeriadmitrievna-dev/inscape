import styled, { keyframes } from "styled-components";

const bounce = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-5px);
  }
`;

export const PopoverBodyList = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PopoverBodyListItem = styled.div`
  padding: 8px 0;
  border-bottom: 1px solid #ffffff17;
  line-height: 1;
  font-size: 16px;
  color: #cacaca;
  cursor: pointer;
  &:hover {
    color: #fff;
  }
  &:last-of-type {
    border: none;
  }
`;

export const DotsButton = styled.button`
  width: 30px;
  height: 15px;
  position: relative;
  margin-left: auto;
  cursor: pointer;
  background: transparent;
  &::after {
    position: absolute;
    content: "";
    background-color: #8f98a9;
    box-shadow: -8px 0 0 0 #8f98a9, 8px 0 0 0 #8f98a9;
    border-radius: 50%;
    width: 5px;
    height: 5px;
    top: 5px;
    left: calc((100% - 5px) / 2);
    transition: 0.3s;
  }
  &:hover::after {
    background-color: #fff;
    box-shadow: -8px 0 0 0 #fff, 8px 0 0 0 #fff;
  }
  &::before {
    position: absolute;
    content: "";
    background-color: rgba(255, 255, 255, 0.05);
    width: 120%;
    height: 120%;
    top: -10%;
    left: -10%;
    border-radius: 4px;
    transition: 0.3s;
    opacity: 0;
  }
  &:hover::before {
    opacity: 1;
  }
`;

export const Box = styled.div`
  background-color: #1b2735;
  border-radius: 4px;
  padding: 20px;
  ${({ fullwidth }) =>
    fullwidth &&
    `
    width: 100% !important;
  `}

  p {
    &::first-letter {
      text-transform: uppercase;
    }
    &:last-of-type {
      margin-bottom: 0;
    }
  }
  @media (max-width: 640px) {
    padding: 3vw;
    border-radius: 1vw;
    p {
      font-size: 4.5vw;
    }
  }
`;

export const BlueButton = styled.button`
  background-color: #00afb6;
  border: none;
  color: #fff;
  border-radius: 4px;
  padding: 10px 20px;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    box-shadow: 0 0 20px #00afb6;
  }
  &:disabled {
    opacity: 0.3;
    &:hover {
      box-shadow: none;
    }
  }
`;

export const Container = styled.div`
  background-color: #1b2735;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  height: 100vh;
  overflow: hidden;
  margin: 0 auto;
`;

export const Main = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  background-color: #181d2f;
  @media screen and (max-width: 930px) {
    margin-left: 56px;
  }
  @media (max-width: 640px) {
    margin-left: 12vw;
  }
`;

export const MainContainer = styled.div`
  padding: 20px;
  flex-grow: 1;
  overflow: auto;
  background-color: #141e2a;
  @media (max-width: 640px) {
    padding: 3vw;
  }
`;

export const PageTitle = styled.div`
  font-size: 20px;
  color: #fff;
  margin-bottom: 20px;
  letter-spacing: 0.03em;
  text-transform: capitalize;
  @media (max-width: 640px) {
    margin-bottom: 4vw;
    font-size: 6vw;
  }
`;

export const UploadFiles = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 150px;
  border: 1px dashed #9c9cab;
  padding: 20px;
  svg {
    width: 50px;
    height: 40px;
    animation: ${bounce} 0.7s linear infinite alternate;
  }
  color: #9c9cab;
  font-size: 16px;
  input {
    display: none;
  }
  @media (max-width: 640px) {
    width: 100%;
    height: 40vw;
    text-align: center;
    font-size: 5vw;
    line-height: 5.5vw;
    svg {
      margin-bottom: 3vw;
    }
  }
`;

export const PreviewFiles = styled.div`
  margin: 10px 0;
  z-index: 2;
  position: relative;
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
  > div {
    > div {
      box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.7);
      width: 90px;
      height: 90px;
      border-radius: 4px;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
`;

export const LinkUp = styled.div`
  display: block;
  position: relative;
  color: #fff;
  font-size: 16px;
  line-height: 1;
  padding: 5px;
  font-weight: 300;
  z-index: 2;
  width: fit-content;
  cursor: pointer;
  &::before {
    transition: 0.3s;
    position: absolute;
    content: "";
    bottom: 0;
    left: 0;
    height: 0.5px;
    width: 100%;
    background: #00afb6;
    z-index: -1;
  }
  &:hover::before {
    height: 100%;
  }
`;

export const NeutralButton = styled.button`
  padding: 8px 16px;
  background-color: #00afb636;
  color: #fff;
  font-size: 14px;
  font-weight: 400;
  ${({ margin }) => margin && `margin: ${margin};`}
  cursor: pointer;
  min-width: 150px;
  display: block;
  &::first-letter {
    text-transform: uppercase;
  }
  &:disabled {
    opacity: 0.3;
  }
`;
