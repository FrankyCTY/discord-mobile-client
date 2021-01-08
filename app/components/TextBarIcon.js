import React from "react";
import { View, StyleSheet } from "react-native";
import colors from "../config/colors";
import ExpoIcon from "./common/ExpoIcon";

export default function TextBarIcon({ size = 50, iconName, iconType }) {
  return (
    <View
      style={[
        { width: size, height: size, borderRadius: size / 2 },
        styles.container,
      ]}
    >
      <ExpoIcon
        name={iconName}
        size={size * 0.65}
        color={colors.dark[100]}
        iconType={iconType}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.dark[700],
    justifyContent: "center",
    alignItems: "center",
  },
});
