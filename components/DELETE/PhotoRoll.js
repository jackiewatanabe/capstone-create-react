import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

class PhotoRoll extends Component {
  state = { themes: [] };


  // renderAlbums() {
  //   return this.state.albums.map(album =>
  //     <AlbumDetail key={album.title} album={album} />);
  // }

  render() {
    // console.log(this.state);
    console.log("things are rendering in PhotoRoll");
    return (
      <View>
        <Card>
          <CardSection>
            <Text>username</Text>
          </CardSection>
          <CardSection>
            <Text>THIS WEEKS THEME</Text>
            <Button>NO THEME SET YET</Button>
          </CardSection>
        </Card>
      </View>
    );
  }

  // const styles = {
  //   headerContentStyle: {
  //       flexDirection: 'column',
  //       justifyContent: 'space-around'
  //   }
  // };


}

export default PhotoRoll;
