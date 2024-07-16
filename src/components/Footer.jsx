import { Box, Container, Typography } from '@mui/material';

const Footer = () => {
    return (
        <Box mt={4} py={2} bgcolor='primary.main' color='white'>
            <Container>
                <Typography variant='body1' align='center'>
                    &copy; {new Date().getFullYear()} Stock Market MERN App. All rights reserved.
                </Typography>
            </Container>
        </Box>
    );
};

export default Footer;