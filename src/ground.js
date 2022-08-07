import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { GROUND_COLOR, GROUND_HEIGHT, DEBUG_MODE } from "./constants";

const styles = StyleSheet.create({
  container: {
    left: 0,
    right: 0,
    bottom: 0,
    height: GROUND_HEIGHT,
    backgroundColor: GROUND_COLOR,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
  },
  debugger: {
    backgroundColor: "white",
    padding: 2,
  },
});

function ground() {
  return (
    <View style={styles.container}>
      {DEBUG_MODE && (
        <View style={[styles.debugger]}>
          <Text>
            {JSON.stringify({
              bottom: 0,
              height: GROUND_HEIGHT,
            })}
          </Text>
        </View>
      )}
    </View>
  );
}

export default ground;
