import React from 'react';
import {connect} from 'react-redux';
import { Form, Icon, Input, Button } from 'antd';
import 'antd/dist/antd.css'
import '../index.css';
import { fetchRegister } from '../../actions';

class Register extends React.PureComponent {
  handleSubmit = e => {
    const { form, fetchedRegister } = this.props;
    e.preventDefault();
    form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        fetchedRegister(values.username, values.password);
      }
    });
  };

  render() {
    const { form } = this.props;
    const { getFieldDecorator } = form;
    return (
      <div style={{paddingTop: '50px'}}>
        <h3 style={{ textAlign: 'center' }}>CREATE ACCOUNT</h3>
        <div className="create-acc-container">
          <Form onSubmit={this.handleSubmit} className="register-form">
            <Form.Item>
              {getFieldDecorator('username', {
                rules: [
                  { required: true, message: 'Please input your username!' }
                ]
              })(
                <Input
                  prefix={
                    <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />
                  }
                  placeholder="Username"
                />
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('password', {
                rules: [
                  { required: true, message: 'Please input your Password!' }
                ]
              })(
                <Input
                  prefix={
                    <Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />
                  }
                  type="password"
                  placeholder="Password"
                />
              )}
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                Create
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchedRegister: (username, password) => dispatch(fetchRegister(username, password))
});

export default connect(null, mapDispatchToProps)(Form.create()(Register));

