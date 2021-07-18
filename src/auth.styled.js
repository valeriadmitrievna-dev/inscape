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
    padding: 3vw;
    display: block;
  }
`;

export const AuthContent = styled.div`
  width: ${({ wide }) => (wide ? "100%" : "600px")};
  ${({ wide }) => wide && "max-width: 900px;"}
  background-color: transparent;
  border: 2px solid #fff;
  padding: 20px;
  box-shadow: 0 0 2vw 0 rgba(0, 0, 0, 0.6);
  margin: 20px auto;
  /* min-height: 300px; */
  ${({ loading }) =>
    loading === "true" &&
    `
    display: flex;
    align-items: center;
    justify-content: center;
  `}
  .ant-checkbox-wrapper {
    margin-top: 10px;
    span {
      &:last-of-type {
        color: #fff;
      }
    }
  }
  @media (max-width: 645px) {
    width: 100%;
    padding: 5vw;
    margin: 0;
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
  @media (max-width: 640px) {
    ${({row}) => !row && `
      flex-direction: column;
    `}
  }
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

export const RoommatesCandiadtes = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 20px 0 10px 0;
  > div {
    cursor: default;
    padding: 0;
    &:hover {
      background-color: inherit;
    }
  }
  p {
    margin: 10px 0 0 0;
    font-weight: 500;
    &::first-letter {
      text-transform: uppercase;
    }
    button {
      margin-left: 10px;
      text-transform: capitalize;
      @media (max-width: 640px) {
        margin-left: 0;
        margin-right: 10px;
        margin-top: 10px;
      }
    }
  }
`;

export const Delete = styled.button`
  background-image: url("data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjUxMnB0IiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgd2lkdGg9IjUxMnB0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Im0yNTYgMGMtMTQxLjE2NDA2MiAwLTI1NiAxMTQuODM1OTM4LTI1NiAyNTZzMTE0LjgzNTkzOCAyNTYgMjU2IDI1NiAyNTYtMTE0LjgzNTkzOCAyNTYtMjU2LTExNC44MzU5MzgtMjU2LTI1Ni0yNTZ6bTAgMCIgZmlsbD0iI2Y0NDMzNiIvPjxwYXRoIGQ9Im0zNTAuMjczNDM4IDMyMC4xMDU0NjljOC4zMzk4NDMgOC4zNDM3NSA4LjMzOTg0MyAyMS44MjQyMTkgMCAzMC4xNjc5NjktNC4xNjAxNTcgNC4xNjAxNTYtOS42MjEwOTQgNi4yNS0xNS4wODU5MzggNi4yNS01LjQ2MDkzOCAwLTEwLjkyMTg3NS0yLjA4OTg0NC0xNS4wODIwMzEtNi4yNWwtNjQuMTA1NDY5LTY0LjEwOTM3Ni02NC4xMDU0NjkgNjQuMTA5Mzc2Yy00LjE2MDE1NiA0LjE2MDE1Ni05LjYyMTA5MyA2LjI1LTE1LjA4MjAzMSA2LjI1LTUuNDY0ODQ0IDAtMTAuOTI1NzgxLTIuMDg5ODQ0LTE1LjA4NTkzOC02LjI1LTguMzM5ODQzLTguMzQzNzUtOC4zMzk4NDMtMjEuODI0MjE5IDAtMzAuMTY3OTY5bDY0LjEwOTM3Ni02NC4xMDU0NjktNjQuMTA5Mzc2LTY0LjEwNTQ2OWMtOC4zMzk4NDMtOC4zNDM3NS04LjMzOTg0My0yMS44MjQyMTkgMC0zMC4xNjc5NjkgOC4zNDM3NS04LjMzOTg0MyAyMS44MjQyMTktOC4zMzk4NDMgMzAuMTY3OTY5IDBsNjQuMTA1NDY5IDY0LjEwOTM3NiA2NC4xMDU0NjktNjQuMTA5Mzc2YzguMzQzNzUtOC4zMzk4NDMgMjEuODI0MjE5LTguMzM5ODQzIDMwLjE2Nzk2OSAwIDguMzM5ODQzIDguMzQzNzUgOC4zMzk4NDMgMjEuODI0MjE5IDAgMzAuMTY3OTY5bC02NC4xMDkzNzYgNjQuMTA1NDY5em0wIDAiIGZpbGw9IiNmYWZhZmEiLz48L3N2Zz4=");
  width: 25px;
  height: 25px;
  margin-left: 16px;
  background-size: 25px;
  background-position: center;
  cursor: pointer;
`;

export const VerifyRole = styled.div`
  display: flex;
  align-items: baseline;
  gap: 16px;
  margin-top: 16px;
  label {
    font-weight: 400;
    &::first-letter {
      text-transform: uppercase;
    }
  }
  input {
    border: 2px solid rgba(255, 255, 255, 0.5);
    padding: 5px;
    font-weight: 500;
    font-size: 20px;
    line-height: 1;
    letter-spacing: 3px;
    width: 200px;
  }
  @media (max-width: 640px) {
    flex-direction: column;
    gap: 2vw;
  }
`;
