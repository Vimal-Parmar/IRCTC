import { Grid, Container, Typography, Box } from "@mui/material";
import TrainImage from "./TrainImage.png";

export default function Features() {
  return (
    <div>
      <Container maxWidth="lg" sx={{ backgroundColor: "#B9EBFF", marginBottom: 8 }}>
        <Grid container spacing={{ xs: 2, sm: 3, md: 4 }}>
          <Grid item xs={12} sm={6}>
            <Box padding={{ xs: 2, sm: 5 }}>
              <Typography variant="h3">User-Friendly Interface</Typography>
              <Typography variant="h6" marginTop={3}>
                Our app boasts an incredibly intuitive and user-friendly interface, ensuring that the process of searching, selecting, and booking train tickets is a breeze. With a clean and organized design, users can navigate effortlessly, making their booking experience enjoyable and efficient.
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Box paddingTop={{ xs: 2, sm: 4 }}>
              <img src={TrainImage} style={{ width: "100%", height: "100%", objectFit: "cover" }} alt="Train" />
            </Box>
          </Grid>
        </Grid>
      </Container>

      <Container maxWidth="lg" sx={{ backgroundColor: "#B9EBFF", marginBottom: 8 }}>
        <Grid container spacing={{ xs: 2, sm: 3, md: 4 }}>
          <Grid item xs={12} sm={6}>
            <Box paddingTop={{ xs: 2, sm: 4 }}>
              <img src={TrainImage} style={{ width: "100%", height: "100%", objectFit: "cover" }} alt="Train" />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box padding={{ xs: 2, sm: 5 }}>
              <Typography variant="h3">Real-Time Availability</Typography>
              <Typography variant="h6" marginTop={3}>
                Stay informed with real-time updates on seat availability and ticket status. Receive instant confirmation for booked tickets, eliminating any uncertainty and allowing users to plan their journeys with confidence.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>

      <Container maxWidth="lg" sx={{ backgroundColor: "#B9EBFF", marginBottom: 8 }}>
        <Grid container spacing={{ xs: 2, sm: 3, md: 4 }}>
          <Grid item xs={12} sm={6}>
            <Box padding={{ xs: 2, sm: 5 }}>
              <Typography variant="h3">Personalized User Accounts</Typography>
              <Typography variant="h6" marginTop={3}>
                Enjoy the benefits of a personalized user account, allowing for quick and efficient bookings. Save preferences, access booking history, and tailor the app to individual needs, providing a seamless and personalized experience for every user.
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Box paddingTop={{ xs: 2, sm: 4 }}>
              <img src={TrainImage} style={{ width: "100%", height: "100%", objectFit: "cover" }} alt="Train" />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
