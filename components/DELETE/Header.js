// Import libraries for making a Component
import React from 'react';
import { Text, View } from 'react-native';
import firebase from 'firebase';


// Make a Component
const Header = (props) => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>

    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    paddingTop: 15,
    shadowColor: '#0000',
    shadowOffset: { width: 0, height: 20 },
    shadowOpacity: 0.5,
    elevation: 2,
    position: 'relative'
//
//     borderBottomColor: '#000',
// borderBottomWidth: 1
  },
  textStyle: {
    fontSize: 20
  }
};

// Make the component available to other parts of the app
export default Header;
