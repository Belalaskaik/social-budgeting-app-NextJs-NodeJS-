import React, { useState, useEffect } from 'react';
import { Container, Typography, List, ListItem, ListItemText, CircularProgress } from '@mui/material';

const Transactions = ({ connectionId, accountId }) => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTransactions = async () => {
      const appId = process.env.SALT_EDGE_APP_ID;
      const secret = process.env.SALT_EDGE_SECRET;

      const url = `https://www.saltedge.com/api/v6/transactions?connection_id=${connectionId}&account_id=${accountId}&duplicated=true&pending=false&per_page=250`;

      try {
        const response = await fetch(url, {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'App-id': appId,
            'Secret': secret,
          },
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setTransactions(data.data || []);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTransactions();
  }, [connectionId, accountId]);

  if (loading) {
    return <CircularProgress />;
  }

  if (error) {
    return <Typography color="error">Error: {error}</Typography>;
  }

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Transactions
      </Typography>
      <List>
        {transactions.map((transaction) => (
          <ListItem key={transaction.id}>
            <ListItemText
              primary={`${transaction.description} - ${transaction.amount} ${transaction.currency_code}`}
              secondary={`Date: ${transaction.made_on}`}
            />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default Transactions;
