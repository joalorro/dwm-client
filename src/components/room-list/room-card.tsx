import styles from './room-list.module.css';

export const RoomCard = ({ roomNumber }: RoomCardProps) => {
  const roomListStyle = styles[`room-list__item-${roomNumber}`];
  return (
    <div className={`${styles['room-card']} ${roomListStyle} center-contents`}>
      <section>{roomNumber}</section>
    </div>
  );
};

export interface RoomCardProps {
  roomNumber: number;
}
