export interface WebSocketResponse {
  data: any;
}

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
export type SetupChatroomConfig = [
  SendChatMessage,
  SetupAppendChatMessageListener,
];

export interface SendChatMessage {
  (chatMessageData: ChatMessageData): void;
}
