import React from "react";
import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

function apple() {
  return (
    <View style={styles.container}>
      <Text>apple</Text>
    </View>
  );
}

export default apple;
