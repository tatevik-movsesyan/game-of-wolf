import {
  RABBIT_ID,
  OCCUPIED_CELL,
  BORDER_TRANSFER,
  AT_HOUSE_ID,
} from "./constants";

import {
  isCellFree,
  findIndexOfValue,
  removeCoordinate,
  setNewCoordinate,
  getLegalMove,
} from "./helperFunction";

const resetRabbitsCoordinate = (newcoordinates, coordinates, matrix) => {
  removeCoordinate(coordinates, matrix);
  isCellFree(newcoordinates, matrix)?
    setNewCoordinate(newcoordinates, RABBIT_ID, matrix):
    setNewCoordinate(newcoordinates, AT_HOUSE_ID, matrix);
  return matrix;
};

function canRabbitMove(legalSteps, stepByKeyboard) {
  return legalSteps[stepByKeyboard] !== OCCUPIED_CELL;
}

export default function moveRabbitt(rabbitsDirection, matrix) {
  const coordinates = findIndexOfValue(RABBIT_ID)(matrix)[0];
  const legalSteps = getLegalMove(coordinates, matrix, BORDER_TRANSFER);
  const newCoordinate = canRabbitMove(legalSteps, rabbitsDirection)
    ? legalSteps[rabbitsDirection]
    : coordinates;
  return resetRabbitsCoordinate(newCoordinate, coordinates, matrix);
}
