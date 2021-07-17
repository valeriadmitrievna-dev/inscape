import React from "react";
import styled, { keyframes } from "styled-components";

const rotation = keyframes` {
  0% { transform: rotate(0deg) }
  100% { transform: rotate(360deg) }
}`;

const rotationBack = keyframes` {
  0% { transform: rotate(0deg) }
  100% { transform: rotate(-360deg) }
}`;

const LoaderAnimated = styled.div`
  width: 30px !important;
  height: 30px !important;
  border-radius: 50%;
  display: block;
  position: relative;
  border: 1px solid;
  border-color: #fff #fff transparent transparent;
  animation: ${rotation} 1s linear infinite;
  &:after,
  &:before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    border: 1px solid;
    border-color: transparent transparent cyan cyan;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    animation: ${rotationBack} 0.5s linear infinite;
    transform-origin: center center;
  }
  &:before {
    width: 10px;
    height: 10px;
    border-color: #fff #fff transparent transparent;
    animation: ${rotation} 1.5s linear infinite;
  }
`;

const LoaderContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function ImagePreloader() {
  return (
    <LoaderContainer>
      <LoaderAnimated />
    </LoaderContainer>
  );
}
