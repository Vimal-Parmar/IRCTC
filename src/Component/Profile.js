import { Typography,Container,Grid,Box } from "@mui/material"
import ProfileImage from "./ProfileImage"
import ProfileForm from "./PfofileForm"
import React from "react";
import { useParams } from "react-router-dom";


export default function Profile(){
    const {id} = useParams();

    const [formData, setFormData] = React.useState({email : "",password : ""});
  
    return(

            <Container maxWidth="lg">
            <Grid container spacing={{ xs: 2, sm: 3, md: 4, lg: 5 }}>
                <Grid item xs={12} sm={6}>
                <Box padding={{ xs: 2, sm: 5 }}>
                    <ProfileImage
                     firstName = "abc"
                     userName = "abc"
                     email = "a"
                     phoneNo = "ab"
                    /> 
                </Box>
                </Grid>

                <Grid item xs={12} sm={6}>
                <Box paddingTop={{ xs: 2, sm: 4 }}>
                    <Typography variant ="h3">
                        <ProfileForm/>
                    </Typography>
                </Box>
                </Grid>
            </Grid>
            </Container>
           
      

    )
}