import { useEffect, useState } from 'react';
import { Canvas } from '../canvas';
import { Header } from '../header/header';
import axios from 'axios';

const API_URL = 'http://localhost:3001';
const DRAWING_API_URL = `${API_URL}/drawing`;

export function Room() {
  const [isConnected, setIsConnected] = useState<Boolean | null>(null);
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

  let content;
  switch (isConnected) {
    case false:
      content = <>not connected</>;
      break;
    case true:
      content = <Canvas />;
      break;
    default:
      content = <></>;
  }
  return (
    <>
      <Header />
      {content}
    </>
  );
}
