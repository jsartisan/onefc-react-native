import { Provider } from 'react-redux';
import React, { Component } from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider as PaperProvider } from 'react-native-paper';

import init from '@utilities/init';
import StatusBar from '@components/ui/StatusBar';
import AppContainer from '@navigators/AppContainer';
import configureTheme from '@utilities/configureTheme';
import configureStore from '@utilities/configureStore';
import navigationService from '@utilities/navigationService';

const theme = configureTheme();
const persistantStore = configureStore();
const { store, persistor } = persistantStore;

init();

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <PaperProvider theme={theme}>
            <StatusBar />
            <AppContainer
              ref={(navigatorRef) => {
                navigationService.setTopLevelNavigator(navigatorRef);
              }}
            />
          </PaperProvider>
        </PersistGate>
      </Provider>
    );
  }
}
