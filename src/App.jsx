import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box, Container, CssBaseline } from '@mui/material';
import NavBar from './components/NavBar';
import Stocks from './components/Stocks';
import Watchlist from './components/Watchlist';
import Footer from './components/Footer';

function App() {

  return (
    <Router>
      <CssBaseline />
      <div className='main-content'>
        <NavBar />
        <Box mt={2}>
          <Container>
            <Routes>
              <Route path='/stocks' element={<Stocks />}
              />
              <Route path='/watchlist' element={<Watchlist />}
              />
            </Routes>
          </Container>
        </Box>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
