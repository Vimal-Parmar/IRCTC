import React from "react";
import { Button, Grid, Paper, Typography, Container } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";

export default function CancelTicket() {
  return (
    <Container sx = {{marginBottom : 5}}>
      <Paper sx={{ p: 2, textAlign: "center", maxWidth: "400px", margin: "auto", backgroundColor: "#f0f0f0" }}>
        <CancelIcon fontSize="large" color="error" />
        <Typography variant="h5" color="textPrimary" sx={{ marginY: 2 }}>
          Are You Sure?
        </Typography>

        <Button variant="contained" sx={{ margin: 1 }} size="small">
          Ignore
        </Button>
        <Button variant="contained" color="error" sx={{ margin: 1 }} size="small">
          Cancel Ticket
        </Button>
      </Paper>

      <Grid container spacing={2} sx={{ mt: 3 }}>
        <Grid item xs={12} sm={12}>
          <Typography variant="h6" color="textPrimary" sx={{ borderBottom: "1px solid #ccc", paddingBottom: 1, marginBottom: 2 }}>
            Policies
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Typography variant="h6" color="textPrimary">
            1. Cancellation Fee
          </Typography>
          <Typography>
            A cancellation fee will be applicable based on the time of
            cancellation. The closer to the departure date, the higher the
            cancellation fee.
          </Typography>
        </Grid>

        <Grid item xs={12} sm={12}>
          <Typography variant="h6" color="textPrimary">
            2. Time Constraints
          </Typography>
          <Typography>
            Tickets can only be canceled within a specified time frame before
            the scheduled departure. Cancellations after this period may not be
            eligible for a refund.
          </Typography>
        </Grid>

        <Grid item xs={12} sm={12}>
          <Typography variant="h6" color="textPrimary">
            3. Refund Policy
          </Typography>
          <Typography>
            The refund amount will be subject to the cancellation fee and the
            time of cancellation. Some tickets may be non-refundable.
          </Typography>
        </Grid>

        <Grid item xs={12} sm={12}>
          <Typography variant="h6" color="textPrimary">
            4. Cancellation Channels
          </Typography>
          <Typography>
            Specify the acceptable channels for cancellation, such as online
            platforms, authorized agents, or designated counters. Each channel
            may have its own set of rules.
          </Typography>
        </Grid>

        <Grid item xs={12} sm={12}>
          <Typography variant="h6" color="textPrimary">
            5. Documentation
          </Typography>
          <Typography>
            Customers may be required to provide certain documentation or
            details for the cancellation process such as booking reference
            number, identification, or the credit/debit card used for booking.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}
