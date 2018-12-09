import React, { PureComponent } from 'react';
import Genres from '../components/Genres';
import '../index.css';

class LeftSider extends PureComponent {
  render() {
    return (
      <div className="leftSider">
        <h1>Movie App</h1>
        <Genres />
      </div>
    );
  }
}

export default LeftSider;
