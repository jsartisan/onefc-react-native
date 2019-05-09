import React from 'react';
import { View, StyleSheet } from "react-native";

export const Container = (props) => (
  <View style={styles.container}>
    {props.children}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default Container;