import React, { Component } from 'react';
import { List, Segment, Header} from 'semantic-ui-react';
import { connect } from 'react-redux';
import axios from 'axios';
import { setHeaders } from '../../actions/headers';
import { withRouter } from 'react-router-dom';

class Accounts extends Component {
  state = { accounts: [], account_transactions: []}

  componentDidMount(){
    const user_guid  = this.props.user.mx_guid
    axios.get('/api/accounts', { params: { user_guid }})
      .then( ({ data, headers }) => {
        this.setState({ accounts: data })
        this.props.dispatch(setHeaders(headers))
      })
      .catch(err => {
        console.log('failed',  err)
      });    
  }
  goToAccountSummary = (account_guid) => {
      console.log(this.props)
      this.props.history.push({
        pathname: '/Profile/AccountSummary',
        state: {account_guid}
      })
  }

  render () {
    const accounts = this.state.accounts
    return (
      <Segment>
        <Header as='h4' content='Accounts Summary' />
        <List celled>
          { accounts.map( account =>
            <List.Item key={account.guid} onClick={()=>{this.goToAccountSummary(account.guid)}} fluid> 
              <List.Content>
                <List.Header as='a' >{account.name}</List.Header>
                <List.Description>{`${account.type.toLowerCase()} at ${account.institution_code}`}</List.Description>
              </List.Content>
              <List.Content floated='right'>
                {account.balance.toLocaleString('en-US', { style: 'currency', currency: 'USD'})}
              </List.Content>
            </List.Item>        
          )}
        </List>
      </Segment>
    ) 
  }

}

const mapStateToProps = state => ({
  user: state.user
}) 

export default withRouter(connect(mapStateToProps)(Accounts)); 