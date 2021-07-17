import styled from "styled-components";

export const ProfileHeader = styled.div`
  position: relative;
  z-index: 1;
  padding: 120px 0 20px 0;
  border-radius: 4px;
  margin-bottom: 30px;

  &:before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -1;
    left: 0;
    top: 0;
    background-image: url(${({ banner }) => banner});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    filter: blur(50px);
    opacity: 0.7;
  }
  @media (max-width: 640px) {
    padding: 25vw 0 3vw 0;
    height: 50vw;
    margin-bottom: 18vw;
  }
`;

export const Banner = styled.div`
  position: absolute;
  border-radius: 4px;
  overflow: hidden;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  border-radius: 4px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const ProfileAvatar = styled.div`
  position: relative;
  align-items: center;
  display: flex;
  z-index: 2;
  padding: 20px;
  width: 85%;
  margin: auto;
  border-radius: 8px;
  background-color: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(10px);
  transform: translateY(50px);
  box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.8);
  > button {
    margin: 0;
    position: absolute;
    right: 20px;
    top: 20px;
  }
  @media (max-width: 640px) {
    padding: 5vw;
    width: 90%;
    column-gap: 3vw;
    flex-direction: column;
    align-items: flex-start;
    padding-top: 27vw;
    transform: translateY(0);
    > button {
      margin: 0;
      position: absolute;
      right: 3vw;
      top: 3vw;
    }
  }
`;

export const ProfileImage = styled.div`
  user-select: none;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  box-shadow: ${({ withImage }) =>
    !withImage &&
    "-5px -5px 20px 0px #0000003d, inset -5px -5px 10px 0px #ffffff07"};
  div,
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  font-size: 44px;
  color: #ffffffb8;
  cursor: pointer;
  @media (max-width: 768px) {
    width: 120px;
    height: 120px;
    font-size: 28px;
  }
  @media (max-width: 640px) {
    width: 35vw;
    height: 35vw;
    font-size: 10vw;
    position: absolute;
    top: -10vw;
    box-shadow: 0 0 2vw 1px rgb(0 0 0);
  }
`;

export const ProfileName = styled.div`
  margin-left: 20px;
  font-size: 22px;
  color: #fff;
  font-weight: 600;
  filter: drop-shadow(0 0 5px black);
  text-transform: capitalize;
  @media (max-width: 768px) {
    font-size: 18px;
    line-height: 1.3;
  }
  @media (max-width: 640px) {
    margin-left: 0;
    font-size: 5vw;
    line-height: 6vw;
    width: 100%;
  }
`;

export const ProfileRole = styled.p`
  color: #fff;
  font-size: 16px;
  font-weight: 300;
  text-transform: capitalize;
  margin-bottom: 0;
  @media (max-width: 768px) {
    font-size: 14px;
  }
  @media (max-width: 640px) {
    margin-top: 1.5vw;
    font-size: 4.2vw;
    line-height: 1;
  }
`;
