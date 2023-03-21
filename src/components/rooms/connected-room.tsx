import { ChangeEvent, useEffect, useState } from 'react';
import {
  AppendChatMessage,
  ChatMessageData,
  PaintData,
  SendChatMessage,
  SendPaintEventData,
  SetupAppendChatMessageListener,
} from '../../constants/interfaces';
import { Canvas, CanvasProps } from '../canvas/canvas';
import { ChatRoom, ChatRoomProps } from './chat-room';
import styles from './connected-room.module.css';

export const ConnectedRoom = ({
  sendChatMessage,
  setupAppendMessageListener,
  sendPaintEventData,
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
  const canvasProps: CanvasProps = {
    sendPaintEventData,
  };
  return (
    <div id={styles['room-content']}>
      <Canvas {...canvasProps} />
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
  sendPaintEventData: SendPaintEventData;
}
