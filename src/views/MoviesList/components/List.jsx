import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Movie from './Movie';

class List extends PureComponent {
  render() {
    const { data } = this.props;
    return (
      <div>
        {data.map(movie => (
          <Movie key={movie.id} {...movie} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = ({ movies }) => ({
  data: movies.data
});
const mapDispatchToProps = {};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
