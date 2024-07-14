import React from 'react';
import PropTypes from 'prop-types';
import './Button.module.css';

export const Button = ({ onClick }) => (
  <button type="button" className="load-more-button" onClick={onClick}>
    Load more
  </button>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};