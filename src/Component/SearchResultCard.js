import { Grid, Paper, Typography, Button } from "@mui/material";

export default function SearchResultCard(props) {
  const data = props.data;

  return (
    <Grid container spacing={2} alignItems="center">
      <Grid item xs={12}>
        <Paper
          sx={{
            backgroundColor: "#B9EBFF",
            width: "100%",
            minHeight: "15vh",
            padding: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 4,
            boxShadow: 2,
          }}
        >
          <Typography variant="h6" sx={{ marginBottom: 1 }}>
            {data.train_name}
          </Typography>

          <Grid container spacing={1} alignItems="center" justifyContent="center">
            <Grid item xs={12} md={4}>
              <Typography>
                {data.from_sta} | {data.train_date} | {data.from_station_name}
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography>Duration: {data.duration}</Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography>
                {data.to_sta} | {data.train_date} | {data.to_station_name}
              </Typography>
            </Grid>
          </Grid>

          <Button
            variant="contained"
            color="primary"
            sx={{ marginTop: 2, backgroundColor: "#007BFF" }}
          >
            Book Now
          </Button>
        </Paper>
      </Grid>
    </Grid>
  );
}
