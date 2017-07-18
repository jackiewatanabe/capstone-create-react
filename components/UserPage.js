import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
// import axios from 'axios';
import UserDetail from './UserDetail';
import { loginUser } from '../actions';


class UserPage extends Component {
  // state = { theme: this.props.theme, user: this.props.user };

  componentWillMount() {

  }

  render() {
    console.log('state: ', this.state);
    // console.log('user: ', this.user);

    return (
      <View>
        <UserDetail user={this.props.user} theme={this.props.theme} />
      </View>
    );
  }

}

const mapStateToProps = ({ auth }) => {
  const { email, error, loading, user, theme } = auth;

  return { email, error, loading, user, theme };
};

export default connect(mapStateToProps, { loginUser })(UserPage);
