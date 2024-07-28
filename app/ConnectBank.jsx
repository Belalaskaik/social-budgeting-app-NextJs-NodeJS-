import React, { useState, useEffect } from 'react';
import { Button, TextField, Typography, Container, Select, MenuItem, FormControl, InputLabel } from '@mui/material';

const ConnectBank = () => {
  const [bankName, setBankName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [link, setLink] = useState('');
  const [banks, setBanks] = useState([]); // Initialize as an empty array

  useEffect(() => {
    const fetchBanks = async () => {
      try {
        const response = await fetch('/api/saltedge/getBanks');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setBanks(result.data || []); // Set to an empty array if data is undefined
      } catch (error) {
        console.error('Error fetching banks:', error);
        setBanks([]); // Ensure banks is an empty array on error
      }
    };

    fetchBanks();
  }, []);

  const handleConnect = async () => {
    try {
      const response = await fetch('/api/saltedge/createConnectSession', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ bank_name: bankName, username, password }),
      });
      const result = await response.json();
      if (result && result.data && result.data.link) {
        setLink(result.data.link);
      } else {
        console.error('Error connecting to bank:', result);
      }
    } catch (error) {
      console.error('Error connecting to bank:', error);
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Connect to Your Bank
      </Typography>
      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel>Bank Name</InputLabel>
        <Select
          value={bankName}
          onChange={(e) => setBankName(e.target.value)}
        >
          {banks.length > 0 ? (
            banks.map((bank) => (
              <MenuItem key={bank.id} value={bank.name}>
                {bank.name}
              </MenuItem>
            ))
          ) : (
            <MenuItem disabled>No banks available</MenuItem>
          )}
        </Select>
      </FormControl>
      <TextField
        label="Username"
        variant="outlined"
        fullWidth
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        sx={{ mb: 2 }}
      />
      <TextField
        label="Password"
        type="password"
        variant="outlined"
        fullWidth
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        sx={{ mb: 2 }}
      />
      <Button variant="contained" color="primary" onClick={handleConnect}>
        Connect
      </Button>
      {link && (
        <div>
          <Typography variant="h6" sx={{ mt: 2 }}>
            Please follow this link to connect your bank:
          </Typography>
          <a href={link} target="_blank" rel="noopener noreferrer">
            {link}
          </a>
        </div>
      )}
    </Container>
  );
};

export default ConnectBank;