import { WOLF_KILLER_ID, AT_HOUSE_ID } from "./functions/constants";

export const checkKeyCode = (event) =>
  event.keyCode >= 37 && event.keyCode <= 40 && event.keyCode ? true : false;

export const isWolfWin = (matrix) =>
  matrix.some((array) => array.some((element) => element === WOLF_KILLER_ID));

export const checkIsGameOver = (matrix) =>
  isRabbitWin(matrix) || isWolfWin(matrix);

export const isRabbitWin = (matrix) =>
  matrix.some((array) => array.some((element) => element === AT_HOUSE_ID));
