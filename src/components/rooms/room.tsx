import { ReactElement, useEffect } from 'react';
import { useState } from 'react';
import { Header } from '../header/header';
import { useConnectRoom } from '../../hooks/useConnectRoom';
import { SetupChatroomConfig } from '../../constants/interfaces';
import { ConnectedRoom, ConnectedRoomProps } from './connected-room';
import { Socket } from 'socket.io-client';
import { setupChatroom } from '../../hooks/chat-web-socket/setupChatroom';
import { useConnectWebSocket } from '../../hooks/chat-web-socket/useConnectWebSocket';
import { NotConnected } from './not-connected';
import { useRenderConnectedRoom } from '../../hooks/chat-web-socket/useRenderConnectedRoom';

import styles from './room.module.css';

/**
 * Component that handles connecting to backend and setting up the chat and drawing websockets
 */
export function Room() {
  const [isConnected, setIsConnected] = useState<boolean | null>(null);
  const [roomContent, setRoomContent] = useState<ReactElement>(<>loading</>);
  const [socket, setSocket] = useState<Socket | null>(null);
  const [chatRoomConfig, setChatRoomConfig] =
    useState<SetupChatroomConfig | null>(null);

  const renderNotConnectedPage = () => setRoomContent(<NotConnected />);
  const connectSocket = () => setChatRoomConfig(setupChatroom());
  const renderConnectedRoom = (connectedRoomProps: ConnectedRoomProps) =>
    setRoomContent(<ConnectedRoom {...connectedRoomProps} />);

  // connect to backend server
  useConnectRoom(setIsConnected);
  // if client can connect, connect to chat room web socket
  useConnectWebSocket({
    isConnected,
    connectSocket,
    renderNotConnectedPage,
    socket,
  });
  // once connected to chat room web socket, attach socket to state
  useEffect(() => {
    if (chatRoomConfig) setSocket(chatRoomConfig.socket);
  }, [chatRoomConfig]);
  // after the socket and chatRoomConfig are attached to state,
  // render the connected room
  useRenderConnectedRoom({ socket, chatRoomConfig, renderConnectedRoom });

  return (
    <div id={styles.room}>
      <Header />
      {roomContent}
    </div>
  );
}
