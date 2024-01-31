import React from "react";
import { Typography, Paper, Grid, Button } from "@mui/material";

export default function StationListCard(props) {
  const handleClick = () => {
    // Handle the click event here
    console.log("Paper Clicked");
  };

  return (
    <Grid container spacing={1} alignItems="center">
      <Grid item xs={12}>
        <Paper
          onClick={handleClick}
          sx={{
            backgroundColor: "#B9EBFF",
            width: "100%", // Set to 100% to ensure it fits within the parent
            minHeight: "6vh", // Adjusted height
            padding: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center", // Center content vertically
            borderRadius: 4, // Optional: Add border-radius for a rounded look
            boxShadow: 1, // Optional: Add a subtle shadow
          }}
        >
          <Typography variant="subtitle2">
            {props.name} - {props.code}
          </Typography>
          <Typography variant="body2">{props.state}</Typography>
        </Paper>
      </Grid>
    </Grid>
  );
}
