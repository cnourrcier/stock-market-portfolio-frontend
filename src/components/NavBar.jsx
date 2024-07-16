import { AppBar, Toolbar, Box, Button } from '@mui/material';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <AppBar position='static'>
            <Toolbar>
                <Box display='flex' justifyContent='center' flexGrow={1}>
                    <Button color='inherit' component={NavLink} to='/stocks'>
                        Stocks
                    </Button>
                    <Button color='inherit' component={NavLink} to='/watchlist'>
                        Watchlist
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar;


