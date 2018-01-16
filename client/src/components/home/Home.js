import React, { Component } from 'react';
import { Header, Container, Grid, Button } from 'semantic-ui-react';
import HeaderImage from '../../images/mountainViewHomeHeader.jpg';
import CoachCoins from '../../images/calculatorCoins.png';
import StepContent from './Steps';
import Compass from '../../images/Yellow-Compass.png';
import BlueTodo from '../../images/Blue-Todo.png';
import Hammer from '../../images/Red-Hammer.png';
import GreenPie from '../../images/Green-Pie.png';


var headerBackground = {
  height: "600px",
  backgroundSize: "cover",
  paddingTop: "160px",
  paddingBottom: "125px",
  backgroundImage: `url(${HeaderImage})`, 
}

var coachBackground = {
  height: "500px",
  backgroundSize: "cover",
  paddingTop: "160px",
  paddingBottom: "125px",
  backgroundImage: `url(${CoachCoins})`, 
}

var youtube = {
  marginTop: "30px",
}

var logoContent = {
  color: "white",
  fontSize: "3em",
}

var logoSubContent = {
  color: "white",
  fontSize: "2em",
}

var planLayout = {
  marginTop: "30px",
  marginBottom: "30px",
}

var stepContent = {
  marginTop: "10px",
  marginBottom: "30px",
}

class Home extends Component {
  render() {
    return (
      <Container fluid >
        <Container fluid style={headerBackground} textAlign='center' >
          <Header as='h1' style={logoContent} content='AFFORDABLE FINANCE COACHING' />
          <Header as='h3' style={logoSubContent} content='Discover your path to financial freedom.' />
          <Header as='h3' style={logoSubContent} content='A Four Steps plan can lead the way.' />
          <Button >Learn How</Button>
        </Container>
        <Container style={planLayout}>
          <Grid divided='vertically'>
            <Grid.Row columns={2}>
              <Grid.Column>
                <StepContent style={stepContent} color={"#E8B382"} icon={Compass} title="1: DISCOVER" content="Create a budget to calculate your net worth &amp; monthly cash flow." />
                <StepContent style={stepContent} color={"#88B2D2"} icon={BlueTodo} title="2: PLAN" content="Expert coaches plan your financial future." />
                <StepContent style={stepContent} color={"#E6988D"} icon={Hammer} title="3: IMPLEMENT" content="Give step-by-step action items ensuring progress." />
                <StepContent style={stepContent} color={"#7C9E77"} icon={GreenPie} title="4: REVIEW" content="Life happens. We are there every step of the way." />
              </Grid.Column>
              <Grid.Column>
                <iframe title='FinancialFreedomVideo' style={ youtube } width="660" height="371" src="https://www.youtube.com/embed/IvveZr0D_9Y?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
        <Container fluid style={coachBackground} textAlign='center' >
          
        </Container>
      </Container>

    );
  }
}

export default Home;
