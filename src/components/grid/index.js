import React, { useEffect, useState } from "react";
import * as Styled from "./styled";
import Canvas from "../canvas/index";
import moveObjects from "./functions/moveObjects";
import { initialSetup } from "./functions/setInitialDatas";
import { checkKeyCode, checkIsGameOver } from "./utilities";
import {
  getMatrixWithNull,
  compose,
  getStepsKeyCode,
} from "./functions/helperFunction";

function Grid() {
  const gridSize = [5, 7, 9];
  const [size, setsize] = useState(5);
  const [matrix, setMatrix] = useState(getMatrixWithNull(size));
  const [isGameOver, setIsGameOver] = useState(false);

  const direction = (event) => {
    window.removeEventListener("keydown", direction);
  
    if (checkKeyCode(event) && !isGameOver) {
      const rabbitsDirection = getStepsKeyCode(event);
      const newMatrix = moveObjects(rabbitsDirection, matrix);
      setIsGameOver(checkIsGameOver(matrix));
      setMatrix(() => {
        return [...newMatrix];
      });
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", direction);
    return () => {
      window.removeEventListener("keydown", direction);
    };
  }, [matrix]);

  const startGame = () => {
    setIsGameOver(false);
    const randomMatrix = compose(initialSetup, getMatrixWithNull);
    setMatrix(randomMatrix(size));
  };

  const onSelectedChange = (e) => {
    const newValue = parseInt(e.target.value, 10);
    setMatrix(getMatrixWithNull(newValue));
    setsize(newValue);
  };

  return (
    <Styled.GridsWrapper>
      <Styled.ButtonWrapper>
        <label>Choose size of grid:</label>
        <select onChange={(e) => onSelectedChange(e)}>
          {gridSize.map((current, index) => (
            <option value={current} key={index}>
              {current}
            </option>
          ))}
        </select>
        <button onClick={() => startGame()}>New Game</button>
      </Styled.ButtonWrapper>
      <Canvas size={size} matrix={matrix} />
    </Styled.GridsWrapper>
  );
}

export default Grid;
