import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import NavBar from './NavBar';
import { Link } from 'react-router-dom';


export default function Details(props) {
  return (
    <div>
      <NavBar />
      <Box pt={6}>
        <Grid container
          spacing={0}
          direction="column"
          alignItems="center"
          justify="center"
        >
          <Card sx={{ width: '75%', minWidth: 275 }} >
            <img src={props.image} style={{ height: '100%', width: '100%' }} />
          </Card>
          <Link to={`/s${props.sign}`}>
              <button className="parking-button">
                Back
              </button>
            </Link>
        </Grid>
      </Box>
    </div>
  );
}