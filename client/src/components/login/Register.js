import React, { Component } from 'react';
import { Icon, Card, Divider, List, Header, Form, Button, Segment } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { registerUser } from '../../actions/auth';
import { setFlash } from '../../actions/flash';
import Zion from '../../images/Zion-Canyon.jpg';
import styled from 'styled-components';

const passwordMinLengthValue = 8;

const maxHeight = () => {
  const windowHeight = window.innerHeight;
  return `height: 50em !important`
}

const RegistrationContainer = styled.div`
padding-top: 20px;
${maxHeight()};
background-image: url(${Zion});
`

class Register extends Component {
  state = { 
    firstName: '',
    lastName: '',
    email: '',
    password: '', 
    passwordConfirmation: '',
    validationState: { 
      validLength: false, 
      passwordMatch: false 
    }
  };

  handleSubmit = event => {
    event.preventDefault();
    const { firstName, lastName, email, password, passwordConfirmation } = this.state;
    const { dispatch, history } = this.props;
    if (password === passwordConfirmation) {
      dispatch(registerUser(firstName, lastName, email, password, passwordConfirmation, history));
    } else dispatch(setFlash('Passwords do not match!, please try again', 'red'));
  }

  passwordValidators = (id, value) => {
    if (id === 'password') {
      const validLength = value.length >= passwordMinLengthValue ? true : false;
      const { passwordConfirmation } = this.state;
      const passwordMatch = value === passwordConfirmation;
      this.setState({ [id]: value, validationState: { validLength, passwordMatch }})
      }
    else if (id === 'passwordConfirmation') {
      const { password, validationState: { validLength } } = this.state;
      const passwordMatch = value === password;
      this.setState({ [id]: value, validationState: { validLength, passwordMatch }})
    }
    
  } 

  handleChange = event => {
    // use e to grab the id off the element also the value and set state
    // const { id, value } = event.target;
    const id = event.target.id;
    const value = event.target.value;
    if (id === 'password' || id === 'passwordConfirmation') {
      this.passwordValidators(id,value)
    } else {
      this.setState({ [id]: value });
    }
  }

  render() {
    const {
      firstName,
      lastName, 
      email, 
      password, 
      passwordConfirmation, 
      validationState: { validLength, passwordMatch } } = this.state;

    return (
      <RegistrationContainer>
      <Card centered={true} color={'green'} style={{ width: '450px'}}>
        <Segment>
        <Header as='h1' textAlign='center'>Get free access today.</Header>
        <Form onSubmit={this.handleSubmit}>
          <Form.Field>
            <label>First Name</label>
            <input
              id='firstName'
              placeholder='First Name'
              required
              value={firstName}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <label>Last Name</label>
            <input
              id='lastName'
              placeholder='Last Name'
              required
              value={lastName}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <label htmlFor='email'>Email</label>
            <input
              id='email'
              placeholder='Email'
              required
              value={email}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <label htmlFor='password'>Password</label>
            <input
              id='password'
              placeholder='Password'
              type='password'
              required
              value={password}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <label htmlFor='passwordConfirmation'>Password Confirmation</label>
            <input
              id='passwordConfirmation'
              placeholder='Password Confirmation'
              type='password'
              required
              value={passwordConfirmation}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Divider/>
            <List>
              <List.Item>
                <List.Icon>
                  <Icon 
                    name={ validLength ? 'check circle':'remove circle'}
                    color={ validLength ? 'green':'grey'}
                    size='large'></Icon>
                </List.Icon>
                <List.Content verticalAlign={'middle'}>
                  {`Password must be at least ${passwordMinLengthValue} characters`}
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Icon>
                <Icon 
                    name={ passwordMatch ? 'check circle':'remove circle'}
                    color={ passwordMatch ? 'green':'grey'}
                    size='large'></Icon>
                </List.Icon>
                <List.Content verticalAlign={'middle'}>Passwords must match</List.Content>
              </List.Item>
            </List>
          <Segment basic textAlign='center'>
            <Button color={'blue'} type='submit'>Submit</Button>
          </Segment>
        </Form>
        </Segment>
      </Card>
      </RegistrationContainer>
    );
  }
}

export default connect()(Register);
