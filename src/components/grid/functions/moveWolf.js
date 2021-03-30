import { RABBIT_ID, WOLF_ID, WOLF_KILLER_ID, X, Y } from "./constants";
import {
  findIndexOfValue,
  removeCoordinate,
  setNewCoordinate,
  getLegalMove,
  shortDistancesIndex,
  isCellFree,
} from "./helperFunction";

function getNewWolfsCoordinates(distances, possibleWay) {
  return possibleWay[shortDistancesIndex(distances)];
}

const calcDistance = (a) => (b) =>
  Math.sqrt((a[X] - b[X]) ** 2 + (a[Y] - b[Y]) ** 2);

function getShortcutWay(possibleWays, rabbitsCoordinate) {
  const distances = possibleWays.map(calcDistance(rabbitsCoordinate));
  return getNewWolfsCoordinates(distances, possibleWays);
}

const resetWolfsCoordinate = (newcoordinates, coordinates, matrix) => {
  removeCoordinate(coordinates, matrix);
  isCellFree(newcoordinates, matrix)
    ? setNewCoordinate(newcoordinates, WOLF_ID, matrix)
    : setNewCoordinate(newcoordinates, WOLF_KILLER_ID, matrix);
  return matrix;
};

function getMove(storage, rabbitsCoordinate, matrix) {
  return storage.map((item) => {
    const newCoord = getShortcutWay(
      getLegalMove(item, matrix, "border"),
      rabbitsCoordinate
    );
    return resetWolfsCoordinate(newCoord, item, matrix);
  });
}

export default function moveWolf(matrix) {
  const rabCoordinate = findIndexOfValue(RABBIT_ID)(matrix)[0];
  const wolfStorage = findIndexOfValue(WOLF_ID)(matrix);
  return rabCoordinate === undefined
    ? matrix
    : getMove(wolfStorage, rabCoordinate, matrix);
}
