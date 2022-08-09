import {
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button,
  CardActionArea,
  Box,
} from '@mui/material';

import data from '../data';
import React from 'react';

export default function Projects() {
  console.log(data.cryptoLand.title);
  return (
    <Box>
      <Container
        sx={{
          marginTop: '40px',

          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          textAlign="center"
          spacing={1}
        >
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            display="flex"
            justifyContent={'center'}
          >
            <Card sx={{ maxWidth: 345, borderRadius: '16px' }}>
              <CardActionArea
                href="https://globaljobslist.netlify.app"
                target="_blank"
              >
                <CardMedia
                  component="img"
                  height="250"
                  image={data.globalJobsList.image}
                  alt="jobsImage"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {data.globalJobsList.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {data.globalJobsList.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            display="flex"
            justifyContent={'center'}
          >
            <Card sx={{ maxWidth: 345, borderRadius: '16px' }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="250"
                  image={data.cryptoLand.image}
                  alt="jobsImage"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {data.cryptoLand.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {data.cryptoLand.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
