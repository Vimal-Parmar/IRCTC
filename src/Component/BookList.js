import React, { useState, useEffect } from "react";
import BookListCard from "./BookListCard";
import { useParams } from "react-router-dom";
import { auth, db } from "../firebase-config";
import { updateDoc, doc, collection, getDocs } from "firebase/firestore";
import { Grid, Box, Container, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from 'firebase/auth';



export default function BookList() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  useEffect(() => {
      onAuthStateChanged(auth, (currentUser) =>{
          setUser(currentUser);
      })
  })
  const usersCollectionRef = collection(db, "Users");
 
  const [trainDetails, setTrainDetails] = useState(null);
  useEffect(() => {
    const getUsers = async () => {
      try {
        const data = await getDocs(usersCollectionRef);
        data.docs.forEach((doc) => {
          const userData = doc.data();

          if (userData.email === user.email) {
            setTrainDetails(userData.TrainDetails);
          }
        });

      } catch (error) {
        console.error("Error fetching user data:", error.message);
      }
    };

    if(user) getUsers();
  }, [user]);

  
  let navigate = useNavigate();

  function handleClick(itemNo){
        navigate("/CancelTikit" , {state : itemNo})
  }

  

  return (
    <Container maxWidth="md">
      <Typography variant="h4">Book List</Typography>
      <hr></hr>
      <Box marginY={2}>
        {trainDetails && (
          <Grid
            container
            spacing={{ xs: 1, sm: 1, md: 4, lg: 5 }}
            justifyContent="center"
          >
           {trainDetails.length === 0 &&
              <Typography variant="h5" sx={{marginTop : 10}}>
                You have not booked any Train Ticket.
              </Typography>
            }
            {trainDetails.map((data) => (
              <Grid
                item
                key={data.train_number}
                xs={12}
                sm={12}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: 1,
                }}
              >
                <BookListCard data={data} handleClick = {handleClick}/>
              </Grid>
            ))}
          </Grid>
        )}
      </Box>
    </Container>
  );
}
