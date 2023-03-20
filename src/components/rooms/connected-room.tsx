import { ChangeEvent, useEffect, useState } from 'react';
import {
  AppendChatMessage,
  ChatMessageData,
  SendChatMessage,
  SetupAppendChatMessageListener,
} from '../../constants/interfaces';
import { Canvas } from '../canvas/canvas';
import { ChatRoom, ChatRoomProps } from './chat-room';
import styles from './connected-room.module.css';

export const ConnectedRoom = ({
  sendChatMessage,
  setupAppendMessageListener,
}: ConnectedRoomProps) => {
  const [chatInput, setChatInput] = useState<string>('');
  const [chatMessages, setChatMessages] = useState<ChatMessageData[]>([]);

  const appendMessage: AppendChatMessage = (data: ChatMessageData) => {
    setChatMessages((prevMessages) => [...prevMessages, data]);
  };

  useEffect(() => {
    setupAppendMessageListener(appendMessage);
  }, []);

  const handleSend = () => {
    sendChatMessage({ text: chatInput });
    setChatInput('');
  };
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

/**
 * @typedef {ConnectedRoomProps}
 
 */

/**
 * @type {ConnectedRoomProps}
 * @property {SendChatMessage} sendChatMessage
 * @property {SetupAppendChatMessageListener} setupAppendMessageListener
 */
export interface ConnectedRoomProps {
  sendChatMessage: SendChatMessage;
  setupAppendMessageListener: SetupAppendChatMessageListener;
}
