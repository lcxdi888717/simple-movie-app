import { Icon } from 'antd';
import PropTypes from 'prop-types';
import React from 'react';
import '../index.css';

const defaultProps = {
  description: '-',
  onCloseClick: null
};
const propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  description: PropTypes.string,
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
        <p className="truncate">{description}</p>
        <label>Genre:</label>
        <p>{genre}</p>
      </div>
    </div>
    <div className="title truncate">{title}</div>
  </div>
);

Movie.defaultProps = defaultProps;
Movie.propTypes = propTypes;
export default Movie;
