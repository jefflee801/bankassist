import React, { Component } from 'react';
import { Container, Grid, Segment, Header, Button, Menu, Divider } from 'semantic-ui-react';
import DesertScene from '../../images/DesertScene.jpg';
import { Link } from 'react-router-dom';

var InfoBackground = {
  backgroundSize: "cover",
  paddingTop: "160px",
  paddingBottom: "125px",
  backgroundImage: `url(${DesertScene})`, 
}

var StepHeader = {
  top: '75px',
  background: '#E8B382',
}

class Info extends Component {
    render() {
      return (
        <div>
          <Container fluid style={InfoBackground}  >
            <Segment floated='left' textAlign='center' style={StepHeader}> 
              <Header style={{ fontSize: '4em', color: '#fff', marginLeft: '25px', marginRight: '25px' }} content='Opportunity'/>
            </Segment>
          </Container>
          <Divider  hidden />
          <Container fluid textAlign='center' style={{ marginTop: '50px' }}>
            <Grid divided='vertically'>
              <Grid.Row columns={2}>
                <Grid.Column>   
                  <Segment basic floated='left' style={{ marginLeft: '20px' }} textAlign='left' > 
                    <Header as='h2'>
                        Where does your path to financial freedom begin?
                      <Header.Subheader>
                        One budget & two numbers.
                      </Header.Subheader>
                    </Header>
                    <Segment basic>
                      The first step towards financial freedom is discovery and it all starts with a simple budget. The most basic building block of a solid plan for your money is a budget. It is simply a summarized list of all of your likely income and expenses for the month.
                    </Segment>
                    <Segment basic>
                      Budgeting is a powerful tool as it allows you to gain perspective on your finances. Calculating your income, expenses, assets, liabilities and seeing these exact amounts helps calculate two numbers that are key to financial success. Net Worth and Cash Flow.
                    </Segment>
                  </Segment>
                </Grid.Column>
                <Grid.Column> 
                  <Segment basic floated='left' style={{ marginLeft: '20px' }} > 
                    <Header style={{ fontSize: '2em' }} >
                        Let a coach help you get started discovering your finances at no cost.
                    </Header>
                    <Button style={{ fontSize: '2em', background: '#A3CA9D'  }}>
                      <Menu.Item name='Meet with a coach today'/>
                    </Button>
                  </Segment>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </div>
        )      
    }
}
export default Info;