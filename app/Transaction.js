import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

const TransactionForm = () => {
  const [transaction, setTransaction] = useState({
    amount: "",
    description: "",
    date: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTransaction({
      ...transaction,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    console.log("Transaction:", transaction);
    // Add your transaction submission logic here
  };

  return (
    <Box
      sx={{
        backgroundColor: "white",
        padding: 2,
        borderRadius: 1,
        boxShadow: 3,
        mt: 2,
        display: "flex",
        flexDirection: "column", // This makes the textboxes stack vertically
        gap: 2, // Adds space between the elements
      }}
    >
      <Typography variant="h6" align="center" gutterBottom>
        Add Transaction
      </Typography>
      <TextField
        label="Amount"
        name="amount"
        value={transaction.amount}
        onChange={handleChange}
        fullWidth
      />
      <TextField
        label="Description"
        name="description"
        value={transaction.description}
        onChange={handleChange}
        fullWidth
      />
      <TextField
        label="Date"
        name="date"
        type="date"
        value={transaction.date}
        onChange={handleChange}
        fullWidth
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        label="Time"
        name="time"
        type="time"
        value={transaction.time}
        onChange={handleChange}
        fullWidth
        InputLabelProps={{
          shrink: true,
        }}
      />
      <Button
        variant="contained"
        sx={{
          backgroundColor: "red",
          color: "black",
          "&:hover": {
            backgroundColor: "darkred",
          },
          flexShrink: 1, // Allow the Button to shrink
        }}
        onClick={handleSubmit}
        fullWidth
      >
        Add Transaction
      </Button>
    </Box>
  );
};

export default TransactionForm;
