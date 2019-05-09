import React from 'react';
import { connect } from 'react-redux';
import { View, Dimensions, Image, StyleSheet } from 'react-native';

import FeedList from '@components/feed/FeedList';
import { getFeed, getFeedIsLoading } from '@selectors/feedSelectors';

const VisibleFeedList = ({ feed, isLoading }) => {
  return <FeedList feed={feed} />;
};

const styles = StyleSheet.create({
  wrapper: {},
  title: {
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  coverImage: {
    height: 200,
    width: Dimensions.get('window').width,
  },
});

const mapStateToProps = state => ({
  feed: getFeed(state),
  isLoading: getFeedIsLoading(state),
});

export default connect(
  mapStateToProps,
  {}
)(VisibleFeedList);
