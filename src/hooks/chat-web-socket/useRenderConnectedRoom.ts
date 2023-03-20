import { useEffect } from 'react';
import { ConnectedRoomProps } from '../../components/rooms/connected-room';
import { RenderConnectedRoomConfig } from '../../constants/interfaces';

export const useRenderConnectedRoom = ({
  socket,
  chatRoomConfig,
  renderConnectedRoom,
}: RenderConnectedRoomConfig) => {
  useEffect(() => {
    if (socket && chatRoomConfig) {
      const connectedRoomProps: ConnectedRoomProps = {
        sendChatMessage: chatRoomConfig.sendChatMessage,
        setupAppendMessageListener: chatRoomConfig.setupAppendMessageListener,
      };
      renderConnectedRoom(connectedRoomProps);
    }
  }, [socket]);
};
