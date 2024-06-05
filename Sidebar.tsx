// src/components/Sidebar.tsx

import React from "react";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Typography,
} from "@mui/material";
import {
  Person,
  LocationOn,
  HowToVote,
  Note,
  Edit,
  Print,
  Assignment,
  Group,
  AssignmentTurnedIn,
} from "@mui/icons-material";

const Sidebar: React.FC = () => {
  const items = [
    { text: "Overview", icon: <Assignment /> },
    { text: "Voter Info", icon: <Person />, active: true },
    { text: "Addresses", icon: <LocationOn /> },
    { text: "Voting Details", icon: <HowToVote /> },
    { text: "UOCAVA", icon: <Group /> },
    { text: "Notes", icon: <Note /> },
    { text: "Review Changes", icon: <Edit /> },
    { text: "Print & Scan", icon: <Print /> },
  ];

  const historyItems = [
    { text: "Name", icon: <Assignment /> },
    { text: "Address", icon: <LocationOn /> },
    { text: "Election/Participation", icon: <AssignmentTurnedIn /> },
    { text: "Party", icon: <Group /> },
  ];

  return (
    <div
      style={{
        width: 240,
        backgroundColor: "#f5f5f5",
        padding: 10,
        height: "100vh",
      }}
    >
      <List>
        {items.map(({ text, icon, active }, index) => (
          <ListItem button key={index} selected={active}>
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <Typography variant="h6" style={{ marginLeft: 16, marginTop: 10 }}>
        History
      </Typography>
      <List>
        {historyItems.map(({ text, icon }, index) => (
          <ListItem button key={index}>
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default Sidebar;
