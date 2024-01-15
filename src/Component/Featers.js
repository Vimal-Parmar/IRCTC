import { Grid, Container, Typography, Box } from "@mui/material";
import Interface from "./Images/Interface.png";
import Available from "./Images/Available.png";
import UserAccount from "./Images/UserAccount.png";

export default function Features() {
  return (
    <Container maxWidth="lg" sx={{ padding: 4 }}>

      <Grid container spacing={{ xs: 2, sm: 3, md: 4 }}>

        {/* User-Friendly Interface Section */}
        <Grid item xs={12} sm={6} sx={{ backgroundColor: "#B9EBFF", padding: { xs: 2, sm: 5 } }} marginTop={6}>
          <Typography variant="h5">User-Friendly Interface</Typography>
          <Typography variant="body1" marginTop={3}>
            Our app boasts an incredibly intuitive and user-friendly interface, ensuring that the process of searching, selecting, and booking train tickets is a breeze. With a clean and organized design, users can navigate effortlessly, making their booking experience enjoyable and efficient.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} marginTop={6}>
          <Box sx={{ textAlign: 'center' }}>
            <img src={Interface} style={{ width: "50%", height: "100%", objectFit: "cover", borderRadius: "8px" }} alt="User-Friendly Interface" />
          </Box>
        </Grid>
       

        {/* Real-Time Availability Section */}
        <Grid item xs={12} sm={6} marginTop={6}>
          <Box sx={{ textAlign: 'center' }}>
            <img src={Available} style={{ width: "50%", height: "100%", objectFit: "cover", borderRadius: "8px" }} alt="Real-Time Availability" />
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} sx={{ backgroundColor: "#B9EBFF", padding: { xs: 2, sm: 5 } }} marginTop={6}>
          <Typography variant="h5">Real-Time Availability</Typography>
          <Typography variant="body1" marginTop={3}>
            Stay informed with real-time updates on seat availability and ticket status. Receive instant confirmation for booked tickets, eliminating any uncertainty and allowing users to plan their journeys with confidence.
          </Typography>
        </Grid>
        
        {/* Personalized User Accounts Section */}
        <Grid item xs={12} sm={6} sx={{ backgroundColor: "#B9EBFF", padding: { xs: 2, sm: 5 } }} marginTop={6}>
          <Typography variant="h5">Personalized User Accounts</Typography>
          <Typography variant="body1" marginTop={3}>
            Enjoy the benefits of a personalized user account, allowing for quick and efficient bookings. Save preferences, access booking history, and tailor the app to individual needs, providing a seamless and personalized experience for every user.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} marginTop={6}>
          <Box sx={{ textAlign: 'center' }}>
            <img src={UserAccount} style={{ width: "50%", height: "100%", objectFit: "cover", borderRadius: "8px" }} alt="Personalized User Accounts" />
          </Box>
        </Grid>

      </Grid>
    </Container>
  );
}
