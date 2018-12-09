import classNames from 'classnames/bind';
import React, { PureComponent } from 'react';
import Genres from '../components/Genres';
import User from '../components/User';
import styles from '../index.css';

const cx = classNames.bind(styles);

class LeftSider extends PureComponent {
  render() {
    return (
      <div className={cx('leftSider')}>
        <h1>Movie App</h1>
        <Genres />
        <User />
      </div>
    );
  }
}

export default LeftSider;
