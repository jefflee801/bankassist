import React from 'react';
import { Header, Image, Grid, Container} from 'semantic-ui-react';
import SLC from '../../images/NightSLC.jpg';
import Hike from '../../images/hike_brown.jpg';


var sectionStyle = {
  width: "100%",
  height: "200px",
  backgroundImage: `url(${Hike})`,

};

var halfInfo = {
  width: "300px",
};

const About = () => (
  <Container fluid>
    <Header textAlign='center'>
      <img style={{ width: '100%', height: '100%' }} src={SLC} alt="NightSLC"/>
    </Header>
    <Container style={{ marginTop: '50px', marginBottom: '50px'  }} >
      <Grid relaxed columns={2}>
        <Grid.Column>
          <Header as='h2' content='learn by doing' />
          <Header as='h5' style={halfInfo} content='With BankAssist, you can learn to invest in the stock market as you build out your portfolio.'/>
          <Header as='h5' style={halfInfo} content='Discover new stocks through Collections, track your favorites with a personalized news feed, and more.'/>
        </Grid.Column>
        <Grid.Column>
        </Grid.Column>
      </Grid>
    </Container>
    <Container fluid style={sectionStyle} textAlign='center' >
    <Grid relaxed columns={4}>
       <Grid.Column>
         <Image src='Compass' />
       </Grid.Column>
       <Grid.Column>
         <Image src='Plan' />
       </Grid.Column>
       <Grid.Column>
         <Image src='Implement' />
       </Grid.Column>
       <Grid.Column>
         <Image src='Review' />
       </Grid.Column>
     </Grid>
     </Container>
  </Container>
)

export default About;
