import styled from "styled-components";

export const AuthPage = styled.div`
  padding: 20px;
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow-y: auto;
  background-color: #1b2735;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
  * {
    user-select: none;
  }
  @media (max-width: 640px) {
    padding: 0 3vw;
    display: block;
  }
`;

export const AuthContent = styled.div`
  width: 600px;
  background-color: transparent;
  border: 2px solid #fff;
  padding: 20px;
  box-shadow: 0 0 2vw 0 rgba(0, 0, 0, 0.6);
  margin: 20px auto;
  min-height: 300px;
  ${({ loading }) =>
    loading === "true" &&
    `
    display: flex;
    align-items: center;
    justify-content: center;
  `}
  @media (max-width: 645px) {
    width: 100%;
    padding: 5vw;
    margin: auto;
    margin-bottom: 10vw;
  }
`;

export const AuthTitle = styled.div`
  font-size: 24px;
  line-height: 1;
  margin-bottom: 30px;
  color: #fff;
  text-transform: capitalize;
  position: relative;
  z-index: 1;
  width: fit-content;
  filter: drop-shadow(0 0 3px #000);
  &::before {
    position: absolute;
    content: "";
    bottom: -20%;
    left: -5%;
    width: 100%;
    height: 70%;
    background-color: rgba(0, 173, 181, 0.5);
    z-index: -1;
  }
`;

export const AuthInput = styled.div`
  width: 100%;
  label {
    font-size: 10px;
    color: #fff;
    display: block;
    text-transform: uppercase;
  }
  input {
    background-color: transparent;
    border-bottom: 1px solid #fff;
    width: 100%;
    color: #fff;
    padding: 5px 0;
    transition: 0.2s;
    user-select: auto;
    &[type="password"] {
      letter-spacing: 5px;
    }
    &:focus {
      border-color: rgb(0, 173, 181);
      & ~ label {
        color: rgb(0, 173, 181);
      }
    }
  }
`;

export const AuthRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  width: 100%;
`;

export const AuthButton = styled.button`
  border: 2px solid #fff;
  background-color: transparent;
  padding: 15px 30px;
  line-height: 1;
  font-size: 16px;
  color: #fff;
  text-transform: uppercase;
  margin-top: 20px;
  font-weight: 400;
  transition: 0.3s;
  cursor: pointer;
  &:hover {
    color: rgb(0, 173, 181);
    border-color: rgb(0, 173, 181);
    filter: drop-shadow(0 0 5px rgb(0, 173, 181));
  }
`;

export const AuthSwitch = styled.button`
  background-color: transparent;
  margin-top: 20px;
  cursor: pointer;
  a {
    transition: 0.2s;
    line-height: 1;
    font-size: 16px;
    color: #fff;
    text-transform: capitalize;
    &:hover {
      color: rgb(0, 173, 181);
    }
  }
`;

export const AuthInputs = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const MessageAuth = styled.div`
  padding: ${({ open }) => (open ? "8px 10px" : "0")};
  color: #bf0000;
  border-left: 5px solid #bf0000;
  font-size: 14px;
  display: flex;
  align-items: center;
  font-weight: 400;
  column-gap: 10px;
  transition: ${({ open }) => (open ? "0.3s" : "0s")};
  height: ${({ open }) => (open ? "auth" : "0")};
  margin-top: 20px;
  opacity: ${({ open }) => (open ? "1" : "0")};
  text-transform: uppercase;
`;

export const AuthFooter = styled.div`
  width: 100%;
  justify-content: space-between;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  a {
    font-weight: 400;
    margin-right: 30px;
    text-transform: uppercase;
    position: relative;
    z-index: 1;
    transition: 0.3s;
    line-height: 1;
    font-size: 16px;
    color: #c3c5d5;
    &::before {
      transition: 0.3s;
      position: absolute;
      content: "";
      bottom: -20%;
      left: -10%;
      width: 100%;
      height: 70%;
      background-color: rgba(0, 173, 181, 0.5);
      z-index: -1;
    }
    &::after {
      position: absolute;
      content: "";
      bottom: 0;
      left: calc(100% + 24px);
      width: 1px;
      height: 100%;
      background-color: #ccc8d8bb;
      z-index: -1;
    }
    &:hover {
      color: #fff;
      &::before {
        background-color: rgba(0, 173, 181, 0.9);
      }
    }
  }
  > * {
    width: fit-content;
  }
  @media (max-width: 640px) {
    flex-wrap: wrap;
    gap: 6vw 5vw;
    padding: 0 10vw 5vw 10vw;
    a {
      margin-right: 1vw;
      font-size: 4.2vw;
      &::after {
        left: calc(100% + 3vw);
      }
    }
  }
`;

export const Language = styled.span`
  line-height: 1;
  text-transform: uppercase;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    color: #fff;
  }
  color: ${({ selected }) => (selected ? "#fff" : "#ccc8d8")};
  display: block;
  position: relative;
  &::after {
    position: absolute;
    content: "";
    opacity: ${({ selected }) => (selected ? "1" : "0")};
    height: 2px;
    width: 100%;
    bottom: -5px;
    left: 0;
    background-color: rgb(0, 173, 181);
  }
  @media (max-width: 640px) {
    font-size: 4.2vw;
  }
`;
