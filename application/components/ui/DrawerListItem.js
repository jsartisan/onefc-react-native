import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { Text, StyleSheet, View } from 'react-native';
import { TouchableRipple } from 'react-native-paper';

import * as COLORS from '@constants/colors';

export default function DrawerListItem({ item }) {
  return (
    <TouchableRipple
      onPress={() => console.log('Pressed')}
      rippleColor={COLORS.GRAY900}
      style={[
        styles.drawerListItem,
        item.isActive && styles.drawerListItemActive,
      ]}
    >
      <View style={styles.drawerListItemContainer}>
        <Text
          style={[
            styles.drawerListItemText,
            item.isActive && styles.drawerListItemActiveText,
          ]}
        >
          {item.text}
        </Text>
        {item.isExternal && (
          <Icon
            style={styles.drawerListItemIcon}
            name="external-link"
            size={15}
            color={COLORS.WHITE}
          />
        )}
      </View>
    </TouchableRipple>
  );
}

const styles = StyleSheet.create({
  drawerListItem: {
    padding: 14,
  },
  drawerListItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  drawerListItemText: {
    color: COLORS.WHITE,
  },
  drawerListItemActive: {
    backgroundColor: COLORS.YELLOW,
  },
  drawerListItemActiveText: {
    color: COLORS.BLACK,
  },
  drawerListItemIcon: {
    marginLeft: 5,
  },
});
