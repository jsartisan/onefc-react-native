import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import { View, Text, StyleSheet, Animated } from 'react-native';

import * as COLORS from '@constants/colors';
import { getUpcomingEvents } from '@selectors/eventSelectors';
import StickyEventTimer from '@components/events/StickyEventTimer';

class StickyEventHeader extends React.Component {
  state = {
    marginTop: new Animated.Value(-100),
  };

  componentDidMount() {
    const { marginTop } = this.state;

    Animated.timing(marginTop, {
      toValue: 0,
      duration: 250,
    }).start();
  }

  render() {
    const { events } = this.props;
    const { marginTop } = this.state;

    return (
      events.length && (
        <Animated.View
          style={{
            ...styles.stickyHeader,
            marginTop,
          }}
        >
          <View style={styles.stickyHeaderLeft}>
            <Text style={styles.title}>{events[0].content.name}</Text>
            <Text style={styles.venu}>
              {`${events[0].content.city}, ${moment(events[0].startTime).format(
                'Do MMM'
              )}`}
            </Text>
          </View>
          <View style={styles.stickyHeaderRight}>
            <StickyEventTimer startTime={events[0].startTime} />
          </View>
        </Animated.View>
      )
    );
  }
}

const styles = StyleSheet.create({
  stickyHeader: {
    flex: 1,
    position: 'absolute',
    top: 0,
    width: '100%',
    alignSelf: 'stretch',
    backgroundColor: COLORS.BLACK,
    justifyContent: 'flex-start',
    borderTopColor: COLORS.YELLOW,
    borderTopWidth: 2,
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: 8,
    paddingHorizontal: 10,
  },
  title: {
    color: COLORS.YELLOW,
    fontWeight: '700',
    fontSize: 15,
  },
  venu: {
    fontSize: 11,
    marginTop: 4,
    color: COLORS.GRAY700,
  },
});

const mapStateToProps = state => ({
  events: getUpcomingEvents(state),
});

export default connect(mapStateToProps)(StickyEventHeader);
