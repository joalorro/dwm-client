import { Socket } from 'socket.io-client';
import { ConnectedRoomProps } from '../components/rooms/connected-room';

export interface WebSocketResponse {
  data: any;
}

/**
 * @property {string} [sender]
 * @property {string} text
 */
export interface ChatMessageData {
  sender?: string;
  text: string;
}

export interface AppendChatMessage {
  (data: ChatMessageData): void;
}

export interface SetupAppendChatMessageListener {
  (cb: AppendChatMessage): void;
}

/**
 * @param {Array.<Socket, SendChatMessage, SetupAppendChatMessageListener>}
 */
export interface SetupChatroomConfig {
  socket: Socket;
  sendChatMessage: SendChatMessage;
  setupAppendMessageListener: SetupAppendChatMessageListener;
}

export interface SendChatMessage {
  (chatMessageData: ChatMessageData): void;
}

export interface ConnectWebSocketConfig {
  isConnected: boolean | null;
  connectSocket: () => void;
  renderNotConnectedPage: () => void;
  socket: Socket | null;
}

export interface RenderConnectedRoomConfig {
  socket: Socket | null;
  chatRoomConfig: SetupChatroomConfig | null;
  renderConnectedRoom: (connectedRoomProps: ConnectedRoomProps) => void;
}
