import { Grid, Container, Typography, Box } from "@mui/material";
import TrainImage from "./Images/TrainImage.png";

export default function Welcome() {
  return (
    <Container maxWidth="lg" sx={{ backgroundColor: "#B9EBFF", padding: 4 }}>
      <Grid container spacing={{ xs: 2, sm: 3, md: 4, lg: 5 }}>
        <Grid item xs={12} sm={6}>
          <Box sx={{ padding: { xs: 2, sm: 5 } }}>
            <Typography variant="h2">Welcome</Typography>
            <Typography variant="h6" marginTop={3}>
              Revolutionize your travel experience with our train travel website,
              offering seamless booking, real-time updates, and curated itineraries.
              Explore the world by rail, where every journey is a story waiting to be written.
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Box sx={{ paddingTop: { xs: 2, sm: 4 } }}>
            <img src={TrainImage} style={{ width: "80%", height: "80%", objectFit: "cover", borderRadius: "8px" }} alt="Train" />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
