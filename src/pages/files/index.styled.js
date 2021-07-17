import styled from "styled-components";

export const FilesTable = styled.div`
  border: 1px solid #9c9cab;
  margin: 20px 0;
  border-radius: 4px 4px 0 0;
`;

export const FilesTableRow = styled.div`
  display: grid;
  grid-template-columns: 4fr 1fr 1fr;
  &:first-of-type div {
    font-weight: bold;
    background-color: rgba(255, 255, 255, 0.1);
    outline: none;
    border-bottom: 1px solid #9c9cab;
  }
  > div {
    &:nth-of-type(2) {
      border-left: 1px solid #9c9cab;
      border-right: 1px solid #9c9cab;
    }
  }
`;

export const FileName = styled.div`
  font-size: 16px;
  letter-spacing: 0.03em;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  > div {
    display: flex;
    align-items: center;
    column-gap: 20px;
    svg {
      opacity: 0;
      visibility: hidden;
      width: 16px;
      height: 16px;
      transition: 0.3s;
      cursor: pointer;
      &:hover path {
        fill: #fff;
      }
    }
  }
  &:hover svg {
    opacity: 1;
    visibility: visible;
  }
`;

export const FileType = styled.div`
  font-size: 16px;
  letter-spacing: 0.03em;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 0;
`;

export const FileSize = styled.div`
  font-size: 16px;
  letter-spacing: 0.03em;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 0;
`;

export const NoFiles = styled.div`
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
