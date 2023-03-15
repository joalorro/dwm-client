import React from 'react';
import { useState } from 'react';
import { Header } from '../header/header';
import { useConnectRoom } from '../../hooks/useConnectRoom';
import { useChatRoom } from '../../hooks/useChatRoom';
import { RoomContent } from './room-content';

import styles from './room.module.css';

function getContent(isConnected: boolean | null) {
  let content: JSX.Element;

  switch (isConnected) {
    case false:
      content = <div className="center-page-align">not connected</div>;
      break;
    case true:
      content = <RoomContent />;
      break;
    default:
      content = <></>;
  }

  return content;
}

export function Room() {
  const [isConnected, setIsConnected] = useState<boolean | null>(null);

  useConnectRoom(setIsConnected);
  useChatRoom(null);

  const handleNewMessage = () => {};
  const content = getContent(isConnected);
  return (
    <div id={styles.room}>
      <Header />
      {content}
    </div>
  );
}
