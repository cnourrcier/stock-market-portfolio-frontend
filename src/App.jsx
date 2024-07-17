import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Box, Container, CssBaseline, ThemeProvider } from '@mui/material';
import NavBar from './components/NavBar';
import Stocks from './components/Stocks';
import Watchlist from './components/Watchlist';
import Footer from './components/Footer';
import { lightTheme, darkTheme } from './theme';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  }

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Router>
        <CssBaseline />
        <div className='main-content'>
          <NavBar toggleTheme={toggleTheme} darkMode={darkMode} />
          <Box mt={2}>
            <Container>
              <Routes>
                <Route path='/' element={<Navigate to='/stocks' />} />
                <Route path='/stocks' element={<Stocks />} />
                <Route path='/watchlist' element={<Watchlist />} />
              </Routes>
            </Container>
          </Box>
        </div>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
