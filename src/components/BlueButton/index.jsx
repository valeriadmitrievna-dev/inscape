import styled from "styled-components";

const Button = styled.button`
  background-color: #00afb6;
  border: none;
  color: #fff;
  border-radius: 4px;
  padding: 10px 20px;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    box-shadow: 0 0 20px #00afb6;
  }
`;

export default function BlueButton({ onClick, children }) {
  return <Button onClick={onClick}>{children}</Button>;
}
