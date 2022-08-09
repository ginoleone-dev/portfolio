import {
  Box,
  Container,
  Grid,
  Typography,
  Paper,
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
    <Container>
      <Grid
        container
        rowSpacing={1}
        columnSpacing={2}
        alignItems="center"
        justifyContent="center"
      >
        <Grid item xs={12} sm={6} display="flex" justifyContent={'flex-start'}>
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
                  height={'100%'}
                  fontSize={'1.5rem'}
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
                >
                  I am a self taught developer that loves learning new
                  technologies and found a passion for frontend development, I
                  have an entrepreneurial background in e-commerce, an
                  industrial engineering degree and I want to find a team that
                  will push my growth as a person and a professional.
                </Typography>
              </Container>
              <Container>
                <Typography
                  p={1}
                  bgcolor="white"
                  color={'#1A202C'}
                  textAlign={'center'}
                >
                  Right now I'm focusing on sharpening my development skills by
                  building challenging applications that mirror real world
                  scenarios.
                </Typography>
              </Container>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={5}>
          <Container
            sx={{
              backgroundColor: 'transparent',
              padding: '30px',
              borderRadius: '15px',
            }}
          >
            <Typography
              color={'white'}
              fontWeight={'500'}
              textAlign={'center'}
              justifyContent={'center'}
              alignItems={'center'}
              fontSize={'30px'}
              mr={'15px'}
            >
              The Tech Stack
            </Typography>

            <Stack
              direction={'column'}
              spacing={2}
              mt={'12px'}
              mr={'15px'}
              maxHeight={'600px'}
              // maxWidth={'200px'}
              justifyContent="center"
              alignItems="center"
            >
              <Typography
                bgcolor="black"
                color={'white'}
                textAlign={'center'}
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
                fontSize={'20px'}
                p={'6px 15px'}
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
                p={'6px 20px'}
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
                p={'6px 20px'}
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
                p={'6px 20px'}
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
                p={'6px 20px'}
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
