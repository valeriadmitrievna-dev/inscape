import styled, { keyframes } from "styled-components";

export const IndexContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  padding-top: 150px;
  > div {
    &:nth-of-type(2) {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 30px;
      span {
        width: 1px;
        height: 50px;
        background-color: rgb(0, 173, 181);
      }
      button {
        border-radius: 0;
        padding: 0;
        transition: 0.3s;
        text-transform: uppercase;
        &:hover {
          background: #03e9f4;
          box-shadow: 0 0 5px #03e9f4, 0 0 25px #03e9f4, 0 0 100px #03e9f4;
          -webkit-box-reflect: below 1px linear-gradient(transparent, #0001);
          a {
            color: #1b2735;
          }
        }
        a {
          transition: 0.3s;
          display: block;
          padding: 15px 30px;
          font-size: 24px;
          font-weight: 400;
          color: #fff;
        }
      }
    }
    &:last-of-type {
      margin-top: auto;
      padding-bottom: 20px;
      align-self: flex-end;
    }
  }
  @media (max-width: 768px) {
    padding-top: 20vh;
    > div {
      &:last-of-type {
        margin-top: 20px;
        padding: 0 20px 20px 20px;
      }
    }
  }
  @media (max-width: 640px) {
    padding-top: 35vw;
    > div {
      &:nth-of-type(2) {
        gap: 3vw;
        span {
          width: 1px;
          height: 10vw;
          background-color: rgb(0, 173, 181);
        }
        button {
          a {
            padding: 2vw 5vw;
            font-size: 5vw;
          }
        }
      }
      &:last-of-type {
        margin-top: 0;
      }
    }
  }
`;

const morphing = keyframes`
  0% {
		border-radius:  60% 40% 30% 70% / 60% 30% 70% 40%;
	} 
	
	50% {
		border-radius:  30% 60% 70% 40% / 50% 60% 30% 60%;
	}
  
	100% {
		border-radius:  60% 40% 30% 70% / 60% 30% 70% 40%;
	} 
`;

export const Logo = styled.div`
  width: 100%;
  position: relative;
  svg {
    display: block;
    margin: 0 auto;
    position: relative;
    width: 700px;
    height: 250px;
    z-index: 1;
  }
  &::before {
    position: absolute;
    /* content: ""; */
    left: -70px;
    top: -70px;
    width: 370px;
    height: 370px;
    background-color: rgb(0, 173, 181);
    animation-name: ${morphing};
    animation-iteration-count: infinite;
    animation-duration: 5s;
    animation-timing-function: linear;
    animation-direction: alternate;
  }
  @media (max-width: 768px) {
    svg {
      width: 400px;
      height: 135px;
    }
  }
  @media (max-width: 640px) {
    svg {
      width: 75vw;
      height: 30vw;
    }
  }
`;
