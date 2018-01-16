import React, { Component } from 'react';
import { Segment, Grid, Header, Divider } from 'semantic-ui-react';
import { DonutChart } from 'mx-react-components';
import { connect } from 'react-redux';
import axios from 'axios';
import { setHeaders } from '../../actions/headers';

class Transactions extends Component {
  state = { incomes: [], expenses: [] }

  componentDidMount(){
    const user_guid  = this.props.user.mx_guid
    axios.get('/api/cash_flow', { params: { user_guid, from_date: '2010-09-10', to_date: '2017-10-10' }})
      .then( ({ data, headers }) => {
        this.setState({ incomes: data["income"], expenses: data["expense"] })
        this.props.dispatch(setHeaders(headers))
      })
      .catch(err => {
        console.log('failed',  err)
      });    
  }


  render () {
    let expense_data = [];
    let expense_total = 0;
    Object.entries(this.state.expenses).map( expense => {
      expense_total+=expense[1];
      expense_data.push({name: expense[0], value: expense[1]})
    })
    let income_data = [];
    let income_total = 0;
    Object.entries(this.state.incomes).map( income => {
      income_total+=income[1];
      income_data.push({name: income[0], value: income[1]})
    })
    let cash_flow = (income_total - expense_total).toLocaleString('en-US', { style: 'currency', currency: 'USD'});

    return (
      <Segment>
        <Header as='h4' content={`Cash Flow ${cash_flow}`}/>
        <Divider />
        <Grid divided='vertically'>
            <Grid.Row columns={2}>
              <Grid.Column verticalAlign='middle' textAlign='center'>
                <DonutChart
                  activeOffset={5}
                  animateOnHover={true}
                  animationDuration={750}
                  animationTypeOnLoad='roll'
                  arcWidth={15}
                  chartTotal={expense_total}
                  data={expense_data}
                  defaultLabelText='Total Expenses'
                  defaultLabelValue={`${expense_total.toLocaleString('en-US', { style: 'currency', currency: 'USD'})}`}
                  id='expense-donut'
                />
              </Grid.Column>
              <Grid.Column verticalAlign='middle' textAlign='center'>
                <DonutChart
                  activeOffset={5}
                  animateOnHover={true}
                  animationDuration={750}
                  animationTypeOnLoad='roll'
                  arcWidth={15}
                  chartTotal={income_total}
                  data={income_data}
                  defaultLabelText='Total Income'
                  defaultLabelValue={`${income_total.toLocaleString('en-US', { style: 'currency', currency: 'USD'})}`}
                  id='income-donut'
                />
              </Grid.Column>
            </Grid.Row>
        </Grid>
      </Segment>
    ) 
  }

}

const mapStateToProps = state => ({
  user: state.user
}) 

export default connect(mapStateToProps)(Transactions); 