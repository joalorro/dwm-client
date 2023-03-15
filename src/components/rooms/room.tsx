import React from 'react';
import { useState } from 'react';
import { Header } from '../header/header';
import { useConnectRoom } from '../../hooks/useConnectRoom';
import { useChatRoom } from '../../hooks/useChatRoom';
import { Canvas } from '../canvas/canvas';
import { ChatRoom } from './chat-room';

import './room.css';

export function Room() {
  const [isConnected, setIsConnected] = useState<Boolean | null>(null);

  useConnectRoom(setIsConnected);
  useChatRoom(null);

  const handleNewMessage = () => {};

  let content;

  const chatRoomAndCanvas = (
    <div id="room-content">
      <Canvas />
      <ChatRoom />
    </div>
  );

  switch (isConnected) {
    case false:
      content = <>not connected</>;
      break;
    case true:
      content = <Canvas />;
      // content = chatRoomAndCanvas;
      break;
    default:
      content = <></>;
  }
  return (
    <>
      <Header />
      {content}
    </>
  );
}
