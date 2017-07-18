import _ from 'lodash';
import React, { Component } from 'react';
// import { View } from 'react-native';
import { connect } from 'react-redux';
import { ScrollView, ListView, Text, View } from 'react-native';
// import axios from 'axios';
import { Card, CardSection } from './common';
import { searchPhotosFetch, searchFlickrFetch, searchUnsplashFetch } from '../actions';
import InspirationItem from './InspirationItem';
import InspirationUnsplashedItem from './InspirationUnsplashedItem';
import InspirationFlickrItem from './InspirationFlickrItem';

class InspirationPage extends Component {

  componentWillMount() {
    // console.log('in INSPIRATION PAGE:', this.props.theme);
    // this.props.searchPhotosFetch();

    const { theme } = this.props;

    if (this.props.api === '500px') {
      console.log('in componentWillMount 500px');
      this.props.searchPhotosFetch({ theme });
    }

    if (this.props.api === 'flickr') {
      console.log('in componentwillMount Flickr');
      this.props.searchFlickrFetch({ theme });
    }

    if (this.props.api === 'unsplash') {
      console.log('in componentwillMount Unsplash');
      this.props.searchUnsplashFetch({ theme });
    }

    // this.props.photosFetch();
    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
  // nextProps are the next set of props
  // that this componenet will be rendered with
  //  this.props is still the old set of props
    this.createDataSource(nextProps);
  }

  createDataSource({ photos, unsplashPhotos }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    if (this.props.api === '500px') {
      console.log('made it to createDataSource', photos);
      this.dataSource = ds.cloneWithRows(photos);
    }

    if (this.props.api === 'unsplash') {
      console.log('made it to createDataSource', unsplashPhotos);
      this.dataSource = ds.cloneWithRows(unsplashPhotos);
    }
  }

  renderRow(photo) {
    console.log('this.props in renderRow:', this.props);
    // console.log('IN RENDEROW photo: ', photo);
    // console.log('IN RENDERROW api: ', api);
      return <InspirationItem photo={photo} />;
  }

  renderRowUnsplashed(photo) {
    return <InspirationUnsplashedItem photo={photo} />;
  }

  renderRowFlickr(photo) {
    return <InspirationFlickrItem photo={photo} />;
  }

  renderListView() {
    if (this.props.api === '500px') {
      return (
        <ListView
          enableEmptySections
          dataSource={this.dataSource}
          renderRow={this.renderRow}
        />
      );
    } else if (this.props.api === 'unsplash') {
      return (
        <ListView
          enableEmptySections
          dataSource={this.dataSource}
          renderRow={this.renderRowUnsplashed}
        />
      );
    }
    return (
      <ListView
        enableEmptySections
        dataSource={this.dataSource}
        renderRow={this.renderRowFlickr}
      />
    );
  }

  render() {
    console.log(this.props);
    console.log('this.renderrow: ', this.renderRow);
    const { api } = this.props;
    return (
      <Card style={{ flex: 1 }}>
        <CardSection>
          <View
            style={{ flex: 1, alignSelf: 'center'
            }}
          >
            <Text style={{
              alignSelf: 'center',
              fontFamily: 'Avenir-Light',
              fontWeight: 'normal',
              fontSize: 15,
              letterSpacing: 2 }}
            >INSPIRATION - {api}
            </Text>
            <Text style={{
              paddingTop: 10,
              paddingBottom: 20,
              textAlign: 'center',
              alignSelf: 'center',
              fontFamily: 'IowanOldStyle',
              fontSize: 35,
              letterSpacing: 2 }}>{this.props.theme}</Text>
          </View>
        </CardSection>

      <ScrollView style={{ height: 400 }}>
        {this.renderListView()}
      </ScrollView>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  // console.log('mapstate to props: themes.photos: ', state);
    const theme = state.auth.theme;
    const photos = _.map(state.themes.photos, (val, uid) => {
      return { ...val, uid };
    });

    const unsplashPhotos = _.map(state.unsplashPhotos.results, (val, uid) => {
      return { ...val, uid };
    });

    const flickrPhotos = _.map(state.flickrPhotos.photos, (val, uid) => {
      return { ...val, uid };
    });
      console.log('photos mapStateToProps: ', photos);
      console.log('unsplashPhotos mapStateToProps: ', unsplashPhotos);

    return { photos, unsplashPhotos, flickrPhotos, theme };
  };

export default connect(mapStateToProps, { searchPhotosFetch, searchFlickrFetch, searchUnsplashFetch })(InspirationPage);
