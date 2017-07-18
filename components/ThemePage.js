import React, { Component } from 'react';
import { View, Text, LayoutAnimation } from 'react-native';
// import axios from 'axios';
// import UserDetail from './UserDetail';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Card, CardSection, Button } from './common';
import { themeChanged } from '../actions';


class ThemePage extends Component {
    // state = { theme: this.props.theme };

    componentWillMount() {
      LayoutAnimation.easeInEaseOut();
      // this.setState(this.props.themeChanged('asdf'));
    }


    // componentWillMount() {
    //   // if (this.state.theme) {
    //   //   this.setState({ theme: 'something' });
    //   // } else {
    //   //   this.setState({ theme: null });
    //   // }
    //   console.log('Im in component willmount themepage');
    //   // this.setState({ theme: 'something' });
    // }

    onButtonPress() {

      const myThemes = ['BLACK AND WHITE', 'LEADING LINES', 'CIRCLES', 'WEEE!!!', 'MORNING', 'LONG EXPOSURE', 'NIGHT SKY', 'PORTRAIT OF A STRANGER', 'WATER', 'SELF-PORTRAIT', 'SILHOUTTE', 'MOVEMENT', 'MESSY', 'WEATHER', 'TRANSPORTATION', 'BLUE', 'RED', 'COLORS', 'MINIMALISM', 'BOKEH', 'SOLITUDE', 'GET HIGH', 'GET LOW', 'FASHION', 'TREND', 'STREET CANDID', 'FOOD', 'SYMMETRY', 'WABISABI', 'MUSIC', 'TEXTURE', 'CLOSE-UP', 'LIGHT PAINTING', 'BUSINESS', 'FORMAL', 'FAVORITE', 'MID-DAY', 'FEET', 'HANDS', 'SHADOWS', 'ANGLES', 'GROWTH', 'SOFT', 'FRIENDSHIP', 'FURRY FRIENDS', 'DISTANCE', 'NOSTALGIA', 'BLUR'];
      const rand = myThemes[Math.floor(Math.random() * myThemes.length)];
      // const { theme } = this.state;
      // this.setState({ theme: 'WEEEEE' });
      console.log('onButtonPress-before themeChanged: ', this.props.theme);
      this.props.themeChanged(rand);
      console.log('onButtonPress:', this.props.theme);
      // ;
      // return <Text>BLACK AND WHITE</Text>;
    }

    onInspirationPress() {
      Actions.inspirationPage({ api: '500px'});
    }

    onFlickrPress() {
      Actions.inspirationPage({ api: 'flickr'});
    }

    onUnsplashPress() {
      Actions.inspirationPage({ api: 'unsplash'});
    }

    onUploadPress() {
      Actions.photoCreate();
    }

    renderChallengeButton() {
      switch (this.props.theme === '') {
        case true:
          console.log('THEMEPAGE Im in switch case true in renderButton');
          console.log('THEMEPAGE STATE.THEME:', this.props.theme);
          return (
            <Button onPress={this.onButtonPress.bind(this)}>
              GIVE ME A CHALLENGE
            </Button>
          );
        case false:
          console.log('THEMEPAGE Im in switch case false in renderButton');
          console.log('THEMEPAGE STATE.THEME:', this.props.theme);
          return (
                <View style={{ alignSelf: 'center', flex: 1, paddingBottom: 15, paddingTop: 10 }}>
                  <Text
                    style={{
                      alignSelf: 'center',
                      fontFamily: 'Avenir-Light'
                    }}
                  >
                    YOUR THEME FOR THE WEEK IS
                  </Text>
                  <Text
                    style={{
                      paddingTop: 10,
                      paddingBottom: 20,
                      textAlign: 'center',
                      alignSelf: 'center',
                      fontFamily: 'IowanOldStyle',
                      fontSize: 30,
                      letterSpacing: 2 }}
                  >{this.props.theme}</Text>
                </View>
          );
        default:
        console.log('THEMEPAGE Im in default');
        console.log('THEMEPAGE STATE.THEME:', this.props.theme);
          return (<Button onPress={this.onButtonPress.bind(this)}>
            GIVE ME A CHALLENGE
          </Button>);
      }
    }

    renderInspireButton() {
      switch (this.props.theme !== '') {
        case true:
          return (
              <Button onPress={this.onInspirationPress.bind(this)} style={{ width: 300 }}>GET INSPIRED - 500px</Button>
          );
        case false: break;
        default: break;
      }
    }

    renderFlickrButton() {
      switch (this.props.theme !== '') {
        case true:
          return (
              <Button onPress={this.onFlickrPress.bind(this)} style={{ width: 300 }}>GET INSPIRED - Flickr</Button>
          );
        case false: break;
        default: break;
      }
    }

    renderUnsplashButton() {
      switch (this.props.theme !== '') {
        case true:
          return (
              <Button onPress={this.onUnsplashPress.bind(this)} style={{ width: 300 }}>GET INSPIRED - unsplashed</Button>
          );
        case false: break;
        default: break;
      }
    }

    renderUploadButton() {
      switch (this.props.theme !== '') {
        case true:
          return (
              <Button onPress={this.onUploadPress.bind(this)}>UPLOAD PHOTO</Button>
          );
        case false: break;
        default: break;
      }
    }

    renderCountdown() {
          switch (this.props.theme !== '') {
            case true:
              return (
                  <View style={{ alignSelf: 'center', flex: 1, paddingBottom: 30, paddingTop: 10 }}>
                    <Text
                      style={{
                      alignSelf: 'center',
                      fontFamily: 'Avenir-Light',
                      fontWeight: '100',
                      fontSize: 40,
                      letterSpacing: 2
                      }}
                    >
                      7 DAYS
                    </Text>
                    <Text
                      style={{
                      alignSelf: 'center',
                      fontFamily: 'Avenir-Light',
                      fontWeight: '100',
                      fontSize: 15,
                      letterSpacing: 2
                      }}
                    >
                      LEFT IN CHALLENGE
                    </Text>
                  </View>
              );
            case false: break;
            default: break;
          }
    }

    render() {
      return (
        <Card>
          <CardSection>
            <View style={{ alignSelf: 'center', flex: 1, paddingBottom: 30, paddingTop: 10 }}>
              <Text
                style={{
                  alignSelf: 'center',
                  fontFamily: 'Avenir-Light',
                  fontWeight: '100',
                  fontSize: 30,
                  letterSpacing: 2 }}
              >WEEK 1 OF 52</Text>
            </View>
          </CardSection>

          <CardSection>
            {this.renderChallengeButton()}
          </CardSection>

          <CardSection>
            {this.renderCountdown()}
          </CardSection>

          <CardSection>
            {this.renderInspireButton()}
          </CardSection>

          <CardSection>
            {this.renderUnsplashButton()}
          </CardSection>

          <CardSection>
            {this.renderFlickrButton()}
          </CardSection>

          <CardSection>
            {this.renderUploadButton()}
          </CardSection>
        </Card>
      );
    }
}

const mapStateToProps = ({ auth }) => {
  const { theme } = auth;

  return { theme };
};


export default connect(mapStateToProps, { themeChanged })(ThemePage);
