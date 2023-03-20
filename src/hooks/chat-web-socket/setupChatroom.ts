import { io } from 'socket.io-client';
import { API_URL } from '../../constants/api';
import {
  AppendChatMessage,
  ChatMessageData,
  SetupChatroomConfig,
} from '../../constants/interfaces';

/**
 * Sets up  web socket for the chat room and returns an object containing:
 * * the web socket object
 * * a sendChatMessage function that emits a 'message' event
 * * a callback function that sets up the 'message' event listener on the client's web socket
 */
export const setupChatroom = (): SetupChatroomConfig => {
  const socket = io(API_URL);
  const sendChatMessage = (chatData: ChatMessageData) => {
    socket.emit('message', chatData);
  };
  const setupAppendMessageListener = (appendMessage: AppendChatMessage) => {
    socket.on('message', (incomingMessage: ChatMessageData) => {
      appendMessage(incomingMessage);
    });
  };
  return { socket, sendChatMessage, setupAppendMessageListener };
};
