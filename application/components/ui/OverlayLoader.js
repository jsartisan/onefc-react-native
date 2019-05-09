import React, { Component } from 'react';
import { Modal, Text, TouchableHighlight, View, StyleSheet, ActivityIndicator } from 'react-native';

class OverlayLoader extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { visible } = this.props;

    return (
      <Modal
        animationType="fade"
        transparent={true}
        visible={visible}
        onRequestClose={() => {}}
      >
        <View style={styles.modal}>
          <View style={styles.container}>
            <ActivityIndicator size="large" />
            <Text style={styles.text}>Loading</Text>
          </View>  
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  modal: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  container: {
    alignSelf: 'center',
    backgroundColor: 'white',
    borderRadius: 5,
    width: '80%',
    paddingVertical: 20,
    alignItems: 'center',
  },
  text: {
    marginTop: 10,
  }
});

export default OverlayLoader;