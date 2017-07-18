import React, { Component } from 'react';
import { View, Text, CameraRoll } from 'react-native';
import { connect } from 'react-redux';
import { Font } from 'expo';
import { Card, CardSection, Input, Button, Spinner } from './common';
import { emailChanged, passwordChanged, loginUser } from '../actions';


class LoginForm extends Component {
  // constructor() {
  //   super();
  //   console.warn(Object.keys(CameraRoll));
  // }


  async _loadAssetsAsync() {


  const fontAssets = cacheFonts([
    FontAwesome.font,
    IowanOldStyle.font
  ]);

  await Promise.all([
    ...fontAssets,
  ]);

  this.setState({appIsReady: true});
}

  async componentDidMount() {
    await Font.loadAsync({
      'IowanOldStyle': require('../assets/fonts/iowan-old-style-bt.ttf'),
    });

    this.setState({ fontLoaded: true });
  }

    onEmailChange(text) {
      this.props.emailChanged(text);
    }

    onPasswordChange(text) {
      this.props.passwordChanged(text);
    }

    onButtonPress() {
      const { email, password } = this.props;

      this.props.loginUser({ email, password });
    }

    renderButton() {
      if (this.props.loading) {
        return <Spinner size="large" />;
      }
      return (
        <Button onPress={this.onButtonPress.bind(this)}>
          LOG IN
        </Button>
      );
    }

    render() {
      return (
        <Card>
          <CardSection style={{ paddingTop: 30, paddingBottom: 30, alignSelf: 'center', width: 250 }}>
            <View style={{ flex: 1, alignSelf: 'center' }}>
              <Text style={{ fontFamily: 'IowanOldStyle', textAlign: 'center', fontStyle: 'italic', fontSize: 18 }}>
                Becoming a better photographer begins with taking more pictures. Push yourself to try new techniques with just one image a week.
              </Text>
            </View>
          </CardSection>
          <CardSection>
            <View style={{ flex: 1, alignSelf: 'center', paddingBottom: 20 }}>
              <Text style={{ fontFamily: 'Avenir-Light', textAlign: 'center', fontSize: 20, letterSpacing: 3 }}>
                START YOUR PHOTO52 CHALLENGE TODAY!
              </Text>
            </View>
          </CardSection>
          <CardSection>
            <Input
              label="EMAIL"
              placeholder="email@gmail.com"
              onChangeText={this.onEmailChange.bind(this)}
              value={this.props.email}
            />
          </CardSection>
          <CardSection>
            <Input
              secureTextEntry
              placeholder="password"
              label="PASSWORD"
              onChangeText={this.onPasswordChange.bind(this)}
              value={this.props.password}
            />
          </CardSection>
          <Text style={styles.errorTextStyle}>
            {this.props.error}
          </Text>
          <CardSection>

            {this.renderButton()}
          </CardSection>

        </Card>
      );
    }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};

const mapStateToProps = ({ auth }) => {
  const { email, password, error, loading, user } = auth;

  return { email, password, error, loading, user };
};

export default connect(mapStateToProps, {
  emailChanged,
  passwordChanged,
  loginUser })(LoginForm);

// --------------Old way without redux

// import React, { Component } from 'react';
// import { Text, View } from 'react-native';
// import firebase from 'firebase';
// import { Button, Card, CardSection, Input, Spinner } from './common';
//
// class LoginForm extends Component {
//   state = { email: '', password: '', error: '', loading: false };
//
//   onButtonPress() {
//     const { email, password } = this.state;
//
//     this.setState({ error: '', loading: true });
//
//     firebase.auth().signInWithEmailAndPassword(email, password)
//       .then(this.onLoginSuccess.bind(this))
//       .catch(() => {
//         firebase.auth().createUserWithEmailAndPassword(email, password)
//           .then(this.onLoginSuccess.bind(this))
//           .catch(this.onLoginFail.bind(this));
//       });
//   }
//
//   onLoginFail() {
//     this.setState({
//       error: 'Authentication Failed',
//       loading: false
//     });
//   }
//
//   onLoginSuccess() {
//     this.setState({
//       email: '',
//       password: '',
//       loading: false,
//       error: ''
//     });
//   }
//
//   renderButton() {
//     if (this.state.loading) {
//       return <Spinner size="small" />;
//     }
//     return (
//       <Button onPress={this.onButtonPress.bind(this)}>
//         LOG IN
//       </Button>
//     );
//   }
//
//   render() {
//     return (
//       <Card>
//         <CardSection style={{ flex: 1 }}>
//           <View>
//             <Text style={styles.welcomeTextStyle}>Welcome to Photo52!</Text>
//             <Text style={styles.welcomeTextStyle}>Taking better pictures begins with...</Text>
//             <Text style={styles.welcomeTextStyle}>Please enter your login information</Text>
//           </View>
//         </CardSection>
//         <CardSection>
//           <Input
//             placeholder="user@gmail.com"
//             label="Email"
//             value={this.state.email}
//             onChangeText={email => this.setState({ email })}
//           />
//         </CardSection>
//         <CardSection>
//           <Input
//             secureTextEntry
//             placeholder="password"
//             label="Password"
//             value={this.state.password}
//             onChangeText={password => this.setState({ password })}
//           />
//         </CardSection>
//         <Text style={styles.errorTextStyle}>
//           {this.state.error}
//         </Text>
//         <CardSection>
//           {this.renderButton()}
//         </CardSection>
//
//       </Card>
//     );
//   }
// }
//
// const styles = {
//   errorTextStyle: {
//     fontSize: 20,
//     alignSelf: 'center',
//     color: 'red'
//   },
//   welcomeTextStyle: {
//     alignSelf: 'center',
//     paddingBottom: 10,
//     fontFamily: 'IowanOldStyle',
//   },
//   welcomeContainerStyle: {
//     flex: 1,
//     alignSelf: 'center',
//     marginLeft: 10,
//     marginRight: 10,
//   }
// };
//
// export default LoginForm;
