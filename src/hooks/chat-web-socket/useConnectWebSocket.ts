import { useEffect } from 'react';
import { ConnectWebSocketConfig } from '../../constants/interfaces';

/**
 * Hook that evaluates whether or not the client has successfully connected to the backend.
 * * If true, this hook will establish a websocket.
 * * If false, it will run a function to render a "Not Connected" page.
 *
 * Hook will run web socket clean-up after dismount
 */
export const useConnectWebSocket = ({
  isConnected,
  connectSocket,
  renderNotConnectedPage,
  socket,
}: ConnectWebSocketConfig) => {
  useEffect(() => {
    if (isConnected) connectSocket();
    else if (isConnected == false) renderNotConnectedPage();
    return () => {
      if (socket) socket.disconnect();
    };
  }, [isConnected]);
};
