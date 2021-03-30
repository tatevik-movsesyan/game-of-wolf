import React, {useRef, useEffect } from "react";
import * as Styled from "./styled";
import drawGrid from "./functions/drawGrid";
import drawMatrixImg from "./functions/drawMatrixImg";


function Canvas(props) {
  const canvasRef = useRef();
  useEffect(() => {
    const context = canvasRef.current.getContext("2d");
    drawGrid(canvasRef.current, context, props.size);
    drawMatrixImg(context,props.matrix);
  }, [props.size,props.matrix]);

  return (
    <Styled.CanvasWrapper>
      <canvas style={{ border: "1px solid black" }} ref={canvasRef} />
    </Styled.CanvasWrapper>
  );
}

export default Canvas;
