import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Movie from './Movie';
import Enums from '../../../configs/EnumsManager';
import { removeMovie } from '../flow/actions';

class List extends PureComponent {
  handleCloseClick = movieId => this.props.removeMovie(movieId);

  getActiveGenreId = genres => {
    const activeGenre = genres.find(g => g.isActive);
    if (!activeGenre) {
      return Enums.GenreAllId;
    }
    return activeGenre.id;
  };

  // Filter movies based on search text and active genre
  // If no active genre found, then all display all movies
  getFilteredData = (data, text, activeId) => {
    text = text.toLowerCase();
    return data.filter(
      m =>
        m.title.toLowerCase().indexOf(text) > -1 &&
        (activeId === Enums.GenreAllId || m.genres === activeId)
    );
  };

  render() {
    const { data, genres, searchText } = this.props;

    const activeGenreId = this.getActiveGenreId(genres);
    const filteredData = this.getFilteredData(data, searchText, activeGenreId);

    return (
      <div>
        {filteredData.map(m => (
          <Movie
            key={m.id}
            {...m}
            onCloseClick={() => this.handleCloseClick(m.id)}
          />
        ))}
      </div>
    );
  }
}

const mapStateToProps = ({ movies, genres }) => ({
  data: movies.data,
  searchText: movies.searchText,
  genres
});
const mapDispatchToProps = {
  removeMovie
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
