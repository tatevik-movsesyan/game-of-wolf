import houseI from "../img/house.png";
import wolfI from "../img/wolf.png";
import rabbitI from "../img/rabbit.png";
import fenceI from "../img/fence.png";
import wolfKillerI from "../img/wolfKiller.png";
import atHouseI from "../img/atHouse.png";

const [houseImg, wolfImg, rabbitImg, fenceImg, wolfKillerImg, atHouseImg] = [
  new Image(),
  new Image(),
  new Image(),
  new Image(),
  new Image(),
  new Image(),
]; 

[
  houseImg.src,
  wolfImg.src,
  rabbitImg.src,
  fenceImg.src,
  wolfKillerImg.src,
  atHouseImg.src,
] = [houseI, wolfI, rabbitI, fenceI, wolfKillerI, atHouseI];

const BOX = 50;
const Y = 1;


function getImgById(id) {
  return [fenceImg, wolfImg, houseImg, rabbitImg, wolfKillerImg, atHouseImg][
    id - Y
  ];
}

function drawElement(id, coordinataX, coordinataY, ctx) {
  ctx.drawImage(getImgById(id), coordinataX * BOX, coordinataY * BOX);
}

export default function drawMatrixImg(ctx,matrix) {
    matrix.forEach((stroka, x) =>
    stroka.forEach((id, y) => id !== 0 && drawElement(id, y, x, ctx))
  );
}

