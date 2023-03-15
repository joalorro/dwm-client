import React from 'react';
import { Canvas } from '../canvas/canvas';
import { ChatRoom } from './chat-room';
import styles from './room-content.module.css';

export const RoomContent = () => (
  <div id={styles['room-content']}>
    <Canvas />
    <ChatRoom />
  </div>
);
