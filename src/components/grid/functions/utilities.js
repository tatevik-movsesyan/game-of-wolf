import { X, Y, OCCUPIED_CELL, BORDER_TRANSFER } from "./constants";

import { isCellFree, isRabbit, checkHome } from "./helperFunction";

export function getAllSteps(item) {
  const step_up = [item[X] - 1, item[Y]];
  const step_down = [item[X] + 1, item[Y]];
  const step_left = [item[X], item[Y] - 1];
  const step_right = [item[X], item[Y] + 1];
  return [step_up, step_right, step_down, step_left];
}

export const filterByHomeAndFreeCell = (filterSteps, matrix) =>
  filterSteps.map((element) =>
    isCellFree(element, matrix) || checkHome(element, matrix)
      ? element
      : OCCUPIED_CELL
  );

export const filterStepsByRabbit = (steps, matrix) =>
  steps.filter(
    (element) => isCellFree(element, matrix) || isRabbit(element, matrix)
  );

export const filterStepsByPossibleCell = (steps, matrix, condition) =>
  condition === BORDER_TRANSFER
    ? filterByHomeAndFreeCell(steps, matrix)
    : filterStepsByRabbit(steps, matrix);

export const getBorderTransferCoordinates = (steps, matrix) =>
  steps.map((item) => getBorderTransferCoordinate(item, matrix));

export function getBorderTransferCoordinate(newcoordinates, matrix) {
  const [x, y] = newcoordinates;
  if (x < 0) {
    return [matrix.length - 1, y];
  } else if (y < 0) {
    return [x, matrix.length - 1];
  } else if (x >= matrix.length) {
    return [0, y];
  } else if (y >= matrix.length) {
    return [x, 0];
  }
  return [x, y];
}

export const filterStepsByBorder = (possibleSteps, position, matrix) =>
  possibleSteps.map((item) =>
    item[X] >= 0 &&
    item[Y] >= 0 &&
    item[X] < matrix.length &&
    item[Y] < matrix.length
      ? item
      : position
  );
