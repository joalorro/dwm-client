import React from 'react';
import { useState } from 'react';
import { Header } from '../header/header';
import { useConnectRoom } from '../../hooks/useConnectRoom';
import { useChatRoom } from '../../hooks/useChatRoom';
import { Canvas } from '../canvas/canvas';
import { ChatRoom } from './chat-room';

import styles from './room.module.css';

export function Room() {
  const [isConnected, setIsConnected] = useState<Boolean | null>(null);

  useConnectRoom(setIsConnected);
  useChatRoom(null);

  const handleNewMessage = () => {};

  let content;

  const roomContent = (
    <div id={styles['room-content']}>
      <Canvas />
      <ChatRoom />
    </div>
  );

  switch (isConnected) {
    case false:
      content = <div className="center-page-align">not connected</div>;
      break;
    case true:
      content = roomContent;
      break;
    default:
      content = <></>;
  }
  return (
    <div id={styles.room}>
      <Header />
      {content}
    </div>
  );
}
