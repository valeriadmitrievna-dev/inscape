import styled from "styled-components";

const Button = styled.button`
  background-color: #00afb6;
  border: none;
  color: #fff;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
  transition: 0.3s;
  font-weight: 400;
  &:hover {
    box-shadow: 0 0 20px #00afb6;
  }
  &:disabled:hover {
    box-shadow: none;
  }
  &:disabled {
    opacity: 0.5;
  }
`;

export default function BlueButton({ onClick, children, disabled }) {
  return (
    <Button disabled={disabled} onClick={onClick}>
      {children}
    </Button>
  );
}
