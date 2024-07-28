import React, { useEffect, useState } from 'react';
import client from '@/app/lib/mongodb';

const Home = () => {
  const [connectionStatus, setConnectionStatus] = useState('Checking...');

  useEffect(() => {
    const checkConnection = async () => {
      try {
        await client.connect();
        setConnectionStatus('Connected to MongoDB');
      } catch (error) {
        setConnectionStatus('Failed to connect to MongoDB');
      }
    };

    checkConnection();
  }, []);

  return (
    <div>
      <h1>Connection Status</h1>
      <p>{connectionStatus}</p>
    </div>
  );
};

export default Home;