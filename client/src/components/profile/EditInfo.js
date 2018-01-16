import React, { Component } from 'react';
import { Button, Header, Modal } from 'semantic-ui-react'
import { connect } from 'react-redux';

class EditInfo extends Component {
    state = {}

  render() {
    const { user } = this.props;

    return (
      <Modal trigger={<Button>Edit Basic Information</Button>}>
        <Modal.Header>Edit Profile Information</Modal.Header>
        <Modal.Content >
            <Header as='h4' content='Name' />
              {`${user.first_name} ${user.last_name}`}

              <Header as='h4' content='Email' />
              <br />
              {user.email}
        </Modal.Content>
      </Modal>
    )
}
}

const mapStateToProps = state => ({
  user: state.user
})

export default connect(mapStateToProps)(EditInfo);