import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import "./App.css";

const Stocks = () => {
  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    // Fetch stock data from the backend
    fetch("http://localhost:5000/api/stocks")
      .then((res) => res.json())
      .then((data) => setStocks(data))
      .catch((error) => console.error("Error fetching stocks:", error));
  }, []);

  const getRandomColor = () => {
    const colors = ["#FF0000", "#00FF00"]; // Red and Green
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const addToWatchlist = (stock) => {
    // Add stock to watchlist
    fetch("http://localhost:5000/api/watchlist", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(stock),
    })
      .then((res) => res.json())
      .then((data) => {
        // Show an alert with the message received from the server
        alert(data.message);
      })
      .catch((error) =>
        console.error("Error adding to watchlist:", error)
      );
  };

  return (
    <div className="App">
      <h1>Stock Market MERN App</h1>
      <h2>Stocks</h2>
      <ul>
        {stocks.map((stock) => (
          <li key={stock.symbol}>
            {stock.company} ({stock.symbol}) -
            <span style={{ color: getRandomColor() }}>
              {" "}
              ${stock.initial_price}
            </span>
            <button onClick={() => addToWatchlist(stock)}>
              Add to My Watchlist
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Watchlist = () => {
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    // Fetch stock data from the backend
    fetch("http://localhost:5000/api/watchlist")
      .then((res) => res.json())
      .then((data) => setWatchlist(data))
      .catch((error) => console.error("Error fetching stocks:", error));
  }, []);

  const getRandomColor = () => {
    const colors = ["#FF0000", "#00FF00"]; // Red and Green
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const removeFromWatchlist = (symbol) => {
    // Add stock to watchlist
    fetch(`http://localhost:5000/api/watchlist/${symbol}`, {
      method: "DELETE"
    })
      .then((res) => res.json())
      .then((data) => {
        // Show an alert with the message received from the server
        alert(data.message);
        setWatchlist(data.watchlist);
      })
      .catch((error) =>
        console.error("Error removing from watchlist:", error)
      );
  };

  return (
    <div className="App">
      <h1>Stock Market MERN App</h1>
      <h2>My Watchlist</h2>
      <ul>
        {watchlist.map((stock) => (
          <li key={stock.symbol}>
            {stock.company} ({stock.symbol}) -
            <span style={{ color: getRandomColor() }}>
              {" "}
              ${stock.initial_price}
            </span>
            <button onClick={() => removeFromWatchlist(stock.symbol)}>
              Remove from Watchlist
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

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
