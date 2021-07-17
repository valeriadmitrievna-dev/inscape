import styled from "styled-components";

export const LeftSide = styled.div`
  * {
    user-select: none;
  }
  width: 260px;
  border-right: 1px solid #161f2a;
  display: flex;
  flex-direction: column;
  transition: 0.3s;
  background-color: #1b2735;
  flex-shrink: 0;
  height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
  @media screen and (max-width: 930px) {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 100;
    ${({ active }) =>
      active
        ? `
				box-shadow: 5px 0 5px 0 rgba(0,0,0,0.3);
				& > a {
					opacity: 1;
					transition: 0.3s 0.2s;
				}`
        : `
				width: 56px;
				overflow: hidden;
				& > a {
					opacity: 0;
				}
      `}
  }
  @media (max-width: 640px) {
    ${({ active }) =>
      active
        ? `
        width: 100vw;
				box-shadow: none;
				& > a {
					opacity: 1;
					transition: 0.3s 0.2s;
				}`
        : `
				width: 12vw;
				overflow: hidden;
				& > a {
					opacity: 0;
				}
      `}
  }
`;

export const LeftSideButton = styled.div`
  display: none;
  @media screen and (max-width: 930px) {
    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;
    position: relative;
    cursor: pointer;
    height: 60px;
    background-color: rgb(9 9 9 / 28%);
    border: 0;
    padding: 0;
    line-height: 0;
    color: #fff;
    border-bottom: 1px solid #00000038;
    svg {
      transition: 0.2s;
      width: 24px;
    }
    svg:last-child {
      position: absolute;
      left: 50%;
      transform: translate(100%, -50%);
      top: 50%;
      opacity: 0;
    }
  }
  ${({ active }) =>
    active &&
    `
        svg:first-child {
        opacity: 0;
        display: none;
        }
        svg:last-child {
        transform: translate(-50%, -50%);
        opacity: 1;
        width: 24px;
        height: 24px;
        }
  `}
  @media (max-width: 640px) {
    height: 12vw;
    svg {
      transition: 0.2s;
      width: 7vw;
    }
    ${({ active }) =>
      active &&
      ` svg:last-child {
          width: 7vw;
          height: 7vw;
        }
  `}
  }
`;

export const Logo = styled.div`
  padding: 20px 0;
  font-size: 15px;
  color: #fff;
  font-weight: 600;
  line-height: 68px;
  letter-spacing: 4px;
  position: sticky;
  top: 0;
  > svg {
    display: block;
    margin: auto;
    margin-top: 20px;
    height: 20px;
    width: 91px;
    transition: 0.2s;
    ${({ active }) =>
      !active &&
      `
        transform: translateX(600px);
        transform-origin: right;
    `}
  }
  @media (max-width: 640px) {
    svg {
      margin-top: 5vw;
      height: 6vw;
      width: 50vw;
      ${({ active }) =>
        !active &&
        `
        transform: translateX(100vw);
    `}
    }
  }
`;

export const SideWrapper = styled.div`
  padding: 30px;
  ${({ active }) =>
    active
      ? `
		opacity: 1;
    transition: 0.3s 0.2s;
	`
      : `opacity: 0;`}
`;

export const Footer = styled.div`
  text-decoration: none;
  display: flex;
  align-items: center;
  margin-top: auto;
  overflow: hidden;
  padding: 0 20px;
  height: 52px;
  flex-shrink: 0;
  border-top: 1px solid #161f2a;
  transition: 0.3s;
  cursor: pointer;
  position: relative;
  svg {
    position: absolute;
    left: ${({ active }) => (active ? "30px" : "20px")};
    top: calc((100% - 16px) / 2);
    width: 16px;
    height: 16px;
    margin-right: 16px;
    transition: 0.3s;
    path {
      transition: 0.3s;
    }
  }
  &:hover {
    background-color: #161f2a;
    svg path {
      fill: #fff;
    }
    span {
      color: #fff;
    }
  }
  span {
    text-transform: capitalize;
    transition: 0.3s;
    position: absolute;
    left: ${({ active }) => (active ? "62px" : "55px")};
    top: calc((100% - 16px) / 2);
    color: #9c9cab;
    font-size: 16px;
    line-height: 1;
  }
  @media (max-width: 640px) {
    padding: 0 3.5vw;
    height: 12vw;
    svg {
      left: ${({ active }) => (active ? "30px" : "3.5vw")};
      top: calc((100% - 5vw) / 2);
      width: 5vw;
      height: 5vw;
      margin-right: 16px;
    }
    span {
      left: ${({ active }) => (active ? "62px" : "100vw")};
      top: calc((100% - 5vw) / 2);
      font-size: 4.5vw;
    }
  }
`;

export const Developer = styled.span`
  position: absolute;
  color: #fff;
  left: 0;
  top: -100%;
  display: flex;
  transition: 0.3s;
  padding: 0 20px;
  align-items: center;
  background-color: #161f2a;
  width: 100%;
  height: 100%;
  img {
    border-radius: 50%;
    width: 26px;
    height: 26px;
    object-fit: cover;
    margin-right: 10px;
  }
`;

export const SideTitle = styled.div`
  color: #5c5e6e;
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 20px;
  text-transform: uppercase;
`;

export const SideMenu = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 15px;
  white-space: nowrap;
  row-gap: 20px;
  a {
    display: block;
  }
`;

export const MenuLink = styled.div`
  transition: 0.2s;
  width: 100%;
  text-decoration: none;
  text-transform: capitalize;
  color: ${({ active }) => (active ? "#00afb6" : "#9c9cab")};
  display: flex;
  align-items: center;
  &:hover {
    color: ${({ active }) => (active ? "#00afb6" : "#fff")};
  }
  svg {
    margin-right: 16px;
    width: 16px;
    height: fit-content;
  }
`;
