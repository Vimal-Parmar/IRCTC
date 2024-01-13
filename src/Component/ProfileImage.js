import React from "react";
import { Paper, Typography, Box } from "@mui/material";
import TrainImage from "./Images/TrainImage.png";

export default function ProfileImage(props) {
  return (
    <Paper elevation={2} style={{ padding: "16px", textAlign: "center" }}>
      <img src={TrainImage} style={{ width: "100%", height: "auto" }} alt="Train" />
      <Box mt={2}>
        <Typography variant="h5">
          {props.firstName ? props.firstName : "Firstname"}
        </Typography>
      </Box>
      <Box mt={1}>
        <Typography>
          User Name : {props.userName ? props.userName : "Username"}
        </Typography>
      </Box>
      <Box mt={1}>
        <Typography>
          Email : {props.email ? props.email : "Email"}
        </Typography>
      </Box>
      <Box mt={1}>
        <Typography>
          Phone No : {props.phonNo ? props.phonNo : "Phone Number"}
        </Typography>
      </Box>
    </Paper>
  );
}
