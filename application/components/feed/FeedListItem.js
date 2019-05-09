import React from 'react';

import { share } from '@utilities/helpers';
import { View, StyleSheet } from 'react-native';
import FeedListItemArticle from '@components/feed/FeedListItemArticle';
import FeedListItemYoutube from '@components/feed/FeedListItemYoutube';

export default class FeedListItem extends React.Component {
  onShare = () => {
    const { item } = this.props;

    share(item.data.title, item.data.description, item.data.link);
  };

  /**
   * returns item component based on type
   */
  renderItem = () => {
    const { item } = this.props;

    switch (item.type) {
      case 'ARTICLE':
        return <FeedListItemArticle item={item} onShare={this.onShare} />;

      case 'YOUTUBE':
        return <FeedListItemYoutube item={item} onShare={this.onShare} />;

      default:
        return <FeedListItemArticle item={item} onShare={this.onShare} />;
    }
  };

  render() {
    const { index } = this.props;

    return (
      <View style={[index === 0 && styles.firstFeed]}>{this.renderItem()}</View>
    );
  }
}

const styles = StyleSheet.create({
  firstFeed: {
    paddingTop: 10,
  },
});
