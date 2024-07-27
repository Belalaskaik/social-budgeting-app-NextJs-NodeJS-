// app/listItems.js
import * as React from "react";
import Link from "next/link";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";
import BarChartIcon from "@mui/icons-material/BarChart";
import LayersIcon from "@mui/icons-material/Layers";
import AssignmentIcon from "@mui/icons-material/Assignment";
import LoginIcon from "@mui/icons-material/Login";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

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
    <ListItemLink href="/checkout" icon={<ShoppingCartIcon />} primary="Orders" />
    <ListItemLink href="/customers" icon={<PeopleIcon />} primary="Customers" />
    <ListItemLink href="/reports" icon={<BarChartIcon />} primary="Reports" />
    <ListItemLink href="/integrations" icon={<LayersIcon />} primary="Integrations" />
    <ListItemLink href="/login" icon={<LoginIcon />} primary="Login" />
    <ListItemLink href="/signup" icon={<PersonAddIcon />} primary="Sign Up" />
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      Saved reports
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItemButton>
  </React.Fragment>
);