import { Dimensions } from "react-native";

export const DEBUG_MODE = true; // geliştirme modu
export const TIME_LOOP = 1000 / 60; //60 fps per seconds
export const GROUND_GRAVITY = 5; // elmanın döngü içinde aşağı kaç piksel hareket edeceğini belirtir
export const GROUND_BASKET_GAP = 10; // sepet ile zemin arasındaki boşluk
export const BASKET_MOVE_PX = 20; // yönlendirme yapılırken sepetin sağa sola her harekette kaç piksel gideceğini belirtir
export const APPLE_START_Y = 150; // elmanın ekran üzerinden kaç piksel aşağıdan düşeceğini belirtir
export const SCOREBOARD_Y = 70; // skor bilgisinin ekran üzerinden kaç piksel aşağıda olacağını belirtir
export const CLOUD_SIZE = 100; // gökyüzündeki bulutların büyüklüğünü belirtir
export const APPLE_SIZE = 50; // elmanın büyüklüğünü belirtir
export const GROUND_HEIGHT = 100; // zeminin yüksekliğini belirtir
export const BASKET_SIZE = 100; // sepetin boyutu
export const CLOUD_ROW1_TOP = 20; // 1. sıra bulutların yukarıdan kaç piksel aşağıda olacağını belirtir
export const CLOUD_ROW2_TOP = 50; // 2. sıra bulutların yukarıdan kaç piksel aşağıda olacağını belirtir

export const GROUND_COLOR = "#1ed445"; // zemin rengi
export const APPLE_COLOR = "#db310f"; // elma rengi
export const SKY_COLOR = "#95f5f3"; // gökyüzü / arkaplan rengi
export const BASKET_COLOR = "#eda51f"; // sepet rengi
export const CLOUD_COLOR = "#f7f0e4"; // bulut rengi

// ekran genişliği ve yüksekliği
export const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } =
  Dimensions.get("window");
