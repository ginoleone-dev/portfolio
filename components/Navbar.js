import React from 'react';

import { Box, Container } from '@mui/material';
import AppBar from '@mui/material/AppBar';

import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function Navbar() {
  return (
    <Container sx={{ flexGrow: 0.5 }}>
      <AppBar
        position="static"
        sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}
      >
        <Toolbar sx={{ justifyContent: 'space-between', textAlign: 'left' }}>
          <Typography variant="h6" component="div">
            GL - Frontend Developer
          </Typography>
          <Button color="inherit" sx={{ backgroundColor: 'black' }}>
            Resume / CV
          </Button>
        </Toolbar>
      </AppBar>
    </Container>
  );
}
