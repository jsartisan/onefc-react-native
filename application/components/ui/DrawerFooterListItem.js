import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';

import * as COLORS from '@constants/colors';

export default function DrawerFooterListItem({ item }) {
  return (
    <TouchableOpacity
      onPress={() => console.log('Pressed')}
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
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  drawerListItem: {
    padding: 10,
    paddingHorizontal: 14,
  },
  drawerListItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  drawerListItemText: {
    color: COLORS.YELLOW,
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
