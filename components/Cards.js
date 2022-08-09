import { useEffect, useState } from 'react';
import { Card, Container, Typography } from '@mui/material';
import data from '../data';

export default function Cards() {
  const [projects, setProjects] = useState([]);
  console.log(data.globalJobsList.title);

  return (
    <>
      <Card>
        <Typography>{data.globalJobsList.subTitle} </Typography>
      </Card>
    </>
  );
}
