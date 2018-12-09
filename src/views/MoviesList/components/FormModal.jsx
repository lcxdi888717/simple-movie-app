import { Form, Input, Modal, Select } from 'antd';
import React, { Component } from 'react';

const FormItem = Form.Item;
const { Option } = Select;

const FormModal = Form.create()(
  class extends Component {
    render() {
      const { visible, onCancel, onCreate, form, genres } = this.props;
      const { getFieldDecorator } = form;
      return (
        <Modal
          visible={visible}
          title="Add New Movie"
          okText="Add"
          onCancel={onCancel}
          onOk={onCreate}
        >
          <Form layout="vertical">
            <FormItem label="Title">
              {getFieldDecorator('title', {
                rules: [
                  {
                    required: true,
                    message: 'Please input the title of movie!'
                  }
                ]
              })(<Input />)}
            </FormItem>
            <FormItem label="Poster">
              {getFieldDecorator('poster', {
                rules: [
                  { required: true, message: 'Please input the poster url!' }
                ]
              })(<Input />)}
            </FormItem>
            <FormItem label="Genre">
              {getFieldDecorator('genre', {
                rules: [
                  {
                    required: true,
                    message: 'Please select a genre for the movie!'
                  }
                ]
              })(
                <Select>
                  {genres.map(g => (
                    <Option key={g.id} value={g.id}>
                      {g.title}
                    </Option>
                  ))}
                </Select>
              )}
            </FormItem>
            <FormItem label="Description">
              {getFieldDecorator('description')(<Input type="textarea" />)}
            </FormItem>
          </Form>
        </Modal>
      );
    }
  }
);

export default FormModal;
