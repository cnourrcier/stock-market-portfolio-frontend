import { useEffect, useState } from 'react';
import { Container, Typography, Select, MenuItem, InputLabel, FormControl, TextField, List, ListItem, ListItemText, Button, Grid } from '@mui/material';

const Stocks = () => {
    const [stocks, setStocks] = useState([]);
    const [sortBy, setSortBy] = useState('none');
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');

    useEffect(() => {
        // Fetch stock data from the backend
        fetch(`/api/stocks?sortBy=${sortBy}&minPrice=${minPrice}&maxPrice=${maxPrice}`)
            .then((res) => res.json())
            .then((data) => setStocks(data))
            .catch((error) => console.error('Error fetching stocks:', error));
    }, [sortBy, minPrice, maxPrice]);

    const getRandomColor = () => {
        const colors = ['#FF0000', '#00FF00']; // Red and Green
        return colors[Math.floor(Math.random() * colors.length)];
    };

    const addToWatchlist = (stock) => {
        // Add stock to watchlist
        fetch('/api/watchlist', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(stock),
        })
            .then((res) => res.json())
            .then((data) => {
                // Show an alert with the message received from the server
                alert(data.message);
            })
            .catch((error) =>
                console.error('Error adding to watchlist:', error)
            );
    };

    return (
        <Container>
            <Typography variant='h4' gutterBottom>
                Stock Market MERN App
            </Typography>
            <Typography variant='h5' gutterBottom>
                Stocks
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
                {stocks.map((stock) => (
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
                            variant='contained'
                            color='primary'
                            onClick={() => addToWatchlist(stock)}
                        >
                            Add to Watchlist
                        </Button>
                    </ListItem>
                ))}
            </List>
        </Container>
    );
};

export default Stocks;
