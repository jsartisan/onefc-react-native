import React from 'react';

import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  Dimensions,
} from 'react-native';
import moment from 'moment';
import { IconButton } from 'react-native-paper';
import Icon from 'react-native-vector-icons/AntDesign';

import * as COLORS from '@constants/colors';

export default function FeedListItemYoutube({ item, onShare }) {
  return (
    <View style={styles.feed}>
      <View style={styles.header}>
        <Icon
          style={styles.headerIcon}
          name="star"
          size={18}
          color={COLORS.YELLOW}
        />
        <Text style={styles.headerTitle}>{item.data.title}</Text>
      </View>
      <ImageBackground
        resizeMode="cover"
        style={styles.coverImage}
        source={{
          uri: item.data.featured_image.url,
        }}
      >
        <IconButton
          style={styles.playButton}
          icon="play-arrow"
          color="#fff"
          size={20}
          onPress={() => {}}
        />
      </ImageBackground>
      <Text style={styles.publishedTime}>
        {moment(item.data.published_date).fromNow()}
      </Text>
      <View style={styles.footer}>
        <View style={styles.footerLeft}>
          <Text style={styles.description} numberOfLines={2}>
            {item.data.description}
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
  playButton: {
    backgroundColor: COLORS.BLACK,
    borderRadius: 15,
  },
  header: {
    flexDirection: 'row',
  },
  headerTitle: {
    fontWeight: '700',
    marginLeft: 10,
  },
  headerIcon: {
    alignSelf: 'flex-start',
  },
  coverImage: {
    height: 200,
    marginVertical: 8,
    width: Dimensions.get('window').width - 44,
    alignItems: 'center',
    justifyContent: 'center',
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 2,
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
    marginTop: 2,
  },
  shareIcon: {
    margin: 0,
  },
});
