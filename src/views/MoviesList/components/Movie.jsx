import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  genre: PropTypes.number.isRequired
};

const Movie = ({ title, poster, description, genre }) => (
  <div>
    <div>
      <img src={poster} alt={title} />
    </div>
    <div>{title}</div>
  </div>
);

Movie.propTypes = propTypes;
export default Movie;
