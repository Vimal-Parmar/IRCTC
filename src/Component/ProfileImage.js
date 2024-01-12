import React  from "react"
import { useState, useEffect } from "react"
import {auth} from "../firebase-config"
import { onAuthStateChanged } from "firebase/auth"
import { Paper, Typography, Box } from "@mui/material"
import TrainImage from "./Images/TrainImage.png";

export default function ProfileImage(props){
   
   

    return(
       <Paper elevation={2}>
       <img src={TrainImage} sx ={{width : "100%", height : "100%"}}/>
       <Box>
        <Typography variant="h5">
            {props.firstName}
        </Typography>
       </Box>
       <Box>
        <Typography>
            {props.userName}
        </Typography>
       </Box>
       <Box>
        <Typography>
            {props.email}
        </Typography>
       </Box>
       <Box>
        <Typography>
            {props.phoneNo}
        </Typography>
       </Box>
       </Paper>
    )
}