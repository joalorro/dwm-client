import Paper from 'paper';
import * as paper from 'paper';
import { SendPaintEventData } from '../../constants/interfaces';

const enableDrawing = ({ sendPaintEventData }: DrawingConfigOpts) => {
  let myPath = new Paper.Path();

  const colorBlack = new paper.Color(0, 0, 0);

  Paper.view.onMouseDown = () => {
    myPath.strokeColor = colorBlack;
    myPath.strokeWidth = 3;
  };

  Paper.view.onMouseDrag = (event: paper.MouseEvent) => {
    myPath.add(event.point);
    sendPaintEventData({ point: event.point });
  };

  Paper.view.onMouseUp = (event: paper.MouseEvent) => {
    myPath = new Paper.Path();
  };

  (Paper.view as any).draw();
};

const DrawingConfig = { enableDrawing };

export interface DrawingConfigOpts {
  sendPaintEventData: SendPaintEventData;
}

export default DrawingConfig;
