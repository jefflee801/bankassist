import React, { Component } from 'react';
import { Container, Header, Segment } from 'semantic-ui-react';
import { connect } from 'react-redux';
import EditInfo from './EditInfo';

class BasicInfo extends Component {
    state = {}

  render() {
    const { user } = this.props;


    return (
        <Container>
          <Header as='h4' content='Name' />
            {`${user.first_name} ${user.last_name}`}

            <Header as='h4' content='Email' />
            <br />
            {user.email}
          <Segment basic textAlign='right'>
              <EditInfo />
          </Segment>
        </Container>
    )
}
}

const mapStateToProps = state => ({
  user: state.user
})

export default connect(mapStateToProps)(BasicInfo);