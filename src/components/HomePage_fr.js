import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';

export default function HomePage_fr() {
    return (
        <div className="parking-content">
            <NavBar />
            <img src="street-parking-banner.png" style={{ height: '250px', width: '100%' }} alt="background" />
            <Grid container
                spacing={0}
                direction="column"
                alignItems="center"
                justify="center"
                pt={5}
            >
                <Typography align='center' variant='h3' color={"#484848"} >
                    Signalisation de stationnement disponible
                </Typography>
            </Grid>
            <Box sx={{ '& button': { m: 2 } }}>
                <Grid container
                    spacing={0}
                    direction="column"
                    alignItems="center"
                    justify="center"
                    pt={5}
                >
                    <Card sx={{ width: '90%', maxWidth: 640 }} >
                        <div>
                            <Link to={`/s001-FR`}>
                                <Button sx={{ width: 1 / 8, }} variant="contained" size="medium">s001</Button>
                            </Link>

                            <Link to={`/s002-FR`}>
                                <Button sx={{ width: 1 / 8, }} variant="contained" size="medium">s002</Button>
                            </Link>
                            <Link to={`/s003-FR`}>
                                <Button sx={{ width: 1 / 8, }} variant="contained" size="medium">s003</Button>
                            </Link>
                        </div>
                        <div>
                            <Link to={`/s004-FR`}>
                                <Button sx={{ width: 1 / 8, }} variant="contained" size="medium">s004</Button>
                            </Link>

                            <Link to={`/s005-FR`}>
                                <Button sx={{ width: 1 / 8, }} variant="contained" size="medium">s005</Button>
                            </Link>
                            <Link to={`/s006-FR`}>
                                <Button sx={{ width: 1 / 8, }} variant="contained" size="medium">s006</Button>
                            </Link>
                        </div>
                        <div>
                            <Link to={`/s007-FR`}>
                                <Button sx={{ width: 1 / 8, }} variant="contained" size="medium">s007</Button>
                            </Link>

                            <Link to={`/s008-FR`}>
                                <Button sx={{ width: 1 / 8, }} variant="contained" size="medium">s008</Button>
                            </Link>
                            <Link to={`/s009-FR`}>
                                <Button sx={{ width: 1 / 8, }} variant="contained" size="medium">s009</Button>
                            </Link>
                            <Link to={`/s010-FR`}>
                                <Button sx={{ width: 1 / 8, }} variant="contained" size="medium">s010</Button>
                            </Link>
                        </div>
                    </Card>
                </Grid>
            </Box>
        </div> 
    );
}