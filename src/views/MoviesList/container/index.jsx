import React, { PureComponent } from 'react';
import Topbar from '../components/Topbar';
import List from '../components/List';

class MoviesList extends PureComponent {
  render() {
    return (
      <div>
        <Topbar />
        <List />
      </div>
    );
  }
}

export default MoviesList;
