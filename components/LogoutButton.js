import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const LogoutButton = ({ onPress, children }) => {
  const { buttonStyle, textStyle } = styles;

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={textStyle}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#ffffff',
    fontSize: 8,
    fontWeight: '200',
    paddingTop: 3,
    paddingBottom: 3,
    fontFamily: 'IowanOldStyle',
    letterSpacing: 2

  },
  buttonStyle: {
    flex: 2,
    // alignSelf: 'stretch',
    backgroundColor: 'red',
    // borderRadius: 5,
    borderWidth: 1,
    borderColor: '#817f7f',
    // marginLeft: 5,
    // marginRight: 5
  }
};

export default LogoutButton;
