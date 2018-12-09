import { Button, Col, Icon, Input, Row } from 'antd';
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Enums from '../../../configs/EnumsManager';
import { addMovie, setSearchText } from '../flow/actions';
import FormModal from './FormModal';

const { Search } = Input;

class Topbar extends PureComponent {
  state = {
    visible: false
  };

  showModal = () => this.setState({ visible: true });

  handleCancel = () => {
    const { form } = this.formRef.props;
    form.resetFields();
    this.setState({ visible: false });
  };

  handleCreate = () => {
    const { form } = this.formRef.props;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }

      this.props.addMovie(values);
      form.resetFields();
      this.setState({ visible: false });
    });
  };

  saveFormRef = formRef => {
    this.formRef = formRef;
  };

  handleTextChange = e => this.props.setSearchText(e.target.value);

  render() {
    const { searchText, genres } = this.props;
    return (
      <Row>
        <Col xs={24} sm={12}>
          <Search
            onChange={this.handleTextChange}
            value={searchText}
            placeholder="Search movie by name"
          />
        </Col>
        <Col xs={24} sm={6} push={6}>
          <Button type="primary" onClick={this.showModal}>
            <Icon type="plus" />
            New Movie
          </Button>
        </Col>
        <FormModal
          wrappedComponentRef={this.saveFormRef}
          visible={this.state.visible}
          onCancel={this.handleCancel}
          onCreate={this.handleCreate}
          genres={genres}
        />
      </Row>
    );
  }
}

const mapStateToProps = ({ movies, genres }) => ({
  searchText: movies.searchText,
  genres: genres.filter(g => g.id !== Enums.GenreAllId)
});
const mapDispatchToProps = {
  setSearchText,
  addMovie
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Topbar);
