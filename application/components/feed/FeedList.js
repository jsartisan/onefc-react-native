import React from 'react';
import { connect } from 'react-redux';
import { FlatList, StyleSheet, View, Text } from 'react-native';

import FeedListItem from '@components/feed/FeedListItem';

const FeedList = ({ feed }) => {
  return (
    <View style={styles.container}>
      {feed.length > 0 && (
        <FlatList
          data={feed}
          renderItem={({ item, index }) => (
            <FeedListItem index={index} item={item} />
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

const mapStateToProps = () => ({});

export default connect(
  mapStateToProps,
  {}
)(FeedList);
