import { FontAwesome5 } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { APPLE_COLOR, APPLE_SIZE, DEBUG_MODE } from "./constants";

const styles = StyleSheet.create({
  container: {
    width: APPLE_SIZE,
    height: APPLE_SIZE,
    position: "absolute",
    borderWidth: DEBUG_MODE ? 1 : 0,
    borderColor: "green",
  },
  debugger: {
    position: "absolute",
    backgroundColor: "white",
    padding: 2,
  },
});

function apple({ bottom, left }) {
  return (
    <>
      {DEBUG_MODE && (
        <View
          style={[
            styles.debugger,
            { bottom: bottom + APPLE_SIZE + 10, left: left },
          ]}
        >
          <Text>{JSON.stringify({ bottom, left })}</Text>
        </View>
      )}
      <View style={[styles.container, { bottom, left }]}>
        <FontAwesome5 name="apple-alt" size={APPLE_SIZE} color={APPLE_COLOR} />
      </View>
    </>
  );
}

export default apple;
