// gallery main page code here
import React from "react";
import Gallerydoc from "./Gallerydoc";
import PagesBanner from "../Shared/PagesBanner";

const GalleryPage = () => {
  return (
    <div className="containerr">
      <title>Gallery</title>
      <PagesBanner title="Gallery" />
      <Gallerydoc />
    </div>
  );
};

export default GalleryPage;
