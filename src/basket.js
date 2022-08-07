import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, View, Text } from "react-native";
import {
  BASKET_COLOR,
  BASKET_SIZE,
  DEBUG_MODE,
  GROUND_HEIGHT,
  GROUND_BASKET_GAP,
} from "./constants";
const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: GROUND_HEIGHT + GROUND_BASKET_GAP,
    borderColor: "green",
    borderWidth: DEBUG_MODE ? 1 : 0,
  },
  debugger: {
    position: "absolute",
    backgroundColor: "white",
    padding: 2,
  },
});

function basket({ left }) {
  return (
    <>
      {DEBUG_MODE && (
        <View
          style={[
            styles.debugger,
            {
              bottom: GROUND_HEIGHT + GROUND_BASKET_GAP + BASKET_SIZE + 10,
              left: left,
            },
          ]}
        >
          <Text>
            {JSON.stringify({
              bottom: GROUND_HEIGHT + GROUND_BASKET_GAP,
              left,
            })}
          </Text>
        </View>
      )}
      <View style={[styles.container, { left }]}>
        <FontAwesome
          name="shopping-basket"
          size={BASKET_SIZE}
          color={BASKET_COLOR}
        />
      </View>
    </>
  );
}

export default basket;
