import React from 'react';
import { DefaultTheme } from 'react-native-paper';

import { PRIMARY_COLOR } from '../constants/colors';

export const configureTheme = () => ({
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: PRIMARY_COLOR,
  },
});

export default configureTheme;
