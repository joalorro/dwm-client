import Paper from 'paper';
import { useEffect, useRef } from 'react';
import draw1 from './draw1.js';

import './canvas.css';

export const Canvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    Paper.setup(canvas);
    draw1();
  }, []);

  return <canvas ref={canvasRef} id="canvas" resize="true" />;
};
