import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'antd';
import '../index.css';

const defaultProps = {
  onCloseClick: null
};
const propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  genre: PropTypes.number.isRequired,
  onCloseClick: PropTypes.func
};

const Movie = ({ title, poster, description, genre, onCloseClick }) => (
  <div className="movie">
    <div className="coverWrapper">
      <Icon
        className="close cursor-pointer"
        type="close-circle"
        theme="filled"
        onClick={onCloseClick}
      />
      <img className="cover" src={poster} alt={title} />
      <div className="info">
        <label>Description:</label>
        <p>{description}</p>
        <label>Genre:</label>
        <p>{genre}</p>
      </div>
    </div>
    <div>{title}</div>
  </div>
);

Movie.defaultProps = defaultProps;
Movie.propTypes = propTypes;
export default Movie;
