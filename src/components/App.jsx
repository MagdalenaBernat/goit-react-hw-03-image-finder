import React from "react";
import Searchbar from "./Searchbar/Searchbar"
import ImagdGallery from "./ImageGallery/ImageGallery"
import ImageGalleryItem from "./ImageGalleryItem/ImageGalleryItem"
import Button from "./Button/Button"
import Loader from "./Loader"
import Modal from "./Modal/Modal"

export const App = () => {
  return (
    <>
      <Searchbar />
      <ImagdGallery />
      <ImageGalleryItem />
      <Button />
      <Loader />
      <Modal />   
    </>
  );
};
