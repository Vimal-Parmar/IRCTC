import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  TextField,
  Button,
  Grid,
  Paper,
  Typography,
  Box,
  Container,
} from "@mui/material";
import { auth, db } from "../firebase-config";
import { updateDoc, doc, collection, getDocs } from "firebase/firestore";
import ProfileImage from "./ProfileImage";
import { onAuthStateChanged } from "firebase/auth";

export default function ProfileForm() {
  const { id } = useParams();
  const [formData, setFormData] = useState({});
  const usersCollectionRef = collection(db, "Users");
  // console.log(id);
  const [user, setUser] = useState({});


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);



  useEffect(() => {
    const getUsers = async () => {
      try {
        const data = await getDocs(usersCollectionRef);
        
        data.docs.forEach((doc) => {
          const userData = doc.data();
          if (userData.email === user.email) {
            setFormData((prevData) => ({ ...prevData, ...userData, id: doc.id }));
          }
        });

      } catch (error) {
        console.error('Error fetching user data:', error.message);
      }
    };
    if(user)
     getUsers();
  }, [user]);

  

  function handleChange(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }

  const handleSubmit = async () => {
    try {
        const userDoc = doc(db, "Users", formData.id);
        console.log(userDoc.data);
        await updateDoc(userDoc, formData);
        alert("Update successful!");
      } catch (error) {
        console.error("Error updating document:", error.message);
        alert("Update failed. Please try again.");
      }
  };

  return (
    <Container maxWidth="lg">
      <Grid container spacing={{ xs: 1, sm: 1, md: 4, lg: 5 }}>
        <Grid item xs={12} sm={4} marginTop={3}>
          <Box >
            <ProfileImage
              firstName={formData.firstName}
              email={formData.email}
              userName={formData.userName}
              phonNo={formData.phonNo}
            />
          </Box>
        </Grid>

        <Grid item xs={12} sm={8} marginBottom={5}>
          <Box paddingTop={{ xs: 2, sm: 4 }}>
            <Paper elevation={3} style={{ padding: "20px", maxWidth: "500px", margin: "auto" }}>
              <form>
                <Grid container spacing={2} direction="column">
                <Grid item>
                        <TextField
                        label="First Name"
                        type="text"
                        name="firstName"
                        onChange={handleChange}
                        value={formData.firstName || ""}
                        fullWidth
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                        label="Middle Name"
                        type="text"
                        name="middleName"
                        onChange={handleChange}
                        value={formData.middleName || ""}
                        fullWidth
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                        label="Last Name"
                        type="text"
                        name="lastName"
                        onChange={handleChange}
                        value={formData.lastName || ""}
                        fullWidth
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                        label="User Name"
                        type="text"
                        name="userName"
                        onChange={handleChange}
                        value={formData.userName || ""}
                        fullWidth
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                        label="Email"
                        type="email"
                        name="email"
                        onChange={handleChange}
                        value={formData.email || ""}
                        fullWidth
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                        label="Date of Birth"
                        type="text"
                        name="dateOfBirth"
                        onChange={handleChange}
                        value={formData.dateOfBirth || ""}
                        fullWidth
                        />
                    </Grid>
                    <Grid item>
                        <Typography>Gender</Typography>
                    </Grid>
                    <Grid item sx={{ display: "flex", gap: "16px" }}>
                        <TextField
                        type="radio"
                        name="gender"
                        value="male"
                        onChange={handleChange}
                        checked={formData.gender === "male"}
                        />
                        <Typography>Male</Typography>
                        <TextField
                        type="radio"
                        name="gender"
                        value="female"
                        onChange={handleChange}
                        checked={formData.gender === "female"}
                        />
                        <Typography>Female</Typography>
                        <TextField
                        type="radio"
                        name="gender"
                        value="other"
                        onChange={handleChange}
                        checked={formData.gender === "other"}
                        />
                        <Typography>Other</Typography>
                    </Grid>
                    <Grid item>
                        <TextField
                        label="Phone No."
                        type="text"
                        name="phonNo"
                        onChange={handleChange}
                        value={formData.phonNo || ""}
                        fullWidth
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                        label="State"
                        type="text"
                        name="state"
                        onChange={handleChange}
                        value={formData.state || ""}
                        fullWidth
                        />
                    </Grid>
                </Grid>
                <Button variant="contained" color="primary" style={{ marginTop: "16px", display :"flex", alignItems : "center" }}  onClick={handleSubmit}>
                  Update
                </Button>
              </form>
            </Paper>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
