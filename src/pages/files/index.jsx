import React from "react";
import FilesLayout from "./index.layout";
import { useSelector } from "react-redux";

export default function Files() {
  const files = useSelector((state) => state.user.user.files);
  return <FilesLayout files={files} />;
}
