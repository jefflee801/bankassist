import React, { Component } from 'react';
import { Container, List, Header} from 'semantic-ui-react';
import { connect } from 'react-redux';
import axios from 'axios';
import { setHeaders } from '../../actions/headers';

class AccountSummary extends Component {
  state = { account: {}, account_transactions: []}

  componentDidMount(){
    const user_guid  = this.props.user.mx_guid
    const account_guid = this.props.history.location.state.account_guid;
    
    axios.get('/api/account_summary', { params: { user_guid, account_guid, from_date: '2010-09-10', to_date: '2017-10-10' }})
      .then( ({data, headers}) => {
        console.log(data.account)
        this.setState({ account: data.account, account_transactions: data.transactions })
        this.props.dispatch(setHeaders(headers))
      })
      .catch(err => {
        console.log('failed',  err)
      });    
  }

  render () {
    const account = this.state.account
    const transactions = this.state.account_transactions
    return (
      <Container>
        <Header>
          {account.name}
          {account.type}
          {account.balance}
        </Header>
        <List celled>
          { transactions.map( transaction =>
            <List.Item key={transaction.guid}> 
              <List.Content>
                {transaction.description}{transaction.category}{transaction.date}
              </List.Content>
              <List.Content floated='right'>
                {transaction.amount.toLocaleString('en-US', { style: 'currency', currency: 'USD'})}
              </List.Content>
            </List.Item>        
          )}
        </List>
      </Container>
    ) 
  }

}

const mapStateToProps = state => ({
  user: state.user
}) 

export default connect(mapStateToProps)(AccountSummary); 