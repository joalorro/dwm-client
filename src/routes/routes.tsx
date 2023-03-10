import { Canvas } from '../components/canvas';
import { Root } from './root/root';

export const routes = [
  {
    path: '/',
    element: <Root />,
  },
  {
    path: '/rooms/:roomId',
    element: <Canvas />,
  },
];
