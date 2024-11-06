"use client";
import { useState } from "react";

export default function useFileConvertURI() {
  const [file, setFile] = useState({
    loading: false,
    dataURI: "",
    fileData: null,
  });

  function convertFile(fileData) {
    if (!fileData) {
      setFile({ loading: true, dataURI: "", fileData: fileData });

      return;
    }
    const fr = new FileReader();
    fr.onloadend = function () {
      setFile({ loading: false, dataURI: fr.result, fileData: file.fileData });
    };
    fr.readAsDataURL(fileData);
  }
  return { ...file, convertFile };
}
