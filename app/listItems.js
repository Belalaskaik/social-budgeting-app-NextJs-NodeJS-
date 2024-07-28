// app/listItems.js
import * as React from "react";
import Link from "next/link";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LoginIcon from "@mui/icons-material/Login";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TransactionForm from "./Transaction"; // Ensure the path is correct
import Box from "@mui/material/Box";

function ListItemLink({ icon, primary, href }) {
  return (
    <Link href={href} passHref legacyBehavior>
      <ListItemButton component="a">
        {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
        <ListItemText primary={primary} />
      </ListItemButton>
    </Link>
  );
}

export const mainListItems = (
  <React.Fragment>
    <ListItemLink href="/" icon={<DashboardIcon />} primary="Dashboard" />
    <ListItemLink
      href="/checkout"
      icon={<ShoppingCartIcon />}
      primary="Orders"
    />
    <ListItemLink href="/login" icon={<LoginIcon />} primary="Login" />
    <ListItemLink href="/signup" icon={<PersonAddIcon />} primary="Sign Up" />
    {/* Add the TransactionForm component */}
    <Box sx={{ mt: 5, p: 2 }}>
      <TransactionForm />
    </Box>
  </React.Fragment>
);
