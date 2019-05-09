import { connect } from 'react-redux';
import React, { Component } from 'react';
import * as COLORS from '@constants/colors';
import { IconButton } from 'react-native-paper';
import {
  SafeAreaView,
  StyleSheet,
  Platform,
  ScrollView,
  View,
  ActivityIndicator,
  Text,
  RefreshControl,
} from 'react-native';

import Retry from '@components/ui/Retry';
import { fetchFeedRequest } from '@actions/feedActions';
import VisibleFeedList from '@components/feed/VisibleFeedList';
import { fetchUpcomingEventsRequest } from '@actions/eventActions';
import UpcomingEventSlider from '@components/events/UpcomingEventSlider';
import StickyEventHeader from '@components/events/StickyEventHeader';
import {
  getUpcomingEventsErrorMessage,
  getUpcomingEventsIsLoading,
} from '@selectors/eventSelectors';
import {
  getFeedIsLoading,
  getFeedErrorMessage,
} from '@selectors/feedSelectors';

class HomePageScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: 'ONE',
    headerStyle: {
      borderBottomColor: 'transparent',
      backgroundColor: COLORS.BLACK,
    },
    headerTitleStyle: {
      ...Platform.select({
        ios: { fontFamily: 'Arial' },
        android: { fontFamily: 'Roboto' },
      }),
      color: COLORS.WHITE,
    },
    headerLeft: (
      <IconButton
        icon="menu"
        color="#fff"
        size={20}
        onPress={() => {
          navigation.openDrawer();
        }}
      />
    ),
    headerRight: (
      <IconButton icon="search" color="#fff" size={20} onPress={() => {}} />
    ),
  });

  state = {
    shouldShow: false,
  };

  /**
   * stores current scroll position
   */
  _scrollOffset = 0;

  /**
   * fetches upcoming events and feed list
   */
  fetchData = () => {
    const { fetchUpcomingEventsRequest, fetchFeedRequest } = this.props;

    fetchFeedRequest();
    fetchUpcomingEventsRequest();
  };

  /**
   * fetches upcoming event and feed
   */
  componentDidMount() {
    this.fetchData();
  }

  /**
   * hide or show a div based on scroll position
   */
  handleScroll = event => {
    const currentOffset = event.nativeEvent.contentOffset.y;
    if (currentOffset > 200) {
      this.setState({ shouldShow: true });
    } else {
      this.setState({ shouldShow: false });
    }
  };

  render() {
    const { isLoading, errorMessage } = this.props;
    const { shouldShow } = this.state;

    const refreshControl = (
      <RefreshControl refreshing={isLoading} onRefresh={this.fetchData} />
    );

    return (
      <SafeAreaView style={styles.container}>
        {isLoading === true && (
          <View style={styles.loaderContainer}>
            <ActivityIndicator size="large" />
            <Text style={styles.loadingText}>Loading...</Text>
          </View>
        )}

        {isLoading === false && errorMessage && (
          <Retry message={errorMessage} onPress={this.fetchData} />
        )}

        {isLoading === false && !errorMessage && (
          <ScrollView
            stickyHeaderIndices={[1]}
            onScroll={this.handleScroll}
            style={styles.container}
            refreshControl={refreshControl}
            scrollEventThrottle={250}
          >
            <UpcomingEventSlider />
            <>{shouldShow && <StickyEventHeader />}</>
            <VisibleFeedList />
          </ScrollView>
        )}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.GRAY400,
  },
  loaderContainer: {
    flex: 1,
    alignItems: 'center',
    marginTop: 50,
  },
  loadingText: {
    marginTop: 10,
  },
});

const mapStateToProps = state => ({
  errorMessage:
    getFeedErrorMessage(state) || getUpcomingEventsErrorMessage(state),
  isLoading: getUpcomingEventsIsLoading(state) || getFeedIsLoading(state),
});

export default connect(
  mapStateToProps,
  { fetchUpcomingEventsRequest, fetchFeedRequest }
)(HomePageScreen);
