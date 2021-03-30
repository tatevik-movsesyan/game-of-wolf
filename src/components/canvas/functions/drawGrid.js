const BOX = 50;
const X = 0;

function createLine(coordOne, index, ctx) {
  const coordTwo = index * BOX;
  ctx.moveTo(X, coordTwo);
  ctx.lineTo(coordOne, coordTwo);
  ctx.stroke();
  ctx.moveTo(coordTwo, X);
  ctx.lineTo(coordTwo, coordOne);
  ctx.stroke();
  ctx.rect(0, 0, coordOne, coordOne);
}

function createGrid(gridSize, cId, ctx) {
  const coordOne = gridSize * BOX;
  cId.width = coordOne;
  cId.height = coordOne;
  for (let index = 1; index <= gridSize; index++) {
    createLine(coordOne, index, ctx);
  }
}

export default function drawGrid(cId, ctx, size) {
  ctx.clearRect(0, 0, 450, 450);
  ctx.beginPath();
  createGrid(size, cId, ctx);
}
