import styled from "styled-components";

export const AboutContent = styled.div`
  display: flex;
  padding-top: 20px;
  position: relative;
  z-index: 2;
  gap: 20px;
  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
    flex-direction: column;
  }
  @media (max-width: 640px) {
    padding-top: 3vw;
    gap: 3vw;
  }
  > div {
    &:first-of-type {
      width: 310px;
      flex-shrink: 0;
      flex-grow: 0;
      @media screen and (max-width: 768px) {
        width: 100%;
      }
    }
    height: fit-content;
    flex-grow: 1;
  }
`;

export const BoxTitle = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  @media (max-width: 640px) {
    margin-bottom: 4vw;
  }
`;

export const BoxTitleText = styled.div`
  color: #5c5e6e;
  font-weight: 600;
  font-size: 18px;
  &::first-letter {
    text-transform: uppercase;
  }
  @media (max-width: 640px) {
    font-size: 5vw;
  }
`;

export const InfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media (max-width: 640px) {
    gap: 5vw;
  }
`;

export const InfoItem = styled.div`
  font-size: 15px;
  color: #c3c5d5;
  display: flex;
  align-items: center;
  a {
    margin-left: 6px;
    color: #1771d6;
    text-decoration: none;
  }
  svg {
    width: 16px;
    height: fit-content;
    margin-right: 10px;
    path,
    g {
      stroke-width: 1px;
    }
  }
  @media (max-width: 640px) {
    font-size: 4.5vw;
    a {
      margin-left: 6px;
    }
    svg {
      width: 4.8vw;
      margin-right: 3vw;
    }
  }
`;

export const InfoItemTitle = styled.span`
  font-size: 15px;
  color: #c3c5d5;
  line-height: 1;
  &::first-letter {
    text-transform: uppercase;
  }
  @media (max-width: 640px) {
    font-size: 4.5vw;
  }
`;

export const UserItem = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: 0.3s;
  border-radius: 8px;
  padding: 10px;
  &:hover {
    background-color: #cacaca10;
  }
  @media (max-width: 640px) {
    padding: 0;
    &:hover {
      background-color: transparent;
    }
  }
`;

export const UserImage = styled.div`
  border-radius: 50%;
  width: 45px;
  height: 45px;
  overflow: hidden;
  margin-right: 15px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  span {
    border: 1px solid #9c9cab;
    border-radius: 50%;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    background-color: rgba(255, 255, 255, 0.1);
  }
  @media (max-width: 640px) {
    margin-right: 2vw;
    width: 12vw;
    height: 12vw;
  }
`;

export const UserName = styled.div`
  font-size: 15px;
  color: #fff;
  @media (max-width: 640px) {
    font-size: 4.5vw;
  }
`;

export const UsersList = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  p {
    margin-bottom: 0;
  }
  @media (max-width: 640px) {
    row-gap: 3vw;
  }
`;
