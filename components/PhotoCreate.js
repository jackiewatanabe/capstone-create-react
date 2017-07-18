import React, { Component } from 'react';
import { Text, Picker, CameraRoll, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import CameraRollPicker from 'react-native-camera-roll-picker';
import { Card, CardSection, Input, Button } from './common';
import { photoUpdate, photoCreate } from '../actions';

class PhotoCreate extends Component {
  // constructor() {
  //   super();
  //   console.warn(CameraRoll.getPhotos());
  // }

  constructor(props) {
      super(props);

      this.state = {
        num: 0,
        selected: [],
      };
    }

  onButtonPress() {
      const { name, description, category, image_url } = this.props;

      // this.props.photoCreate({
      //   name, description, category: category || 'uncategorized', image_url });

      Actions.example();
  }

  getSelectedImages(images, current) {
    var num = images.length;

    this.setState({
      num: num,
      selected: images,
    });

    console.log(current);
    // console.log(this.state.selected);
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Name"
            placeholder="Enter image name here"
            value={this.props.name}
            onChangeText={text => this.props.photoUpdate({ prop: 'name', value: text })}
          />
        </CardSection>

        <CardSection>
        <Input
          label="Description"
          placeholder="Enter description here"
          value={this.props.description}
          onChangeText={text => this.props.photoUpdate({ prop: 'description', value: text })}
        />
        </CardSection>

        <CardSection>
          <Input
            label="Image URL"
            placeholder="Enter image URL here"
            value={this.props.image_url}
            onChangeText={text => this.props.photoUpdate({ prop: 'image_url', value: text })}
          />
        </CardSection>
        <CardSection>
          <Button
           onPress={this.onButtonPress.bind(this)}
          >
            CHOOSE PHOTO
          </Button>
        </CardSection>
        <CardSection style={{ flexDirection: 'column' }}>
          <Text style={styles.pickerTextStyle}>Category</Text>
          <Picker
            selectedValue={this.props.category}
            onValueChange={value => this.props.photoUpdate({ prop: 'category', value })}
          >
            <Picker.Item label="Uncategorized" value="uncategorized" />
            <Picker.Item label="Portrait" value="portrait" />
            <Picker.Item label="Landscape" value="landscape" />
            <Picker.Item label="Animals" value="animals" />
            <Picker.Item label="Fashion" value="fashion" />
          </Picker>
        </CardSection>
      </Card>
    );
  }

}

const styles = {
  pickerTextStyle: {
    fontSize: 18,
    paddingLeft: 20
  },
  container: {
    flex: 1,
    backgroundColor: '#F6AE2D',
  },
  content: {
    marginTop: 15,
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  text: {
    fontSize: 16,
    alignItems: 'center',
    color: '#fff',
  },
  bold: {
    fontWeight: 'bold',
  },
  info: {
    fontSize: 12,
  },
};

const mapStateToProps = (state) => {
  const { name, description, category, image_url } = state.photoForm;

  return { name, description, category, image_url };
};

export default connect(mapStateToProps, { photoUpdate, photoCreate })(PhotoCreate);
