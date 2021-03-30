import {
  FREE_CELL,
  HOUSE_ID,
  RABBIT_ID,
  X,
  Y,
  BORDER_TRANSFER,
  TO_LEFT,
  TO_UP,
  TO_RIGHT,
  TO_DOWN,
} from "./constants";

import {
  getAllSteps,
  filterStepsByPossibleCell,
  getBorderTransferCoordinates,
  filterStepsByBorder,
} from "./utilities";

export const getMatrixWithNull = (size) => {
  return [...Array(size)].map(() => Array(size).fill(0));
};

export const checkCellCOntents = (objectID) => (xy, matrix) =>
  matrix[xy[X]][xy[Y]] === objectID;

export const isCellFree = checkCellCOntents(FREE_CELL);

export const checkHome = checkCellCOntents(HOUSE_ID);

export const isRabbit = checkCellCOntents(RABBIT_ID);

export const findIndexOfValue = (value) => (matrix) => {
  const indexes = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      if (matrix[i][j] === value) {
        indexes.push([i, j]);
      }
    }
  }
  return indexes;
};

export const removeCoordinate = (xy, matrix) => {
  const [x, y] = xy;
  matrix[x][y] = FREE_CELL;
};

export const setNewCoordinate = (xy, id, matrix) => {
  const [x, y] = xy;
  matrix[x][y] = id;
};

export const shortDistancesIndex = (distances) =>
  distances.reduce((minValue, value, index) => {
    if (value < distances[minValue]) {
      return index;
    }
    return minValue;
  }, 0);

export const getStepsKeyCode = (event) =>
  [TO_UP, TO_RIGHT, TO_DOWN, TO_LEFT].indexOf(event.keyCode);

export const getLegalMove = (position, matrix, condition) => {
  const possibleSteps = getAllSteps(position);
  const filterSteps =
    condition === BORDER_TRANSFER
      ? getBorderTransferCoordinates(possibleSteps, matrix)
      : filterStepsByBorder(possibleSteps, position, matrix);
  return filterStepsByPossibleCell(filterSteps, matrix, condition);
};

export const compose = (...funcs) => {
  if (funcs.length === 0) {
    return (arg) => arg;
  }
  if (funcs.length === 1) {
    return funcs[0];
  }
  const lastFn = funcs[funcs.length - 1];
  const withoutLastFn = funcs.slice(0, funcs.length - 1);
  return (...args) => compose(...withoutLastFn)(lastFn(...args));
};
