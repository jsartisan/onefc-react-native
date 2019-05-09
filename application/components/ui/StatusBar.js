import React from "react";
import { Platform, StatusBar as RNStatusBar } from "react-native";

import { PRIMARY_DARK_COLOR } from "@constants/colors";

export const StatusBar = () => (
  <RNStatusBar
    barStyle={Platform.select({
      ios: "dark-content",
      android: "light-content"
    })}
    backgroundColor={PRIMARY_DARK_COLOR}
  />
);

export default StatusBar;
