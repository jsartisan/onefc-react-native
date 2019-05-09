import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import AppDrawerNavigator from './AppDrawerNavigator';

export default createAppContainer(
  createSwitchNavigator(
    {
      App: AppDrawerNavigator,
    },
    {
      initialRouteName: 'App',
    },
  ),
);
