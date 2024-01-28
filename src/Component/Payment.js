import React, { useState } from "react";
import {
  Paper,
  TextField,
  Typography,
  Grid,
  Select,
  MenuItem,
  Button,
  Container,
} from "@mui/material";

export default function Payment() {
  const [formData, setFormData] = useState({
    cardNumber: "",
    month: "",
    year: "",
    cvv: "",
    country: "India",
  });

  function handleChange(event) {
    setFormData((prevData) => {
      return {
        ...prevData,
        [event.target.name]: event.target.value,
      };
    });
  }

  return (
    <Container sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "70vh" }}>
      <Paper style={{ backgroundColor: "#CFF6FF", width: "50%" }} elevation={3} sx={{ p: 4 }}>
        <Typography variant="h5" gutterBottom>
          Payment Details
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              name="cardNumber"
              type="text"
              label="Card Number"
              fullWidth
              onChange={handleChange}
              value={formData.cardNumber}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              name="month"
              type="text"
              label="Month"
              fullWidth
              onChange={handleChange}
              value={formData.month}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              name="year"
              type="text"
              label="Year"
              fullWidth
              onChange={handleChange}
              value={formData.year}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              name="cvv"
              type="text"
              label="CVV"
              fullWidth
              onChange={handleChange}
              value={formData.cvv}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <Typography variant="subtitle1">Select Country:</Typography>
            <Select
              name="country"
              value={formData.country}
              onChange={handleChange}
              displayEmpty
              fullWidth
            >
              <MenuItem value="India">India</MenuItem>
              <MenuItem value="United States">United States</MenuItem>
              <MenuItem value="Canada">Canada</MenuItem>
            </Select>
          </Grid>

          <Grid item xs={12}>
            <Button variant="contained" color="primary" fullWidth>
              Pay Now
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}
