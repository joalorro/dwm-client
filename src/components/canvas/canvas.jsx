import Paper from 'paper';
import { useEffect, useRef } from 'react';
import DrawingConfig from './drawingConfig.ts';

import './canvas.css';

export const Canvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    Paper.setup(canvas);
    DrawingConfig.enableDrawing();
  }, []);

  return <canvas ref={canvasRef} id="canvas" resize="true" />;
};
