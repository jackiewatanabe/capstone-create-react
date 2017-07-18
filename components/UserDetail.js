import React from 'react';
// import firebase from 'firebase';
import { Text, View, Image } from 'react-native';
import { Card, CardSection } from './common';
import PhotoList from './PhotoList';
import ThemeItem from './ThemeItem';

// const { currentUser } = firebase.auth();


const UserDetail = (props) => {
  console.log('Im in USERDETAIL props: ', props.user);

  const { user, theme } = props;

  return (
    <View>
      <Card>
        <CardSection>
          <View style={styles.thumbnailContainerStyle}>
            <Image
            style={styles.thumbnailStyle}
            source={{
              uri: 'https://farm8.staticflickr.com/7290/12125301174_52146c676a_s.jpg'
            }}
            />
          </View>
          <View style={styles.usernameContentStyle}>
            <Text
              style={{
                fontFamily: 'Avenir-Light',
                fontWeight: '100',
                letterSpacing: 2
              }}
            >
              {user.email}
            </Text>
          </View>
        </CardSection>
        <ThemeItem theme={theme} />
      </Card>
      <Card>
        <CardSection>
          <Text style={{
            fontFamily: 'Avenir-Light',
            fontWeight: '100',
            letterSpacing: 2
        }}>
            MY PHOTOROLL
          </Text>
        </CardSection>
        <PhotoList />
      </Card>
    </View>
  );
};

const styles = {

  thumbnailStyle: {
    height: 60,
    width: 60,
    marginRight: 5,
    borderRadius: 30,
    resizeMode: 'contain',
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  usernameContentStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 100,
  },
  themeContentStyle: {
      flexDirection: 'column',
      justifyContent: 'space-around',
      flexWrap: 'wrap'
  },
  imageStyle: {
    height: 200,
    // flex: 1,
    width: 350,
    alignSelf: 'stretch'
  },
  photorollImageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
    // marginTop: 50
  },
  // photorollContainer: {
  //   marginTop: 20
  // },
  photorollContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    // flexWrap: 'wrap',
    // marginTop: 100
  },
  photorollContainerStyle: {
    flex: 1
  }

};

export default UserDetail;
