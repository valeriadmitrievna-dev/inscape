import React from "react";
import styled, { keyframes } from "styled-components";
import { Main } from "./../../common.styled";
import Search from "./../SearchBar/index";
import BlueButton from "./../BlueButton/index";
import { Link } from "react-router-dom";

const apparition = keyframes`
	from {
		opacity: 0;
		transform: translateY(100px);
	}

	to {
		opacity: 1;
		transform: translateY(0);
	}
`;

const float = keyframes`
	0%,
	100% {
		transform: translateY(0);
	}
	50% {
		transform: translateY(180px);
	}
`;

const floatReverse = keyframes`
	0%,
	100% {
		transform: translateY(0);
	}
	50% {
		transform: translateY(-180px);
	}
`;

const float2 = keyframes`
	0%,
	100% {
		transform: translateY(0);
	}
	50% {
		transform: translateY(28px);
	}
`;

const floatReverse2 = keyframes`
	0%,
	100% {
		transform: translateY(0);
	}
	50% {
		transform: translateY(-28px);
	}
`;

const ParticleContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  background: #161f29;
  color: #00afb6;
  overflow: hidden;
`;

const Content = styled.div`
  position: relative;
  width: 600px;
  max-width: 100%;
  margin: 20px;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(5px);
  padding: 60px 40px;
  text-align: center;
  box-shadow: -10px 10px 67px -12px rgba(0, 0, 0, 0.2),
    -10px 10px 37px -12px rgba(0, 0, 0, 0.2);
  opacity: 0;
  animation: ${apparition} 0.8s 1.2s cubic-bezier(0.39, 0.575, 0.28, 0.995)
    forwards;
  h1 {
    font-size: 36px;
    margin-bottom: 10px;
    color: #fff;
  }
  p {
    font-size: 20px;
    margin-bottom: 16px;
    color: #c5c5c5;
  }
  button {
    padding: 0;
    a {
      color: #c5c5c5;
      display: block;
      font-weight: 500;
      padding: 10px 20px;
    }
  }
`;

const Particle = styled.span`
  position: absolute;
  display: block;
  pointer-events: none;
  &:nth-child(${({ i }) => i}) {
    top: ${({ top }) => top}%;
    left: ${({ left }) => left}%;
    font-size: ${({ size }) => size}px;
    filter: blur(${({ blur }) => blur}px);
    animation: ${({ speed }) => speed}s ${({ anim }) => anim} infinite;
  }
`;

export default function Particle404({ title, text, button, redirect }) {
  const four = new Array(60).fill(4);
  const zero = new Array(40).fill(0);
  const anims = [float, floatReverse, float2, floatReverse2];
  return (
    <Main>
      <Search />
      <ParticleContainer>
        {[...four, ...zero].map((p, id) => (
          <Particle
            key={id}
            i={id + 1}
            size={Math.floor(Math.random() * 20) + 10}
            blur={(id + 1) * 0.02}
            speed={Math.floor(Math.random() * 200) + 20}
            delay={Math.floor(Math.random() * 100) * 0.1}
            anim={anims[Math.floor(Math.random() * anims.length)]}
            top={Math.floor(Math.random() * 100) + 1}
            left={Math.floor(Math.random() * 100) + 1}
          >
            {p}
          </Particle>
        ))}
        <Content>
          <h1>{title}</h1>
          <p>{text}</p>
          <BlueButton>
            <Link to={redirect}>{button}</Link>
          </BlueButton>
        </Content>
      </ParticleContainer>
    </Main>
  );
}
