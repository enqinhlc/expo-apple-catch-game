import React from "react";
import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

function ground() {
  return (
    <View style={styles.container}>
      <Text>ground</Text>
    </View>
  );
}

export default ground;
