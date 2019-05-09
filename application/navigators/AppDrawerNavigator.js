import React from 'react';
import { createDrawerNavigator } from 'react-navigation';

import Drawer from '@components/ui/Drawer';
import FeedStack from '@navigators/FeedStackNavigator';

const AppTabNavigator = createDrawerNavigator(
  {
    MyFeed: {
      screen: FeedStack,
    },
  },
  {
    initialRouteName: 'MyFeed',
    contentComponent: props => <Drawer {...props} />,
  },
);

export default AppTabNavigator;
