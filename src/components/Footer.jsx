import { Box, Container, Typography, useTheme } from '@mui/material';

const Footer = () => {
    const theme = useTheme();

    return (
        <Box mt={4} py={2} sx={{ backgroundColor: theme.palette.primary.main, color: theme.palette.primary.contrastText }}>
            <Container>
                <Typography variant='body1' align='center'>
                    &copy; {new Date().getFullYear()} Stock Market MERN App. All rights reserved.
                </Typography>
            </Container>
        </Box>
    );
};

export default Footer;