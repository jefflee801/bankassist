import React, { Component } from 'react';
import { Header, Segment, Form, Button, Card, Grid, Checkbox } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { handleLogin } from '../../actions/auth';
import styled from 'styled-components';
import { Link } from 'react-router-dom'
import Zion from '../../images/Zion-Canyon.jpg';

const maxHeight = () => {
  const windowHeight = window.innerHeight;
  return `height: 50em !important`
}

const LoginContainer = styled.div`
  padding-top: 20px;
  ${maxHeight()};
  background-image: url(${Zion});
`

class Login extends Component {
  state = { email: '', password: '' };

  handleChange = event => {
    const { id, value } = event.target;
    this.setState({ [id]: value });
  }

  handleSubmit = event => {
    event.preventDefault();
    const { dispatch, history } = this.props;
    const { email, password } = this.state;
    dispatch(handleLogin(email, password, history));
  }

  activestyle={
    color: 'blue'
  }

  render() {
    const { email, password } = this.state;
    return (
      <LoginContainer>
        <Card centered={true}>
          <Segment basic>
            <Header as='h1' textAlign='center'>Login</Header>
            <Form onSubmit={this.handleSubmit}>
              <Form.Field>
                <label htmlFor='email'>Email</label>
                <input
                  required
                  id='email'
                  value={email}
                  placeholder='Email'
                  onChange={this.handleChange}
                />
              </Form.Field>
              <Form.Field>
                <label htmlFor='password'>Password</label>
                <input
                  required
                  id='password'
                  value={password}
                  placeholder='Password'
                  type='password'
                  onChange={this.handleChange}
                />
              </Form.Field>
              <Segment textAlign='center' basic>
                <Button style={{backgroundColor:"#A3CA9D"}} type='submit'>Submit</Button>
              </Segment>
              <Segment>
                <Grid divided='vertically'>
                  <Grid.Row columns={2}>
                    <Grid.Column>
                      <Link to="/recoverpassword">Forgot your password?</Link>
                    </Grid.Column>
                    <Grid.Column>
                      <Checkbox label='Remember Me'/>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Segment>
            </Form>
          </Segment>
        </Card>
      </LoginContainer>

    );
  }
}

export default connect()(Login);