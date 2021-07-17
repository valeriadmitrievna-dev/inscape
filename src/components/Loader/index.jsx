import React from "react";
import styled, { keyframes } from "styled-components";

const rotationBreak = keyframes` 
  0% {
    transform: rotate(0);
  }
  25% {
    transform: rotate(90deg);
  }
  50% {
    transform: rotate(180deg);
  }
  75% {
    transform: rotate(270deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const LoaderContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 930px) {
    width: calc(100% - 56px);
    margin-left: auto;
  }
  @media (max-width: 640px) {
    width: calc(100% - 12vw);
    margin-left: auto;
  }
`;

const LoaderAnimated = styled.div`
  width: 48px;
  height: 48px;
  /* display: inline-block; */
  margin: auto;
  position: relative;
  &::after,
  &::before {
    content: "";
    width: 48px;
    height: 48px;
    border: 2px solid #fff;
    position: absolute;
    left: 0;
    top: 0;
    animation: ${rotationBreak} 3s ease-in-out infinite alternate;
  }
  &::after {
    border-color: #00ffea;
    animation-direction: alternate-reverse;
  }
`;

export default function Loader() {
  return (
    <LoaderContainer>
      <LoaderAnimated />
    </LoaderContainer>
  );
}
