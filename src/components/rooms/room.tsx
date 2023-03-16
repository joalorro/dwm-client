import React, { ChangeEvent, ChangeEventHandler } from 'react';
import { useState } from 'react';
import { Header } from '../header/header';
import { useConnectRoom } from '../../hooks/useConnectRoom';

import styles from './room.module.css';
import { ChatRoomProps } from './chat-room';
import {
  AppendChatMessage,
  ChatMessageData,
  SetupChatroomConfig,
} from '../../constants/interfaces';
import { ConnectedRoom } from './connected-room';
import { io } from 'socket.io-client';
import { setupChatroom } from '../../hooks/setupChatroom';

export function Room() {
  const [isConnected, setIsConnected] = useState<boolean | null>(null);

  const appendMessage: AppendChatMessage = (data: ChatMessageData) => {
    // setChatMessages(chatMessages.concat(data));
  };
  useConnectRoom(setIsConnected);

  function getContent(isConnected: boolean | null) {
    let content: JSX.Element;

    switch (isConnected) {
      case false:
        content = <div className="center-page-align">not connected</div>;
        break;
      case true:
        // const chatRoomProps: ChatRoomProps = {
        //   textInput: chatInput,
        //   handleSend,
        //   handleInputChange: handleChatInputChange,
        //   messages: chatMessages,
        // };
        content = <ConnectedRoom setupChatroomConfig={setupChatroom()} />;
        break;
      default:
        content = <></>;
    }

    return content;
  }

  // const [handleSubmitMessage] = useChatRoom(appendMessage);

  // const handleSend = () => {
  //   if (handleSubmitMessage) {
  //     handleSubmitMessage(chatInput);
  //   }
  //   setChatInput('');
  // };
  // const handleChatInputChange: ChangeEventHandler = (
  //   event: ChangeEvent<Element>,
  // ) => setChatInput((event.target as HTMLInputElement).value);
  const content = getContent(isConnected);
  return (
    <div id={styles.room}>
      <Header />
      {content}
    </div>
  );
}
