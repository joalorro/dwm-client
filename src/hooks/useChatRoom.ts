import { useEffect } from 'react';
import { io } from 'socket.io-client';
import { API_URL } from '../constants/api';

export function useChatRoom(appendMessage: any) {
  const socket = io(API_URL);

  const handleSubmitNewMessage = (message: string) => {
    socket.emit('message', { date: message });
  };

  socket.on('message', ({ data } = { data: '' }) => {
    // appendMessage(data);
  });

  useEffect(() => {}, []);
}
