import { io } from 'socket.io-client';
import { API_URL } from '../constants/api';
import {
  AppendChatMessage,
  ChatMessageData,
  SetupChatroomConfig,
} from '../constants/interfaces';

/**
 * Setups of web socket for the chat room
 * returns a callback function that accepts an appendMessage argument
 */
export const setupChatroom = (): SetupChatroomConfig => {
  const socket = io(API_URL);

  // send message
  const sendMessage = (chatData: ChatMessageData) => {
    console.log('sending', chatData);
    socket.emit('message', chatData);
  };
  const setupAppendMessageListener = (appendMessage: AppendChatMessage) => {
    socket.on('message', (response: any) => {
      console.log('appending', response);
      // appendMessage(data);
    });
  };
  return [sendMessage, setupAppendMessageListener];
};
