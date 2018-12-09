import React, { PureComponent } from 'react';
import { Button, Modal, Input, Icon, Row, Col } from 'antd';
import { connect } from 'react-redux';
import { setSearchText } from '../flow/actions';

const { Search } = Input;

class Topbar extends PureComponent {
  state = {
    visible: false
  };

  handleAddNewClick = () => this.setState({ visible: true });
  handleModalCancelClick = () => this.setState({ visible: false });
  handleTextChange = e => this.props.setSearchText(e.target.value);

  render() {
    const { searchText } = this.props;
    return (
      <Row>
        <Col xs={24} sm={6}>
          <Search
            onChange={this.handleTextChange}
            value={searchText}
            placeholder="Search movie by name"
          />
        </Col>
        <Col xs={24} sm={6} push={12}>
          <Button onClick={this.handleAddNewClick}>
            <Icon type="plus" />
            New Movie
          </Button>
        </Col>
        <Modal
          visible={this.state.visible}
          onCancel={this.handleModalCancelClick}
          onOk={this.handleModalCancelClick}
        />
      </Row>
    );
  }
}

const mapStateToProps = ({ movies }) => ({
  searchText: movies.searchText
});
const mapDispatchToProps = {
  setSearchText
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Topbar);
