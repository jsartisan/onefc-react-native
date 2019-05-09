import React, { Component } from 'react';
import { Button, Caption } from 'react-native-paper';
import { StyleSheet, View, Text } from 'react-native';

class Retry extends Component {
  render() {
    const { message, onPress } = this.props;

    return (
      <View style={styles.container}>
        <Text style={styles.icon}>❗</Text>
        <Caption style={styles.text}>{message}</Caption>
        <View style={styles.retryBtnWrapper}>
          <Button
            icon="refresh"
            mode="text"
            style={styles.button}
            onPress={onPress}
          >
            Retry
          </Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  icon: {
    alignSelf: 'center',
    fontSize: 50,
    color: '#fff',
  },
  text: {
    marginTop: 15,
    textAlign: 'center',
    fontSize: 13,
  },
  retryBtnWrapper: {
    overflow: 'hidden',
    zIndex: 1,
  },
  button: {
    width: 100,
    alignSelf: 'center',
    borderRadius: 6,
    marginTop: 5,
  },
});

export default Retry;
