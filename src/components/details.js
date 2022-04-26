import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import NavBar from './NavBar';
import { Link, useSearchParams , useLocation} from 'react-router-dom';


export default function Details(props) {

  const location = useLocation();
  const currentPage = location.pathname.substring(1,);
  const [searchParams] = useSearchParams();
  const signpage = searchParams.get("signpage");
  const labelButton = signpage.includes("FR") ? "Retour" : "Back";
  const currentPath = currentPage + "?signpage=" + signpage.replace('-FR', '');


  return (
    <div>
      <NavBar currentPath={currentPath} />
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
        </Grid>
      </Box>
      <div className='button-container'>
        <Link to={`/${signpage}`}>
          <button className="parking-button">
            {labelButton}
          </button>
        </Link>
      </div>

    </div>
  );
}