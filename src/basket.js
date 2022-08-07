import React from "react";
import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

function basket() {
  return (
    <View style={styles.container}>
      <Text>basket</Text>
    </View>
  );
}

export default basket;
