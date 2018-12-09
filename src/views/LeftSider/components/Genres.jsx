import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { setActiveGenre } from '../flow/actions';
import classNames from 'classnames/bind';
import styles from '../index.css';

const cx = classNames.bind(styles);

class Genres extends PureComponent {
  handleGenreClick = genreId => this.props.setActiveGenre(genreId);

  render() {
    const { genres } = this.props;
    return (
      <div className="genres">
        <h3>Genres</h3>
        <ul>
          {genres.map(g => (
            <li
              key={g.id}
              className={cx('cursor-pointer', {
                active: g.isActive
              })}
              onClick={() => this.handleGenreClick(g.id)}
            >
              {g.title}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = ({ genres }) => ({
  genres
});
const mapDispatchToProps = {
  setActiveGenre
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Genres);
