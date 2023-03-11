import React from 'react';
import { useState } from 'react';
import { Canvas } from '../canvas';
import { Header } from '../header/header';
import { useConnectRoom } from '../../hooks/useConnectRoom';
import { useChatRoom } from '../../hooks/useChatRoom';

export function Room() {
  const [isConnected, setIsConnected] = useState<Boolean | null>(null);

  useConnectRoom(setIsConnected);
  useChatRoom(null);

  const handleNewMessage = () => {};

  let content;
  switch (isConnected) {
    case false:
      content = <>not connected</>;
      break;
    case true:
      content = <Canvas />;
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
