import moveRabbitt from "./moveRabbit";
import moveWolf from "./moveWolf";

export default function moveObjects(rabbitsDirection, initialMatrix) {
  const matrix = moveRabbitt(rabbitsDirection, initialMatrix);
  moveWolf(matrix);
  return matrix;
}
