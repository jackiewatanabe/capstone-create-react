// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';

import React, { Component } from 'react';
import { Font } from 'expo';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Spinner } from './components/common';
import LoginForm from './components/LoginForm';
import UserPage from './components/UserPage';
import reducers from './reducers';
import Router from './Router';

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

export default class App extends Component {
  state = { loggedIn: null, themeSet: false, user: null, appIsReady: false, fontLoaded: false };

  async componentDidMount() {
    await Font.loadAsync({
      'IowanOldStyle': require('./assets/fonts/iowan-old-style-bt.ttf'),
    });

    this.setState({ fontLoaded: true });
  }

   componentWillMount() {
    // await Font.loadAsync({
    //   'IowanOldStyle': require('./assets/fonts/iowan-old-style-bt.ttf'),
    // });
    //
    //   this._loadAssetsAsync();


      firebase.initializeApp({
      apiKey: 'AIzaSyCzVJ58tgRgTsbjnYNeX1WR16pWUqybvGw',
      authDomain: 'photo52authentication.firebaseapp.com',
      databaseURL: 'https://photo52authentication.firebaseio.com',
      projectId: 'photo52authentication',
      storageBucket: 'photo52authentication.appspot.com',
      messagingSenderId: '351350443180'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
        this.setState({ user: user });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:

        return (
          // <Button
          //   onPress={() => firebase.auth().signOut()}
          // >
          //   LOG OUT
          // </Button>

          <UserPage user={this.state.user} />
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  }

  render() {
    console.log('app.js render: ', this.state.user);
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}
