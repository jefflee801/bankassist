import React, { Component } from 'react';
import { Menu, Button, Image } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleLogout } from '../../actions/auth';
import Logo from '../../images/Bank_Assist.png';

var navStyle = {
  fontSize: "1.1em",
  marginTop: "13px",
}

class NavBar extends Component {
  navLogic = () => {
    const { user, dispatch, history } = this.props;

    if (user.id) {
      return (
        <Menu.Menu position='right'>
          <Link to='/Profile' style={navStyle}>
          <Menu.Item  name={this.props.user.first_name}/>
          </Link>
          <Link to='/About' style={navStyle}>
            <Menu.Item name='ABOUT'/>
          </Link>
          <Link to=''><Button compact style={{ marginTop: '5px', marginRight: '80px', background: '#A3CA9D' }}>
          <Menu.Item name='LOGOUT' onClick={() => dispatch(handleLogout(history))}/></Button>
          </Link>
        </Menu.Menu>
      );
    }
    return (
        <Menu.Menu position='right'>
          <Link to='/About' style={navStyle}>
            <Menu.Item name='ABOUT'/>
          </Link>
          <Link to='/register'>
            <Button compact style={{ marginTop: '5px', background: '#A3CA9D'}} ><Menu.Item name='REGISTER' /></Button>
          </Link>
          <Link to='/login'>
            <Button compact style={{ marginTop: '5px', marginRight: '80px', background: '#A3CA9D' }} ><Menu.Item name='LOGIN' /></Button>
          </Link>
        </Menu.Menu>
    );
  }

  render() {
    return (
      <div>
        <Menu text fluid>
            <Link to='/'>
              <Image size='medium' style={{ marginLeft: '80px', marginRight: '10px' }} className="nav-logo" src={Logo} alt="FourSteps"/>
            </Link>
            <Link to='/Info' style={navStyle}>
              <Menu.Item name='Info' />
            </Link>
            <Link to='/Test' style={navStyle}>
              <Menu.Item name='Test' />
            </Link>
            { this.navLogic() }
        </Menu>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { user: state.user };
};

export default withRouter(connect(mapStateToProps)(NavBar));
