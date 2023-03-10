import { Room } from '../components/rooms/room';
import { Root } from './root/root';

export const routes = [
  {
    path: '/',
    element: <Root />,
  },
  {
    path: '/rooms/:roomId',
    element: <Room />,
  },
];
