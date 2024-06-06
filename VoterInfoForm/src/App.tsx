// src/App.tsx

import React from "react";
import { CssBaseline, Box, Grid, Container } from "@mui/material";
import VoterForm from "./components/VoterForm";
import Sidebar from "./components/Sidebar";

const App: React.FC = () => {
  return (
    <>
      <CssBaseline />
      <Box sx={{ display: "flex" }}>
        <Grid container spacing={0} style={{ flexWrap: "nowrap" }}>
          <Grid item>
            <Sidebar />
          </Grid>
          <Grid item xs>
            <Container>
              <VoterForm />
            </Container>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default App;
