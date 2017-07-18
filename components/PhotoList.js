import _ from 'lodash';
import React, { Component } from 'react';
import { ListView, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { photosFetch } from '../actions';
import PhotoListItem from './PhotoListItem';

class PhotoList extends Component {
  componentWillMount() {
    this.props.photosFetch();

    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    // nextProps are the next set of props
    // that this componenet will be rendered with
    //  this.props is still the old set of props
    this.createDataSource(nextProps);
  }

  createDataSource({ photos }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(photos);
  }

  renderRow(photo) {
    return <PhotoListItem photo={photo} />;
  }

  render() {
      console.log(this.props);
      return (
        <ScrollView style={{ height: 400 }}>
          <ListView
            enableEmptySections
            dataSource={this.dataSource}
            renderRow={this.renderRow}
          />
        </ScrollView>
      );
  }
}

const mapStateToProps = state => {
  const photos = _.map(state.photos, (val, uid) => {
    return { ...val, uid };
  });

  return { photos };
};

export default connect(mapStateToProps, { photosFetch })(PhotoList);
