import Paper from 'paper';
import { useEffect, useRef } from 'react';
import DrawingConfig from './drawingConfig';
import { SendPaintEventData } from '../../constants/interfaces';

import styles from './canvas.module.css';

// TODO: fix types
export const Canvas = ({ sendPaintEventData }: CanvasProps) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    Paper.setup(canvas as unknown as HTMLCanvasElement);
    DrawingConfig.enableDrawing({ sendPaintEventData });
  }, []);

  return <canvas ref={canvasRef} id={styles.canvas} /* resize="true" */ />;
};

export interface CanvasProps {
  sendPaintEventData: SendPaintEventData;
}
