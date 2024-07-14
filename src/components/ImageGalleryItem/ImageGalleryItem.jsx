import React from 'react';
import PropTypes from 'prop-types';
import './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({ image, onImageClick }) => (
  <li className="gallery-item" onClick={() => onImageClick(image.largeImageURL)}>
    <img src={image.webformatURL} alt="" />
  </li>
);

ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  }).isRequired,
  onImageClick: PropTypes.func.isRequired,
};