import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  CLOUD_COLOR,
  CLOUD_ROW1_TOP,
  CLOUD_ROW2_TOP,
  CLOUD_SIZE,
  SCREEN_WIDTH,
  SKY_COLOR,
} from "./constants";
import { Entypo } from "@expo/vector-icons";

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: SKY_COLOR,
  },
});

function sky() {
  return (
    <View style={styles.container}>
      <View
        style={{
          opacity: 0.5,
          width: SCREEN_WIDTH,
          marginLeft: -CLOUD_SIZE * 0.2,
        }}
      >
        <Entypo
          style={{ left: 10, top: CLOUD_ROW1_TOP, position: "absolute" }}
          name="cloud"
          size={CLOUD_SIZE}
          color={CLOUD_COLOR}
        />
        <Entypo
          style={{
            left: SCREEN_WIDTH / 2 - CLOUD_SIZE / 2,
            top: CLOUD_ROW1_TOP,
            position: "absolute",
          }}
          name="cloud"
          size={CLOUD_SIZE}
          color={CLOUD_COLOR}
        />
        <Entypo
          style={{ right: 0, top: CLOUD_ROW1_TOP, position: "absolute" }}
          name="cloud"
          size={CLOUD_SIZE}
          color={CLOUD_COLOR}
        />
      </View>
      <View style={{ width: SCREEN_WIDTH, marginLeft: CLOUD_SIZE * 0.1 }}>
        <Entypo
          style={{ left: 10, top: CLOUD_ROW2_TOP, position: "absolute" }}
          name="cloud"
          size={CLOUD_SIZE}
          color={CLOUD_COLOR}
        />
        <Entypo
          style={{
            left: SCREEN_WIDTH / 2 - CLOUD_SIZE / 2,
            top: CLOUD_ROW2_TOP,
            position: "absolute",
          }}
          name="cloud"
          size={CLOUD_SIZE}
          color={CLOUD_COLOR}
        />
        <Entypo
          style={{ right: 0, top: CLOUD_ROW2_TOP, position: "absolute" }}
          name="cloud"
          size={CLOUD_SIZE}
          color={CLOUD_COLOR}
        />
      </View>
    </View>
  );
}

export default sky;
