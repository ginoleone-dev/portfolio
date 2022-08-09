import Navbar from '../components/Navbar';
import Main from '../components/Main';
import { Box, Container, Typography } from '@mui/material';
import Projects from '../components/Projects';
import Cards from '../components/Cards';

export default function Home() {
  return (
    <Box
      sx={{ backgroundImage: 'linear-gradient(to right, #4776E6, #8E54E9)' }}
      height={'120vh'}
    >
      <Navbar />
      <Main />
      <Container sx={{ display: 'flex', justifyContent: 'center' }}>
        <Typography fontSize={'2rem'} color={'white'} my={'15px'}>
          The Projects
        </Typography>
      </Container>

      <Projects />
    </Box>
  );
}
