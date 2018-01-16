import React, { Component } from 'react';
import { Header, Segment, Form } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { setFlash } from '../../actions/flash';
import { forgotPassword } from '../../actions/forgotPassword';

class NewPassword extends Component {
  state = { password: '', password_confirmation: '' }

  handleSubmit = () => {
    const { password, password_confirmation } = this.state;
    const { dispatch, history, location: { search } } = this.props;
    const reset_password_token = search.split("?token=")[1];

    if(password !== password_confirmation) {
      dispatch(setFlash('Passwords Do Not Match', 'red'));
    } else if(password.length < 8) {
      dispatch(setFlash('The Minimum Password Length is 8', 'red'));
    } else {
      dispatch(forgotPassword({ ...this.state, reset_password_token }, history));
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  render() {
    const { password, password_confirmation } = this.state;

    return(
      <Segment basic textAlign='center'>
        <Header as='h1' textAlign='center'>Forgot Password</Header>
        <Form onSubmit={this.handleSubmit}>
          <Form.Field>
            <label>Password</label>
            <input
              name='password'
              placeholder='Password'
              type='password'
              value={password}
              onChange={this.handleChange}
              required
            />
          </Form.Field>
          <Form.Field>
            <label>Password Confirmation</label>
            <input
              name='password_confirmation'
              placeholder='Password Confirmation'
              type='password'
              required
              value={password_confirmation}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Segment textAlign='center' basic>
            <Form.Button>Reset Password</Form.Button>
          </Segment>
        </Form>
      </Segment>
    );
  }
}

export default connect()(NewPassword);
