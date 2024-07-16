import { useEffect, useState } from 'react';
import { Container, Typography, Select, MenuItem, InputLabel, FormControl, TextField, List, ListItem, ListItemText, Button, Grid } from "@mui/material";

const Watchlist = () => {
    const [watchlist, setWatchlist] = useState([]);
    const [sortBy, setSortBy] = useState('none');
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');

    useEffect(() => {
        // Fetch stock data from the backend
        fetch(`/api/watchlist?sortBy=${sortBy}&minPrice=${minPrice}&maxPrice=${maxPrice}`)
            .then((res) => res.json())
            .then((data) => setWatchlist(data))
            .catch((error) => console.error("Error fetching stocks:", error));
    }, [sortBy, minPrice, maxPrice]);

    const getRandomColor = () => {
        const colors = ["#FF0000", "#00FF00"]; // Red and Green
        return colors[Math.floor(Math.random() * colors.length)];
    };

    const removeFromWatchlist = (symbol) => {
        // Add stock to watchlist
        fetch(`/api/watchlist/${symbol}`, {
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
        <Container>
            <Typography variant='h4' gutterBottom>
                Stock Market MERN App
            </Typography>
            <Typography variant='h5' gutterBottom>
                My Watchlist
            </Typography>
            <Grid container spacing={2} alignItems='center'>
                <Grid item>
                    <FormControl variant='outlined' size='small'>
                        <InputLabel>Sort By</InputLabel>
                        <Select value={sortBy} onChange={(e) => setSortBy(e.target.value)} label='Sort By'>
                            <MenuItem value='none'>None</MenuItem>
                            <MenuItem value='symbol'>Symbol</MenuItem>
                            <MenuItem value='initial_price'>Price</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item>
                    <TextField
                        variant='outlined'
                        size='small'
                        label='Min Price'
                        type='number'
                        value={minPrice}
                        onChange={(e) => setMinPrice(e.target.value)}
                    />
                </Grid>
                <Grid item>
                    <TextField
                        variant='outlined'
                        size='small'
                        label='Max Price'
                        type='number'
                        value={maxPrice}
                        onChange={(e) => setMaxPrice(e.target.value)}
                    />
                </Grid>
            </Grid>
            <List>
                {watchlist.map((stock) => (
                    <ListItem key={stock.symbol} divider>
                        <ListItemText
                            primary={`${stock.company} (${stock.symbol})`}
                            secondary={
                                <span style={{ color: getRandomColor() }}>
                                    ${stock.initial_price}
                                </span>
                            }
                        />
                        <Button
                            variant="contained"
                            color="secondary"
                            onClick={() => removeFromWatchlist(stock.symbol)}
                        >
                            Remove from Watchlist
                        </Button>
                    </ListItem>
                ))}
            </List>
        </Container>
    );
};

export default Watchlist;