// Import libraries for making a Component
import React from 'react';
import { Text, View } from 'react-native';
import firebase from 'firebase';
import { Button } from './';

// Make a Component
const Header = (props) => {
  const { textStyle, viewStyle, buttonStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
      <Button
        style={buttonStyle}
        onPress={() => firebase.auth().signOut()}>
        LOG OUT
      </Button>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    height: 80,
    paddingTop: 10,
    shadowColor: '#0000',
    shadowOffset: { width: 0, height: 20 },
    shadowOpacity: 0.5,
    elevation: 2,
    position: 'relative',
    flexDirection: 'row',
    flex: 0
//
//     borderBottomColor: '#000',
// borderBottomWidth: 1
  },
  textStyle: {
    fontSize: 20,
    flex: 2.5,
    // color: 'white'
  },
  buttonStyle: {
    flex: 1,
    padding: 10,
    backgroundColor: 'red'
    // justifyContent: 'flex-end'
  }
};

// Make the component available to other parts of the app
export { Header };
