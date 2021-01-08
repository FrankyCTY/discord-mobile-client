import React from "react";
import { StyleSheet, View } from "react-native";
import TextBarIcon from "./app/components/TextBarIcon";

export default function App() {
  return (
    <View style={styles.container}>
      <TextBarIcon iconName="gift" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
