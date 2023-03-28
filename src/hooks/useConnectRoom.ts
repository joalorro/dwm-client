import axios from 'axios';
import { useEffect } from 'react';
import { API_URL } from '../constants/api';

export function useConnectRoom(
  setIsConnected: React.Dispatch<React.SetStateAction<boolean | null>>,
  username: string,
  roomNumber: number,
): void {
  useEffect(() => {
    const connectToApi = async () => {
      try {
        const response = await axios({
          url: `${API_URL}/connect`,
          method: 'post',
          headers: {
            'Access-Control-Allow-Origin': '*',
          },
          data: {
            username,
            roomNumber,
          },
        });
        console.log('DATA:', response);
        setIsConnected(true);
      } catch (error) {
        console.log('ERROR:', error);
        setIsConnected(false);
      }
    };
    if (username) connectToApi();
  }, [username]);
}
