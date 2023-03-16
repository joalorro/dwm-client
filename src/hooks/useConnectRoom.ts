import axios from 'axios';
import { useEffect } from 'react';
import { API_URL } from '../constants/api';

export function useConnectRoom(
  setIsConnected: React.Dispatch<React.SetStateAction<boolean | null>>,
): void {
  useEffect(() => {
    const connectToApi = async () => {
      try {
        const response = await axios({
          url: `${API_URL}/connect`,
          method: 'get',
          headers: {
            'Access-Control-Allow-Origin': '*',
          },
        });
        console.log('DATA:', response);
        setIsConnected(true);
      } catch (error) {
        console.log('ERROR:', error);
        setIsConnected(false);
      }
    };
    connectToApi();
  }, []);
}
