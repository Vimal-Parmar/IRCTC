import { Grid, Container, Typography, Box, TextField, Select, MenuItem, Button, Paper } from "@mui/material";
import { useState } from "react";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function TrainSearch() {

  const [formData, setFormData] = useState({
    from: "",
    to: "",
    date: null,
    class: "allClasses",
  });

  function handleSubmit(){
    console.log("Submitted Successfully!!");
  }

  function handleChange(event) {
    setFormData(prevData => {
      return {
        ...prevData,
        [event.target.name]: event.target.value,
      };
    });
  }

  const handleDateChange = (date) => {
    setFormData({ ...formData, date: date });
  };

  return (
    <Container maxWidth="sm" sx={{ padding: 4, borderRadius: 8 }}>
     <Paper  elevation={3} >
        <Box padding={5}>
      <Typography variant="h5" textAlign={"center"}>
        Start Your Journey
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            name="from"
            type="text"
            label="From"
            fullWidth
            onChange={handleChange}
            value={formData.from}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="to"
            type="text"
            label="To"
            fullWidth
            onChange={handleChange}
            value={formData.to}
          />
        </Grid>
      </Grid>

      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} sm={6}>
          <Typography variant="subtitle1">Select Date:</Typography>
          <DatePicker
            selected={formData.date}
            onChange={handleDateChange}
            dateFormat="dd/MM/yyyy"
            placeholderText="Select a date"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="subtitle1">Select Class:</Typography>
          <Select
            name="class"
            value={formData.class}
            onChange={handleChange}
            displayEmpty
            fullWidth
          >
            <MenuItem value="allClasses">All classes</MenuItem>
            <MenuItem value="2S">Second Seating (2S)</MenuItem>
            <MenuItem value="3A">AC 2 Tier (3A)</MenuItem>
            <MenuItem value="CC">AC Chair Car</MenuItem>
            <MenuItem value="EC">Exec. Chair Car</MenuItem>
          </Select>
        </Grid>
      </Grid>

      <Button onClick={handleSubmit} fullWidth variant="contained" color="primary" sx={{ marginTop: 2 }}>
        Submit
      </Button>
      </Box>
      </Paper>
    </Container>
  );
}
