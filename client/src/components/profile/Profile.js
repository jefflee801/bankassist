import React, { Component } from 'react';
import { Container, Grid, Segment } from 'semantic-ui-react';
import ProfileHealth from './ProfileHealth'
import Transactions from './Transactions';
import Accounts from './Accounts';
import LineChart from './LineChart';
import BasicInfo from './BasicInfo';


class Profile extends Component {

  render() {
    return (
        <Container children>
          <Segment textAlign='center'>
            <LineChart/>
          </Segment>
          <Grid divided='vertically'>
            <Grid.Row columns={2}>
              <Grid.Column>
                <ProfileHealth/>
              </Grid.Column>
              <Grid.Column>
                <Transactions/>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={2}>
              <Grid.Column>
                <Accounts/>
              </Grid.Column>
              <Grid.Column>
                <Segment>
                  <BasicInfo />
                </Segment>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
    )
}
}



export default Profile;