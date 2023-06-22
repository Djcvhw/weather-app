import React, {useCallback, useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Weather from './pages/Weather';

const App = () => {

  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <Container
        disableGutters
        component="main"
        maxWidth="xs">
        <CssBaseline/>
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Weather/>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default App;
