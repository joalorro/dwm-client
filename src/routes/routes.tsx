import { RoomList } from '../components/room-list/room-list';
import { Room } from '../components/rooms/room';
import { Root } from './root/root';

export const routes = [
  {
    path: '/',
    element: <Root />,
  },
  {
    path: '/rooms',
    element: <RoomList />,
  },
  {
    path: '/rooms/:roomId',
    element: <Room />,
  },
];
