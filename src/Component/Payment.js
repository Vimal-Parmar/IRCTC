import React, { useState , useEffect} from "react";
import {useLocation} from "react-router-dom";
import {Paper,TextField,Typography,Grid,Select,MenuItem,Button,Container} from "@mui/material";
import { auth, db } from "../firebase-config";
import { updateDoc, doc, collection, getDocs } from "firebase/firestore";
import { onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from "react-router-dom";

export default function Payment() {

const location = useLocation();
// const data = location.state;
const [data,setData] = useState({...location.state, itemNo : -1});
const [fireData, setFireData] = useState({TrainDetails : []});
let navigate = useNavigate();
const [flag, setFlag] = useState(false);

const [user, setUser] = useState(null);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

const usersCollectionRef = collection(db, "Users");

  const [formData, setFormData] = useState({
    cardNumber: "",
    month: "",
    year: "",
    cvv: "",
    country: "India",
  });
  
  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await getDocs(usersCollectionRef);
        response.forEach((doc) => {
          const userData = doc.data();
  
          if (user && userData.uid === user.uid) {
            setFireData({ ...fireData, ...userData, id: doc.id });
            
          }
        });
  
      } catch (error) {
        console.error('Error fetching user data:', error.message);
      }
    };
  
    if (user) {
      getUsers();
    }
  
  }, [user]);
  

  
  const handleSubmit = () => {
    
    const size = fireData.TrainDetails.length + 1;
    
    setData((prevData) => ({...prevData, itemNo : size}))
   {data.itemNo!==-1 && setFireData((prevData) => ({
      ...prevData,
      TrainDetails: [...prevData.TrainDetails, data],
    }));}
    
    setFlag(true);
  };

  useEffect(() => {
    const updateFirebaseAndNavigate = async () => {
      try {
        const userDoc = doc(db, "Users", fireData.id);
        await updateDoc(userDoc, fireData);
        navigate(`/bookList/${user?.uid}`);
      } catch (error) {
        console.error("Error updating document:", error.message);
        alert("Update failed. Please try again.");
      }  
    };
      if(flag) updateFirebaseAndNavigate();
  }, [ fireData]);
  

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
      <Paper style={{ backgroundColor: "#B9EBFF", width: "50%" }} elevation={3} sx={{ p: 4 }}>
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
            <Button variant="contained" color="primary" fullWidth onClick={handleSubmit}>
              Pay Now
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}
