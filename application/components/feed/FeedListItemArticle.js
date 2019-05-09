import React from 'react';

import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  Dimensions,
} from 'react-native';
import moment from 'moment';
import * as COLORS from '@constants/colors';
import { IconButton } from 'react-native-paper';

export default function FeedListItemArticle({ item, onShare }) {
  return (
    <View style={styles.feed}>
      <View style={styles.content}>
        <View style={styles.contentLeft}>
          <ImageBackground
            resizeMode="cover"
            style={styles.coverImage}
            source={{
              uri: item.data.featured_image.url,
            }}
          />
        </View>
        <View style={styles.contentRight}>
          <Text style={styles.title}>{item.data.title}</Text>
          <Text style={styles.publishedTime}>
            {moment(item.data.published_date).fromNow()}
          </Text>
        </View>
      </View>
      <View style={styles.footer}>
        <View style={styles.footerLeft}>
          <Text style={styles.description} numberOfLines={2}>
            {decodeURIComponent(item.data.description)}
          </Text>
        </View>
        <View style={styles.footerRight}>
          <IconButton
            style={styles.shareIcon}
            icon="share"
            color="#000"
            size={20}
            onPress={onShare}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  feed: {
    marginHorizontal: 10,
    marginBottom: 10,
    backgroundColor: COLORS.WHITE,
    paddingVertical: 12,
    paddingHorizontal: 12,
    shadowColor: COLORS.BLACK100,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 1,
    elevation: 5,
  },
  title: {
    fontWeight: '700',
    flex: 1,
  },
  content: {
    flexDirection: 'row',
    height: 150,
  },
  contentRight: {
    flex: 1,
    paddingLeft: 10,
  },
  coverImage: {
    height: 150,
    width: Dimensions.get('window').width / 2,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 5,
  },
  footerLeft: {
    flex: 1,
  },
  footerRight: {
    width: 50,
    alignItems: 'flex-end',
  },
  description: {
    fontSize: 12,
  },
  publishedTime: {
    fontSize: 10,
    color: COLORS.BLACK100,
  },
  shareIcon: {
    margin: 0,
  },
});
