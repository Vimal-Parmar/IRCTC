import Welcom from "./Welcom";
import Features from "./Featers";
import TrainSearch from "./TrainSearch";
import { Grid } from "@mui/material";

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
        <Features />
      </Grid>
    </Grid>
  );
}

export default Home;
