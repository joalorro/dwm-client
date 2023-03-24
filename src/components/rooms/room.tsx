import { ChangeEvent, ReactElement, useEffect } from 'react';
import { useState } from 'react';
import { Header } from '../header/header';
import { useConnectRoom } from '../../hooks/useConnectRoom';
import { SetupSocketConfig } from '../../constants/interfaces';
import { ConnectedRoom, ConnectedRoomProps } from './connected-room';
import { Socket } from 'socket.io-client';
import { useConnectWebSocket } from '../../hooks/web-socket/useConnectWebSocket';
import { NotConnected } from './not-connected';
import { useRenderConnectedRoom } from '../../hooks/web-socket/useRenderConnectedRoom';
import { setupWebSocket } from '../../hooks/web-socket/setupWebSocket';

import styles from './room.module.css';
import {
  UsernameInput,
  UsernameInputProps,
} from './username-input/username-input';

/**
 * Component that handles connecting to backend and setting up the chat and drawing websockets
 */
export function Room() {
  const [username, setUsername] = useState<string>('');
  const handleUsernameSubmit = (submittedUsername: string) => () => {
    setUsername(submittedUsername);
  };
  const usernameInputProps: UsernameInputProps = {
    handleUsernameSubmit,
  };

  const [isConnected, setIsConnected] = useState<boolean | null>(null);
  const [roomContent, setRoomContent] = useState<ReactElement>(
    <UsernameInput {...usernameInputProps} />,
  );
  const [socket, setSocket] = useState<Socket | null>(null);
  const [socketConfig, setSocketConfig] = useState<SetupSocketConfig | null>(
    null,
  );
  const renderNotConnectedPage = () => setRoomContent(<NotConnected />);
  const renderConnectedRoom = (connectedRoomProps: ConnectedRoomProps) =>
    setRoomContent(<ConnectedRoom {...connectedRoomProps} />);
  const connectSocket = () => setSocketConfig(setupWebSocket());

  // connect to backend server
  useConnectRoom(setIsConnected, username);
  // if client can connect, connect to chat room web socket
  useConnectWebSocket({
    isConnected,
    connectSocket,
    renderNotConnectedPage,
    username,
    socket,
  });
  // once connected to chat room web socket, attach socket object to state
  useEffect(() => {
    if (socketConfig) setSocket(socketConfig.socket);
  }, [socketConfig]);
  // after the socket and socketConfig are attached to state,
  // render the connected room
  useRenderConnectedRoom({ socket, socketConfig, renderConnectedRoom });

  return (
    <div id={styles.room}>
      <Header />
      {roomContent}
    </div>
  );
}
