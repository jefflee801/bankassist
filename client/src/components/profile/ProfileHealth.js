import React, { Component } from 'react';
import { Button, Menu, Progress, Grid, Segment, Header } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

var requiredButtons = {
  width: "100%",
  marginBottom: "5px",
  background: "#88B2D2"
}


class ProfileHealth extends Component {
  state = { percent: 0 }
  
  increment = () => this.setState({
    percent: this.state.percent >= 100 ? 0 : this.state.percent + 20,
  })

  render() {
    return (
        <Segment>
          <Header as='h4' content='Profile Health' />
          <Progress percent={this.state.percent} indicating/>
          <Grid textAlign='center' >
            <Grid.Column width={14}>
                <Button style={requiredButtons} onClick={this.increment}>Increment</Button>
                <Link to='/Profile/AddBank'>
                  <Button style={requiredButtons} onClick={this.increment}><Menu.Item className="centerNav" name='Add Bank' /></Button>
                </Link>
                <Button style={requiredButtons} onClick={this.increment}>Required</Button>
            </Grid.Column>
          </Grid>
        </Segment>
        )
    }
}
        
export default ProfileHealth; 