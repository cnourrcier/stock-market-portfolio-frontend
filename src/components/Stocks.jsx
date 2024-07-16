import { useEffect, useState } from "react";


const Stocks = () => {
    const [stocks, setStocks] = useState([]);
    const [sortBy, setSortBy] = useState('');
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');

    useEffect(() => {
        // Fetch stock data from the backend
        fetch(`http://localhost:5000/api/stocks?sortBy=${sortBy}&minPrice=${minPrice}&maxPrice=${maxPrice}`)
            .then((res) => res.json())
            .then((data) => setStocks(data))
            .catch((error) => console.error("Error fetching stocks:", error));
    }, [sortBy, minPrice, maxPrice]);

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
            <div>
                <label>Sort By:
                    <select onChange={(e) => setSortBy(e.target.value)} value={sortBy}>
                        <option value=''>None</option>
                        <option value='symbol'>Symbol</option>
                        <option value='initial_price'>Price</option>
                    </select>
                </label>
                <label>Min Price:
                    <input type='number' onChange={(e) => setMinPrice(e.target.value)} value={minPrice} />
                </label>
                <label>Max Price:
                    <input type='number' onChange={(e) => setMaxPrice(e.target.value)} value={maxPrice} />
                </label>
            </div>
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

export default Stocks;
