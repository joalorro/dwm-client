import Paper from 'paper';
import { useEffect, useRef } from 'react';
import draw1 from './draw1.js';

export const Canvas = (props) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    Paper.setup(canvas);
    draw1();
  }, []);

  return <canvas ref={canvasRef} {...props} id="canvas" resize="true" />;
};
