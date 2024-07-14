import React from 'react';
import PropTypes from 'prop-types';
import ReactModal from 'react-modal';
import './Modal.module.css';

export const Modal = ({ largeImageURL, isOpen, onRequestClose }) => (
  <ReactModal
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    className="modal"
    overlayClassName="overlay"
  >
    <img src={largeImageURL} alt="" />
  </ReactModal>
);

Modal.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
};