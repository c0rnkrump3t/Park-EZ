import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { MdThumbUp } from "react-icons/md";
import { FaRegThumbsUp } from "react-icons/fa";

import '../css/style.css'
import NavBar from './NavBar';

import Bar from './Bar';




import Container from '@mui/material/Container';


export default function AvailableParkingSpot() {
  return (


/* 
    <div className='container'>

      
      <Bar/>
     
     <div>
          <FaRegThumbsUp className="ThumbsUp" />
     </div>
      
       
  */

    
   <div>
      
          

    <Bar />
    <Box   pt={6}>
    <Grid container
                    spacing={0}
                    direction="column"
                    alignItems="center"
                    justify="center"
                    >
    <Card sx={{width: '90%', minWidth: 275 }}>
      <CardContent>

       <FaRegThumbsUp className="thumbs-up" />
        
      {/*   <Typography  variant="h5" component="div" sx={{ padding: 2, fontSize:28, fontWeight: 'bold', color:'#25d321'}}>
        

      

        <div>You can park here until Friday 1, 2022 </div>
        <div>9:10pm </div>

        </Typography>
 */}
       
      </CardContent>
      <CardActions>
        {/* <Button size="small">Click to pay using P$</Button> */}
      </CardActions>
    </Card>
    </Grid>
    </Box>
    </div>

  );
}