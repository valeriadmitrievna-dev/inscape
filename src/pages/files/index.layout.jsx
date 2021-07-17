import React from "react";
import { Main, MainContainer, PageTitle } from "./../../common.styled";
import Search from "./../../components/SearchBar/index";
import {
  FilesTable,
  FilesTableRow,
  FileName,
  FileType,
  FileSize,
  NoFiles,
} from "./index.styled";
import { ReactComponent as DownloadIcon } from "../../assets/cloud-computing.svg";
import { ReactComponent as ShareIcon } from "../../assets/share.svg";

export default function FilesLayout({ files }) {
  return (
    <Main>
      <Search />
      <MainContainer>
        <PageTitle>Files</PageTitle>
        <p>
          This is where you can store your personal files and share them with
          other people.
        </p>
        <FilesTable>
          <FilesTableRow>
            <FileName>Name</FileName>
            <FileType>Type</FileType>
            <FileSize>Size</FileSize>
          </FilesTableRow>
          {files?.length ? (
            files.map((file, id) => (
              <FilesTableRow key={id}>
                <FileName>
                  {file.name}
                  <div>
                    <DownloadIcon />
                    <ShareIcon />
                  </div>
                </FileName>
                <FileType>{file.type}</FileType>
                <FileSize>{file.size}</FileSize>
              </FilesTableRow>
            ))
          ) : (
            <NoFiles>User haven't files</NoFiles>
          )}
        </FilesTable>
      </MainContainer>
    </Main>
  );
}
