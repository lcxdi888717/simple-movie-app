import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { setActiveGenre } from '../flow/actions';

class Genres extends PureComponent {
  handleGenreClick = (genreId) => {
    console.log('clicked genre -> ', genreId);
    // dispatch set active
    this.props.setActiveGenre(genreId);
  };

  render() {
    const { genres } = this.props;
    return (
      <div className="genres">
        <h3>Genres</h3>
        {genres.map((g) => (
          <div
            key={g.id}
            className={g.isActive ? 'active' : ''}
            onClick={() => this.handleGenreClick(g.id)}
          >
            {g.title}
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = ({ genres }) => ({
  genres,
});
const mapDispatchToProps = {
  setActiveGenre,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Genres);
