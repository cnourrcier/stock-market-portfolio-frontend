import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import Stocks from './components/Stocks';
import Watchlist from "./components/Watchlist";

function App() {

  return (
    <Router>
      <nav>
        <NavLink to="/stocks">Stocks</NavLink>
        <NavLink to="/watchlist">Watchlist</NavLink>
      </nav>
      <Routes>
        <Route
          path="/stocks"
          element={<Stocks />}
        />
        <Route
          path="/watchlist"
          element={<Watchlist />}
        />
      </Routes>
    </Router>
  );
}

export default App;
