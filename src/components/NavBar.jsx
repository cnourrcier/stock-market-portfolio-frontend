import { AppBar, Toolbar, Box, Button, IconButton } from '@mui/material';
import { NavLink } from 'react-router-dom';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const NavBar = ({ toggleTheme, darkMode }) => {
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
                <IconButton color='inherit' onClick={toggleTheme}>
                    {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar;


