import Welcom from "./Welcom";
import Features from "./Featers";
import TrainSearch from "./TrainSearch";
import { Grid, Typography } from "@mui/material";

function Home() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} margin={3}>
        <Welcom />
      </Grid>
      <Grid item xs={12} margin={3}>
        <TrainSearch />
      </Grid>
      <Grid item xs={12} margin={3}>
        <Typography variant="h4" sx={{display : " flex" ,alignItems : "center", justifyContent : "center", textDecoration: 'underline'}}>Features </Typography>
      
        <Features />
      </Grid>
    </Grid>
  );
}

export default Home;
