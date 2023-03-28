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
export interface SetupSocketConfig {
  socket: Socket;
  sendChatMessage: SendChatMessage;
  setupAppendMessageListener: SetupAppendChatMessageListener;
  sendPaintEventData: SendPaintEventData;
}

// TODO: add actual properties
export interface PaintData {
  [key: string]: any;
}

export interface SendPaintEventData {
  (paintData: PaintData): void;
}

export interface SendChatMessage {
  (chatMessageData: ChatMessageData): void;
}

export interface ConnectWebSocketConfig {
  isConnected: boolean | null;
  connectSocket: () => void;
  renderNotConnectedPage: () => void;
  username: string;
  socket: Socket | null;
}

export interface RenderConnectedRoomConfig {
  socket: Socket | null;
  socketConfig: SetupSocketConfig | null;
  renderConnectedRoom: (connectedRoomProps: ConnectedRoomProps) => void;
}

export interface RoomLocationState {
  roomNumber: number;
}
