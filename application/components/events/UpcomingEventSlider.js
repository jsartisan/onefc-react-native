import React from 'react';
import { connect } from 'react-redux';
import Swiper from 'react-native-swiper';
import { View, Dimensions, Image, StyleSheet } from 'react-native';

import {
  getUpcomingEvents,
  getUpcomingEventsIsLoading,
} from '@selectors/eventSelectors';
import EventTimer from '@components/events/EventTimer';

const UpcomingEventSlider = ({ events, isLoading }) => {
  /**
   * render items of event slider
   */
  const renderItems = () => {
    return events.map(event => (
      <View>
        <Image
          resizeMode="cover"
          style={styles.coverImage}
          source={{
            uri: event.creatives.bannerUpcoming.url,
          }}
        />
        <EventTimer startTime={event.startTime} />
      </View>
    ));
  };

  return (
    <View>
      <Swiper height={200} showsButtons={false} showsPagination={false}>
        {renderItems()}
      </Swiper>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    height: 'auto',
  },
  slide: {},
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
  events: getUpcomingEvents(state),
  isLoading: getUpcomingEventsIsLoading(state),
});

export default connect(
  mapStateToProps,
  {}
)(UpcomingEventSlider);
