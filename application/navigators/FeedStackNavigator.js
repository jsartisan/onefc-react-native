import { createStackNavigator } from 'react-navigation';

import HomePageScreen from '@screens/HomePageScreen';

const ChatStack = createStackNavigator({
  Home: HomePageScreen,
});

export default ChatStack;
