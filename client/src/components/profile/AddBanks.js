import React, { Component } from 'react';
import { Form, Container, Card, Image, Button, Header, Modal, Segment, Dropdown } from 'semantic-ui-react';
import { connect } from 'react-redux';
import axios from 'axios';
import { setHeaders } from '../../actions/headers';

class AddBanks extends Component {
  state = { institutions: [], open: false, institution: {}, credentials: [], username: '', password: '', }

  componentDidMount(){
    axios.get('/api/mx_user', { id:  this.props.user.id })
      .then( ({ data, headers }) => {
        console.log(data)
        this.setState({ institutions: data })
        this.props.dispatch(setHeaders(headers))
      })
      .catch(err => {
        console.log('failed',  err)
      });    
  }

  handleChange = event => {
    const { id, value } = event.target;
    this.setState({ [id]: value });
  }
  handleSubmit = event => {
    const { institution, credentials, username, password} = this.state
    const user_credential_guid = credentials[0].guid;
    const password_credential_guid = credentials[1].guid;
    const institution_code = institution.code
    const user_mx_guid  = this.props.user.mx_guid
    axios.post('/api/member_maker',
     { user_mx_guid, institution_code, user_credential_guid, password_credential_guid, username, password })
     .then( res => {
      this.setState({ member: res.data});
      this.props.history.push('/Profile');
     })
  }
    

  show = (institution) => {
    axios.get('/api/institution_cred', {params: { institution_code: institution.code}})
      .then( ({data}) => {
        this.setState({credentials: data, open: true, institution})
      })
  }
  close = () => this.setState({ open: false, username: '', password: '', credentials: [], institution: {} })

  renderInputs = () =>
    this.state.credentials.map(credential => {
      const inputId = credential.type === "PASSWORD" ? 'password' : 'username'
      const inputType = credential.type === "PASSWORD" ? 'password' : 'Text'
      return (
        <Form.Field>
        <label htmlFor={inputType}>{credential.label}</label>
        <input
          required
          id={inputId}
          value={this.state[inputId]}
          placeholder={credential.label}
          type={inputType}
          onChange={this.handleChange}
        />
      </Form.Field>
      )
    });

  onBankSelect = ( event, data ) => {
    const institution = this.state.institutions.find(inst => inst.code === data.value);
    this.show(institution);
  }

  render() {
    const { institutions, open, institution } = this.state;

    const options = institutions.map(institution => ({
      key: institution.code,
      value: institution.code,
      text: institution.name,
      image: institution.medium_logo_url
    }));

    return (
        <Container children>
          <Container textAlign='center'>
            <Dropdown
              placeholder='Please select your bank or institution'
              style={{ width: '400px' }}
              centered
              search
              selection
              options={options}
              onChange={this.onBankSelect}
            />
          </Container>
          <Card.Group itemsPerRow={4}>
            { institutions.map( institution =>
              <Card key={institution.code} onClick={() => this.show(institution)}>
                  <Card.Content textAlign='center'>
                    <Image src={institution.medium_logo_url} height={80}/>
                  </Card.Content>
              </Card>
              )
            }
          </Card.Group>

          <Modal dimmer="dimmer" open={open} onClose={this.close}>
            <Modal.Header><Image wrapped src={institution.medium_logo_url}/></Modal.Header>
            <Modal.Content>
              <Modal.Description>
                <Header>Link your {institution.name} account</Header>
                  <Form onSubmit={this.handleSubmit}>
                    {this.renderInputs()}  
                    <Segment textAlign='center' basic>
                      <Button primary type='submit'>Submit</Button>
                    </Segment>
                </Form> 
              </Modal.Description>
            </Modal.Content>
          </Modal>
        </Container>
    )
}
}

const mapStateToProps = state => ({
  user: state.user
}) 

export default connect(mapStateToProps)(AddBanks); 