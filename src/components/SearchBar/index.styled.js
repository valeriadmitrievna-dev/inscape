import styled from "styled-components";

export const Search = styled.div`
  height: 60px;
  background-color: #1b2735;
  z-index: 3;
  position: relative;
  input {
    height: 60px;
    width: 100%;
    display: block;
    background-color: transparent;
    border: none;
    padding: 0 54px;
    background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='512' height='512'%3e%3cpath d='M508.9 478.7L360 330a201.6 201.6 0 0045.2-127.3C405.3 90.9 314.4 0 202.7 0S0 91 0 202.7s91 202.6 202.7 202.6c48.2 0 92.4-17 127.3-45.2L478.7 509c4.2 4.1 11 4.1 15 0l15.2-15.1c4.1-4.2 4.1-11 0-15zm-306.2-116c-88.3 0-160-71.8-160-160s71.7-160 160-160 160 71.7 160 160-71.8 160-160 160z' data-original='%23000000' class='active-path' data-old_color='%23000000' fill='%235C5D71'/%3e%3c/svg%3e");
    background-repeat: no-repeat;
    background-size: 16px;
    background-position: 25px 50%;
    color: #fff;
    font-weight: 300;
    &::placeholder {
      color: #5c5d71;
      text-transform: capitalize;
    }
  }
  @media (max-width: 640px) {
    height: 12vw;
    input {
      height: 12vw;
      padding: 0 11vw;
      background-size: 5vw;
      background-position: 3vw center;
    }
  }
`;

export const RightSideButton = styled.button`
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  border: 0;
  width: 60px;
  background-color: #00000012;
  border-left: 1px solid $border-color;
  color: #fff;
  display: none;
  cursor: pointer;
  > * {
    line-height: 1;
  }
  svg {
    width: 22px;
    path {
      stroke: #fff;
    }
  }
  @media screen and (max-width: 1210px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  @media (max-width: 640px) {
    width: 12vw;
    svg {
      width: 6vw;
    }
  }
`;

export const SearchResults = styled.div`
  position: absolute;
  top: calc(100% + 10px);
  left: 10px;
  border-radius: 0 0 8px 8px;
  background: inherit;
  padding: 10px;
  z-index: 10;
  right: 10px;
  transition: 0.3s;
  opacity: ${({ active }) => (active ? "1" : "0")};
  visibility: ${({ active }) => (active ? "visible" : "hidden")};
  display: flex;
  flex-direction: column;
  box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.7);
  gap: 5px;
  p {
    padding: 40px;
    text-align: center;
    width: 100%;
    display: block;
    margin-bottom: 0;
  }
  @media (max-width: 640px) {
    top: 100%;
    left: 0;
    right: 0;
    border-radius: 0 0 1vw 1vw;
    padding: 5vw;
    gap: 5vw;
    border-top: 1px solid #161f29;
    p {
      padding: 4vw;
      font-size: 4.5vw;
    }
  }
`;

export const ResultUser = styled.div`
  transition: 0.3s;
  padding: 10px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 10px;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
  > div {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    background-color: rgba(255, 255, 255, 0.1);
    box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.9);
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  span {
    font-size: 18px;
    color: #fff;
    text-transform: capitalize;
  }
  @media (max-width: 640px) {
    padding: 0;
    border-radius: 0;
    gap: 3vw;
    &:hover {
      background-color: transparent;
    }
    > div {
      width: 10vw;
      height: 10vw;
    }
    span {
      font-size: 4.5vw;
    }
  }
`;
