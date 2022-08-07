import React from "react";
import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

function sky() {
  return (
    <View style={styles.container}>
      <Text>sky</Text>
    </View>
  );
}

export default sky;
