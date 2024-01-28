import React from "react";
import { useState, useEffect } from "react";
import {
  Grid,
  Container,
  Typography,
  Box,
  TextField,
  Select,
  MenuItem,
  Button,
  Paper,
} from "@mui/material";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import SwapIcon from '@mui/icons-material/SwapVert';
import Axios from "axios";

export default function TrainSearch() {
  const [formData, setFormData] = React.useState({
    from: "",
    to: "",
    date: null,
    class: "allClasses",
    category: "GENERAL",
  });

  const [trainData , setTrainData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('https://rapidapi.com/IRCTCAPI/api/irctc1/');
        const data = await res.json();
        console.log(data);
        setTrainData(data);
      } catch (error) {
        console.log(error);
      }
    };
  
    fetchData();
  }, []);
  
  
 

  function handleSubmit() {
    console.log("Submitted Successfully!!");
  }

  function handleChange(event) {
    setFormData((prevData) => {
      return {
        ...prevData,
        [event.target.name]: event.target.value,
      };
    });
  }

  const handleDateChange = (date) => {
    setFormData({ ...formData, date: date });
  };

  const handleSwap = () => {
    setFormData((prevData) => {
      return {
        ...prevData,
        from: prevData.to,
        to: prevData.from,
      };
    });
  };

  return (
    <Container maxWidth="sm" sx={{ padding: 4, borderRadius: 8 }}>
      <Paper elevation={3}>
        <Box padding={5}>
          <Typography variant="h5" textAlign={"center"} gutterBottom>
            Start Your Journey
          </Typography>

          <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
              <TextField
                name="from"
                type="text"
                label="From"
                fullWidth
                onChange={handleChange}
                value={formData.from}
              />
            </Grid>

            <Grid item xs={12} sm={12} sx={{ display: "flex", justifyContent: "center" }}>
              <Button onClick={handleSwap} variant="contained" sx={{ marginBottom: 1 }}>
                <SwapIcon/>
              </Button>
            </Grid>

            <Grid item xs={12} sm={12}>
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

          <Grid container spacing={2} alignItems="center" marginTop={3}>
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

            <Grid item xs={12} sm={6}>
              <Typography variant="subtitle1">Category :</Typography>
              <Select
                name="category"
                value={formData.category}
                onChange={handleChange}
                displayEmpty
                fullWidth
              >
                 <MenuItem value="GENERAL">Genaral</MenuItem>
                <MenuItem value="LADIES">LADIES</MenuItem>
                <MenuItem value="LOWER BERTH/SR.CITIZEN">LOWER BERTH/SR.CITIZEN</MenuItem>
                <MenuItem value="PERSON WITH DISABILITY">PERSON WITH DISABILITY</MenuItem>
                <MenuItem value="DUTY PASS">DUTY PASS</MenuItem>
                <MenuItem value="TATKAL">TATKAL</MenuItem>
              </Select>
            </Grid>

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
          </Grid>

          <Button onClick={handleSubmit} fullWidth variant="contained" color="primary" sx={{ marginTop: 4 }}>
            Search
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}
