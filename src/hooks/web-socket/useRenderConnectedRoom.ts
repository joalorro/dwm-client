import { useEffect } from 'react';
import { ConnectedRoomProps } from '../../components/rooms/connected-room';
import { RenderConnectedRoomConfig } from '../../constants/interfaces';

/**
 * Hook evaluates for the existence of a web socket object and the needed
 * props to render a "connected" room
 */
export const useRenderConnectedRoom = ({
  socket,
  socketConfig,
  renderConnectedRoom,
}: RenderConnectedRoomConfig) => {
  useEffect(() => {
    if (socket && socketConfig) {
      const connectedRoomProps: ConnectedRoomProps = {
        sendChatMessage: socketConfig.sendChatMessage,
        setupAppendMessageListener: socketConfig.setupAppendMessageListener,
        sendPaintEventData: socketConfig.sendPaintEventData,
      };
      renderConnectedRoom(connectedRoomProps);
    }
  }, [socket]);
};
