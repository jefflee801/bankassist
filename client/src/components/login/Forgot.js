import React, { Component } from 'react';
import { Header, Segment, Form, Button, Card } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { sendPasswordInstructions } from '../../actions/forgotPassword';

class Forgot extends Component {
  state = { email: '' }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit = () => {
    const { email } = this.state;
    const { dispatch, history } = this.props;
    dispatch(sendPasswordInstructions({email}, history));
  }


  render() {
    const { email } = this.state;

    return(
      <Card centered={true}>
        <Segment basic>
          <Header as='h1' textAlign='center'>Forgot Password</Header>
          <Form onSubmit={this.handleSubmit}>
            <Form.Field>
              <label>Email</label>
              <input
                name='email'
                type='email'
                required
                value={email}
                onChange={this.handleChange}
                placeholder='Email'
              />
            </Form.Field>
            <Segment textAlign='center' basic>
              <Button button color="blue" type='submit'>Reset Password</Button>
            </Segment>
          </Form>
      </Segment>
    </Card>
    );
  }
}

export default connect()(Forgot);
