import { Link } from 'react-router-dom';
import { RoomCard } from './room-card';
import styles from './room-list.module.css';

export const RoomList = () => {
  const rooms = [
    {
      roomNumber: 1,
    },
    {
      roomNumber: 2,
    },
    {
      roomNumber: 3,
    },
  ];

  const roomList = rooms.map(({ roomNumber }, index) => {
    const roomCardProps = {
      roomNumber,
      key: index,
    };
    return (
      <Link to={`/rooms/${roomNumber}`} className={styles['room-list__link']}>
        <RoomCard {...roomCardProps} />
      </Link>
    );
  });

  return (
    <div className={styles['room-list']}>
      <h1 className={`${styles['room-list__header']} center-contents`}>
        Select a room to join
      </h1>
      {roomList}
    </div>
  );
};
