import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, Image, TouchableWithoutFeedback, LayoutAnimation } from 'react-native';
import { CardSection } from './common';
import * as actions from '../actions';

class InspirationUnsplashedItem extends Component {

  componentWillUpdate() {
    LayoutAnimation.spring();
  }

  renderDescription() {
  const { photo, expanded } = this.props;

  // const { camera, lens, iso, shutter_speed, aperture } = this.props.photo;

  let camera = photo.camera;
  let lens = photo.lens;
  let iso = photo.iso;
  let shutter_speed = photo.shutter_speed;
  let aperture = photo.aperture;

  console.log('camera: ', camera);
  console.log('lens: ', lens);
  // if (camera === '' || camera == null) {
  //   camera = 'n/a';
  // }
  // if (lens === '' || lens == null) {
  //   lens = 'n/a';
  // }
  // if (iso === '' || iso == null) {
  //   iso = 'n/a';
  // }
  // if (shutter_speed === '' || shutter_speed == null) {
  //   shutter_speed = 'n/a';
  // }
  // if (aperture === '' || aperture == null) {
  //   aperture = 'n/a';
  // }

  if (expanded) {

    return (
      <CardSection style={styles.resultDetail}>
        <View style={{ flex: 1, alignSelf: 'center', flexDirection: 'row' }}>
          <View style={{ flex: 2.7, flexDirection: 'column' }}>
            <Text style={styles.resultDetailTextLabel}>CAMERA:  </Text>
            <Text style={styles.resultDetailTextLabel}>LENS:
            </Text>
            <Text style={styles.resultDetailTextLabel}>ISO: </Text>
            <Text style={styles.resultDetailTextLabel}>SHUTTER SPEED: </Text>
            <Text style={styles.resultDetailTextLabel}>APERTURE: </Text>
          </View>
          <View style={{ flex: 3, flexDirection: 'column' }}>
            <Text style={styles.resultDetailText}>{camera ? camera : 'n/a'}</Text>
            <Text style={styles.resultDetailText}>{lens ? lens : 'n/a'}</Text>
            <Text style={styles.resultDetailText}>{iso ? iso : 'n/a'}</Text>
            <Text style={styles.resultDetailText}>{shutter_speed ? shutter_speed : 'n/a'}</Text>
            <Text style={styles.resultDetailText}>
            {aperture ? aperture : 'n/a'}
            </Text>
          </View>
        </View>
      </CardSection>
    );
  }
}

  render() {
    const { small } = this.props.photo.urls;
    const { id } = this.props.photo;
    console.log('this.props.photo inItem: ', this.props.photo);
    return (
      <TouchableWithoutFeedback onPress={() => this.props.selectResultPhoto(id)}>
      <View>
      <CardSection style={{ alignSelf: 'center', paddingTop: 0, paddingBottom: 0 }}>
          <Image style={styles.imageStyle} source={{ uri: `${small}` }}>{this.renderDescription()}
          </Image>
      </CardSection>

      </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  },
  imageStyle: {
    // height: 200,
    // width: 350,
    alignSelf: 'stretch',
    // flex: 1,
    width: 350,
    height: 200,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    // alignItems: 'center',
  },
  resultDetailTextLabel: {
    // alignSelf: 'flex-start',
    textAlign: 'right',
    fontFamily: 'Avenir-Light',
    fontSize: 12,
    letterSpacing: 1,
    color: 'white',
    opacity: 1,
    fontWeight: '400',
    paddingRight: 3
  },
  resultDetail: {
    backgroundColor: 'rgba(0, 0, 0, .7)',
    // opacity: 0.5,
    flex: 1,
    alignSelf: 'stretch',
    // backgroundColor: '#ffffff',
    // opacity: 0.5
  },
  resultDetailTextLine: {
    flexDirection: 'row',
    // alignSelf: 'center',
    // flex: 1
  },
  resultDetailText: {
    alignSelf: 'stretch',
    // textAlign: 'left',
    fontFamily: 'IowanOldStyle',
    fontStyle: 'italic',
    fontSize: 12,
    letterSpacing: 1,
    color: 'white',
    opacity: 1,
    fontWeight: '400'
  }

};

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedResultPhotoId === ownProps.photo.id;

  return { expanded };
};

export default connect(mapStateToProps, actions)(InspirationUnsplashedItem);
