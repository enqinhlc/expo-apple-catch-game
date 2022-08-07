import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import Apple from "./apple";
import Basket from "./basket";
import {
  APPLE_SIZE,
  APPLE_START_Y,
  CLOUD_SIZE,
  SCOREBOARD_Y,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
} from "./constants";
import Ground from "./ground";
import Sky from "./sky";

const styles = StyleSheet.create({
  moveButton: {
    width: SCREEN_WIDTH / 2,
    backgroundColor: "transparent",
    height: SCREEN_HEIGHT,
    position: "absolute",
    zIndex: 100,
  },
  scoreBoard: {
    position: "absolute",
    top: SCOREBOARD_Y,
    alignItems: "center",
    justifyContent: "center",
    left: 0,
    right: 0,
    zIndex: 200,
  },
  scoreText: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
  },
  pauseButtonContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});

function gamescreen() {
  // elmanın ekrandaki dikey konumu, aşağıdan yukarıya doğru hesaplanacak. 0 = en alt
  const [appleBottom, setAppleBottom] = React.useState(
    SCREEN_HEIGHT - APPLE_START_Y - APPLE_SIZE
  );

  // sepetin yataydaki başlangıç pixeli, 0 = ekranın solunda
  const [basketLeft, setBasketLeft] = React.useState(0);
  // elmanın yataydaki başlangıç pixeli, 0 = ekranın solunda
  const [appleLeft, setAppleLeft] = React.useState(150);
  // elma yakalanamazsa hesaplanacak
  const [fail, setFail] = React.useState(0);
  // elma yakalanırsa hesaplanacak
  const [score, setScore] = React.useState(0);
  // oyun devam durumu
  const [gamePaused, setGamePaused] = React.useState(false);

  return (
    <View style={{ flex: 1 }}>
      <StatusBar hidden={true} />
      <Sky />
      <Apple bottom={appleBottom} left={appleLeft} />
      <Basket left={basketLeft} />
      <Ground />

      <TouchableOpacity
        onPress={() => {
          // logic move right
        }}
        style={styles.moveButton}
      >
        {null}
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          // logic move right
        }}
        style={[styles.moveButton, { right: 0 }]}
      >
        {null}
      </TouchableOpacity>

      <View style={styles.scoreBoard}>
        <Text style={styles.scoreText}>
          SCORE: {score}/{fail + score}
        </Text>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => setGamePaused(!gamePaused)}
          style={styles.pauseButtonContainer}
        >
          <Text>{!gamePaused ? "Pause" : "Continue"} Game</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default gamescreen;
