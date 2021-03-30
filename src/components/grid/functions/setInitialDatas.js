import {
  FENSE_ID,
  WOLF_ID,
  HOUSE_ID,
  RABBIT_ID,
} from "./constants";
import { isCellFree } from "./helperFunction";

const randomPosition = (matrix) => Math.floor(Math.random() * matrix.length);

function positionElements(count, id, matrix) {
  return [...Array(count)].map(() => positionElement(id, matrix));
}

function positionElement(id, matrix) {
  const [x, y] = getRandomFreeCell(matrix);
  matrix[x][y] = id;
}

function getRandomFreeCell(matrix) {
  const xy = [randomPosition(matrix), randomPosition(matrix)];
  return isCellFree(xy, matrix) ? xy : getRandomFreeCell(matrix);
}

function setElementsRandomPosition(matrix, elementsCount) {
  positionElements(elementsCount, FENSE_ID, matrix);
  positionElement(RABBIT_ID, matrix);
  positionElements(elementsCount, WOLF_ID, matrix);
  positionElement(HOUSE_ID, matrix);
  return matrix;
}

export function initialSetup(startMatrix) {
  const elementsCount = Math.floor(startMatrix.length / 2) + 1;
  return setElementsRandomPosition(startMatrix, elementsCount);
}

