import Paper from 'paper';

const enableDrawing = () => {
  let myPath = new Paper.Path();

  Paper.view.onMouseDown = (event) => {
    myPath.strokeColor = 'black';
    myPath.strokeWidth = 3;
  };

  Paper.view.onMouseDrag = (event) => {
    myPath.add(event.point);
  };

  Paper.view.onMouseUp = (event) => {
    myPath = new Paper.Path();
  };

  Paper.view.draw();
};

const DrawingConfig = { enableDrawing };

export default DrawingConfig;
