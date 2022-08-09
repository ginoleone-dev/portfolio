import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  Stack,
} from '@mui/material';
import { faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons';
import JavascriptIcon from '@mui/icons-material/Javascript';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Main() {
  return (
    <Container sx={{ display: 'flex', justifyContent: 'center', mt: '20px' }}>
      <Grid
        container
        rowSpacing={1}
        columnSpacing={2}
        display="flex"
        justifyContent="center"
        alignItems="center"
        maxWidth={'900px'}
      >
        <Grid item xs={12} sm={7}>
          <Card
            sx={{
              maxHeight: 550,
              maxWidth: 550,
              borderRadius: '15px',
              borderBottom: '5px solid #dce3e6',
              m: '20px 0px',
            }}
          >
            <CardContent>
              <Container>
                <Typography
                  p={2}
                  bgcolor="white"
                  color={'#1A202C'}
                  fontSize={{ xs: '1.5rem', sm: '1.8rem' }}
                >
                  Hi, I'm Gino!
                </Typography>
              </Container>
              <Container>
                <Typography
                  p={1}
                  bgcolor="white"
                  color={'#1A202C'}
                  textAlign={'center'}
                  fontSize={{ xs: '1rem', sm: '1rem', lg: '1.1rem' }}
                >
                  I am a self taught developer that loves learning new
                  technologies and found a
                  <span style={{ fontWeight: 'bold' }}>
                    &nbsp;passion for frontend development
                  </span>
                  , I have an entrepreneurial background in e-commerce, an
                  industrial engineering degree and{' '}
                  <span style={{ fontWeight: 'bold' }}>
                    I want to find a team that will push my growth
                  </span>{' '}
                  as a person and a professional.
                </Typography>
              </Container>
              <Container>
                <Typography
                  p={1}
                  bgcolor="white"
                  color={'#1A202C'}
                  textAlign={'center'}
                  fontSize={{ xs: '1rem', sm: '1rem', md: '1.2', lg: '1.3rem' }}
                >
                  Right now I'm focusing on sharpening my development skills by
                  building challenging applications that mirror real world
                  scenarios.
                </Typography>
              </Container>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={12} lg={5}>
          <Container
            sx={{
              backgroundColor: 'transparent',
              borderRadius: '15px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
            }}
          >
            <Typography
              color={'white'}
              fontWeight={'500'}
              textAlign={'center'}
              justifyContent={'center'}
              alignItems={'center'}
              fontSize={'30px'}
              ml={{ xs: '0px', sm: '0px', lg: '60px' }}
            >
              The Tech Stack
            </Typography>

            <Stack
              direction={'column'}
              spacing={2}
              mt={'12px'}
              maxHeight={'600px'}
              alignItems="center"
              ml={{ xs: '0px', sm: '0px', lg: '60px' }}
            >
              <Typography
                bgcolor="black"
                color={'white'}
                textAlign={'center'}
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
                fontSize={'20px'}
                p={'10px 70px'}
                maxWidth={'250px'}
                borderRadius={'20px'}
              >
                <JavascriptIcon sx={{ fontSize: '30px' }} />
                JavaScript
              </Typography>

              <Typography
                bgcolor="black"
                color={'white'}
                textAlign={'center'}
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
                fontSize={'20px'}
                p={'10px 70px'}
                maxWidth={'250px'}
                borderRadius={'20px'}
              >
                <FontAwesomeIcon
                  icon={faNodeJs}
                  style={{ marginRight: '5px' }}
                />
                Node JS
              </Typography>
              <Typography
                bgcolor="black"
                color={'white'}
                textAlign={'center'}
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
                fontSize={'20px'}
                p={'10px 70px'}
                maxWidth={'250px'}
                borderRadius={'20px'}
              >
                <FontAwesomeIcon
                  icon={faReact}
                  style={{ marginRight: '5px' }}
                />
                React JS
              </Typography>
              <Typography
                bgcolor="black"
                color={'white'}
                textAlign={'center'}
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
                fontSize={'20px'}
                p={'10px 70px'}
                maxWidth={'250px'}
                borderRadius={'20px'}
              >
                <GitHubIcon sx={{ marginRight: '5px' }} />
                Github
              </Typography>
              <Typography
                bgcolor="black"
                color={'white'}
                textAlign={'center'}
                display={'flex'}
                justifyContent={'center'}
                fontSize={'20px'}
                p={'10px 70px'}
                maxWidth={'250px'}
                borderRadius={'20px'}
              >
                Material UI
              </Typography>
            </Stack>
          </Container>
        </Grid>
      </Grid>
    </Container>
  );
}
