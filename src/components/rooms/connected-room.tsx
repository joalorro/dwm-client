import { ChangeEvent, useState } from 'react';
import {
  AppendChatMessage,
  ChatMessageData,
  SetupChatroomConfig,
} from '../../constants/interfaces';
import { Canvas } from '../canvas/canvas';
import { ChatRoom, ChatRoomProps } from './chat-room';
import styles from './connected-room.module.css';

export const ConnectedRoom = ({ setupChatroomConfig }: ConnectedRoomProps) => {
  const [chatInput, setChatInput] = useState<string>('');
  const [chatMessages, setChatMessages] = useState<ChatMessageData[]>([]);

  const [sendChatMessage, setupAppendMessageListener] = setupChatroomConfig;
  const appendMessage: AppendChatMessage = (data: ChatMessageData) => {
    setChatMessages(chatMessages.concat(data));
  };

  setupAppendMessageListener(appendMessage);

  const handleSend = () => sendChatMessage({ text: chatInput });
  const handleChatInputChange = (event: ChangeEvent) =>
    setChatInput((event.target as HTMLInputElement).value);
  const chatRoomProps: ChatRoomProps = {
    textInput: chatInput,
    handleSend,
    handleInputChange: handleChatInputChange,
    messages: chatMessages,
  };
  return (
    <div id={styles['room-content']}>
      <Canvas />
      <ChatRoom {...chatRoomProps} />
    </div>
  );
};

export interface ConnectedRoomProps {
  setupChatroomConfig: SetupChatroomConfig;
}
