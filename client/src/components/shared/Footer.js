import React, { Component } from 'react';
import { Header, List, Grid, Segment, Container, Divider, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';


// width: 100%;
// height: 50px;
// background-color: #474748;
// padding: 15px;

class Footer extends Component {
  render() {
    return (
      <Segment
      inverted
      style={{ padding: '2em 0em' }}
      vertical
    >
      <Container >
        <Grid columns={4} divided stackable inverted>
          <Grid.Row>
            <Grid.Column>
              <Header inverted as='h4' content='BankAssist' />
              <List link inverted>
                <List.Item as='a'><Link to='/Info'>Info</Link></List.Item>
              </List>
            </Grid.Column>
            <Grid.Column>
            <Header inverted as='h4' content='The Team' />
            <List link inverted>
              <List.Item as='a' href='/About' content='About'/>
              <List.Item as='a' href='/Test' content='Test'/>
            </List>
            </Grid.Column>
            <Grid.Column>
              <Header inverted as='h4' content='Footer Header' />
              <p>Extra space for a call to action inside the footer that could help re-engage users.</p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Divider inverted section />
        <Image src='/logo.png' centered size='mini' />
        <List horizontal inverted divided link>
          <List.Item as='a' textAlign='center'>Copyright &copy; &nbsp;2017 &nbsp; | &nbsp; This site is all test and display of Api integration via Jed Stout.</List.Item>
        </List>
        
      </Container>
    </Segment>
    );
  }
}

export default Footer;