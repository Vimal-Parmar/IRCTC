import React, { useState, useEffect } from "react";
import { Grid, Paper, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function BookListCard(props) {
  const data = props.data;
  const handleClick = props.handleClick;
  const navigate = useNavigate();
  const [flag, setFlag] = useState(false);
  const [Track, setTrack] = useState(null);


  useEffect(()=> {

    const fetchData = async () => {
      
    }

    fetchData();
  }, []);
 

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
             {data.train_number} | {data.train_name} 
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
          <Button onClick={() => setFlag(!flag)} >
            Track Train
          </Button>
          {flag && <h1>{data.train_number}</h1>}
          <Button
            variant="contained"
            color="primary"
            sx={{ marginTop: 2, backgroundColor: "#007BFF" }}
            onClick={() => handleClick(data.itemNo)}
          >
            Cancel Ticket
          </Button>
        </Paper>
      </Grid>
    </Grid>
  );
}
