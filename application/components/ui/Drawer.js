import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import { Button, TouchableRipple } from 'react-native-paper';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

import * as COLORS from '@constants/colors';
import DrawerListItem from './DrawerListItem';
import DrawerFooterListItem from './DrawerFooterListItem';

const primaryDrawerItems = [
  { text: 'Home', isActive: true },
  { text: 'World Championships' },
  { text: 'Athletes' },
  { text: 'Events' },
];

const secondaryDrawerItems = [{ text: 'ONE e-store', isExternal: true }];

const footerDrawerItems = [
  { text: 'ONE Global Rule Set' },
  { text: 'Privacy Policy' },
  { text: 'Terms & Conditions' },
];

export default function Drawer() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <TouchableOpacity
          onPress={() => console.log('Pressed')}
          style={styles.loginBtn}
        >
          <Icon name="user" size={25} color={COLORS.YELLOW} />
          <Text style={styles.loginBtnText}>Sign In</Text>
        </TouchableOpacity>

        <View style={styles.primaryMenu}>
          {primaryDrawerItems.map(item => (
            <DrawerListItem item={item} />
          ))}
        </View>

        <View style={styles.secondaryMenu}>
          {secondaryDrawerItems.map(item => (
            <DrawerListItem item={item} />
          ))}
        </View>
      </View>

      <View style={styles.footerMenu}>
        {footerDrawerItems.map(item => (
          <DrawerFooterListItem item={item} />
        ))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.BLACK,
  },
  wrapper: {
    flex: 1,
  },
  title: {
    color: COLORS.WHITE,
  },
  loginBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  loginBtnIcon: {},
  loginBtnText: {
    marginLeft: 10,
    color: COLORS.WHITE,
  },
  primaryMenu: {
    marginTop: 15,
  },
  footerMenu: {},
  secondaryMenu: {
    borderTopWidth: 1,
    borderTopColor: 'rgba(255,255,255, 0.1)',
  },
});
