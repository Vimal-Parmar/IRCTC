// import React, { useState , useEffect} from "react";
// import {useLocation} from "react-router-dom";
// import {Paper,TextField,Typography,Grid,Select,MenuItem,Button,Container} from "@mui/material";
// import { auth, db } from "../firebase-config";
// import { updateDoc, doc, collection, getDocs, getDoc } from "firebase/firestore";
// import { onAuthStateChanged } from 'firebase/auth';
// import { useNavigate } from "react-router-dom";

// export default function Payment() {

// const location = useLocation();
// // const data = location.state;

// const [fireData, setFireData] = useState({TrainDetails : []});
// let navigate = useNavigate();
// const [flag, setFlag] = useState(false);

// const [user, setUser] = useState(null);
//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//       setUser(currentUser);
//     });
//     return () => unsubscribe();
//   }, []);

// const usersCollectionRef = collection(db, "Users");

//   const [formData, setFormData] = useState({
//     cardNumber: "",
//     month: "",
//     year: "",
//     cvv: "",
//     country: "India",
//   });
  
//   useEffect(() => {
//     const getUsers = async () => {
    
//       try {
//           const userRef = doc(usersCollectionRef, user.email);
//           const userDoc = await getDoc(userRef);
//           setFireData((prevData) => ({ ...prevData, ...userDoc.data() }));
//       } catch (error) {
//         console.error('Error fetching user data:', error.message);
//       }
//     };
//     if (user) {
//       getUsers();
//     }
   
//   }, [user]);
  

  
//   const handleSubmit = () => {
//         //console.log(fireData);
//         const size = fireData.TrainDetails.length + 1;
//         const updatedData = { ...location.state, itemNo: size };
//         setFireData((prevFireData) => ({
//           ...prevFireData,
//           TrainDetails: [...prevFireData.TrainDetails, updatedData],
//         }));
//         //console.log(fireData);
//         setFlag(true);
        
//   };
  
//   useEffect(() => {
//     const updateFirebaseAndNavigate = async () => {
//       try {
//         const useRef = doc(usersCollectionRef, user.email);
//         await updateDoc(useRef, fireData);
//         navigate("/bookList");
//       } catch (error) {
//         console.error("Error updating document:", error.message);
//         alert("Update failed. Please try again.");
//       }  
//     };
//       if(flag) updateFirebaseAndNavigate();
//   }, [ fireData]);
  

//   function handleChange(event) {
//     setFormData((prevData) => {
//       return {
//         ...prevData,
//         [event.target.name]: event.target.value,
//       };
//     });
//   }

//   return (
//     <Container sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "70vh" }}>
//       <Paper style={{ backgroundColor: "#B9EBFF", width: "50%" }} elevation={3} sx={{ p: 4 }}>
//         <Typography variant="h5" gutterBottom>
//           Payment Details
//         </Typography>

//         <Grid container spacing={2}>
//           <Grid item xs={12}>
//             <TextField
//               name="cardNumber"
//               type="text"
//               label="Card Number"
//               fullWidth
//               onChange={handleChange}
//               value={formData.cardNumber}
//             />
//           </Grid>

//           <Grid item xs={12} sm={6}>
//             <TextField
//               name="month"
//               type="text"
//               label="Month"
//               fullWidth
//               onChange={handleChange}
//               value={formData.month}
//             />
//           </Grid>

//           <Grid item xs={12} sm={6}>
//             <TextField
//               name="year"
//               type="text"
//               label="Year"
//               fullWidth
//               onChange={handleChange}
//               value={formData.year}
//             />
//           </Grid>

//           <Grid item xs={12} sm={6}>
//             <TextField
//               name="cvv"
//               type="text"
//               label="CVV"
//               fullWidth
//               onChange={handleChange}
//               value={formData.cvv}
//             />
//           </Grid>

//           <Grid item xs={12} sm={6}>
//             <Typography variant="subtitle1">Select Country:</Typography>
//             <Select
//               name="country"
//               value={formData.country}
//               onChange={handleChange}
//               displayEmpty
//               fullWidth
//             >
//               <MenuItem value="India">India</MenuItem>
//               <MenuItem value="United States">United States</MenuItem>
//               <MenuItem value="Canada">Canada</MenuItem>
//             </Select>
//           </Grid>

//           <Grid item xs={12}>
//             <Button variant="contained" color="primary" fullWidth onClick={handleSubmit}>
//               Pay Now
//             </Button>
//           </Grid>
//         </Grid>
//       </Paper>
//     </Container>
//   );
// }


import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Paper, TextField, Typography, Grid, Select, MenuItem, Button, Container } from "@mui/material";
import { auth, db } from "../firebase-config";
import { updateDoc, doc, collection, getDoc } from "firebase/firestore";
import { onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from "react-router-dom";

export default function Payment() {
  const location = useLocation();
  const [fireData, setFireData] = useState({ TrainDetails: [] });
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
        const userRef = doc(usersCollectionRef, user.email);
        const userDoc = await getDoc(userRef);
        setFireData((prevData) => ({ ...prevData, ...userDoc.data() }));
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
    const updatedData = { ...location.state, itemNo: size };
    setFireData((prevFireData) => ({
      ...prevFireData,
      TrainDetails: [...prevFireData.TrainDetails, updatedData],
    }));
    setFlag(true);
  };

  useEffect(() => {
    const updateFirebaseAndNavigate = async () => {
      try {
        const useRef = doc(usersCollectionRef, user.email);
        await updateDoc(useRef, fireData);
        navigate("/bookList");
      } catch (error) {
        console.error("Error updating document:", error.message);
        alert("Update failed. Please try again.");
      }
    };
    if (flag) updateFirebaseAndNavigate();
  }, [fireData]);

  function handleChange(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }

  return (
    <Container sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", backgroundColor: '#E1F5FE', padding: 0 }}>
      <Paper
        style={{
          width: "600px", // Increased width for the Paper component
          padding: "2rem", // Adjust padding for better layout
          borderRadius: "20px",
          boxShadow: "0 8px 40px rgba(0, 0, 0, 0.2)", // Increased shadow for depth
          transition: '0.3s', // Smooth transition for hover effect
          '&:hover': {
            boxShadow: '0 16px 60px rgba(0, 0, 0, 0.3)', // Deeper shadow on hover
            transform: 'scale(1.02)', // Slightly enlarge on hover
          },
        }}
        elevation={3}
      >
        <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', color: "#1E88E5", fontWeight: "bold", mb: 3 }}>
          Payment Details
        </Typography>

        <Grid container spacing={2}>
          {["cardNumber", "month", "year", "cvv"].map((field, index) => (
            <Grid item xs={12} sm={6} key={field}>
              <TextField
                name={field}
                type="text"
                label={field === "cardNumber" ? "Card Number" : field.charAt(0).toUpperCase() + field.slice(1)}
                fullWidth
                onChange={handleChange}
                value={formData[field]}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: '#B0BEC5',
                    },
                    '&:hover fieldset': {
                      borderColor: '#80CBC4',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#1E88E5',
                    },
                    '&:focus': {
                      boxShadow: '0 0 5px rgba(30, 136, 229, 0.5)',
                      transition: 'box-shadow 0.3s ease-in-out',
                    },
                  },
                }}
              />
            </Grid>
          ))}

          <Grid item xs={12} sm={6}>
            <Typography variant="subtitle1" sx={{ color: "#1E88E5", mb: 1 }}>Select Country:</Typography>
            <Select
              name="country"
              value={formData.country}
              onChange={handleChange}
              displayEmpty
              fullWidth
              sx={{
                '& .MuiSelect-select': {
                  backgroundColor: "#E1F5FE",
                },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: '#B0BEC5',
                  },
                  '&:hover fieldset': {
                    borderColor: '#80CBC4',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#1E88E5',
                  },
                  '&:focus': {
                    boxShadow: '0 0 5px rgba(30, 136, 229, 0.5)',
                    transition: 'box-shadow 0.3s ease-in-out',
                  },
                },
              }}
            >
              <MenuItem value="India">India</MenuItem>
              <MenuItem value="United States">United States</MenuItem>
              <MenuItem value="Canada">Canada</MenuItem>
            </Select>
          </Grid>

          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={handleSubmit}
              sx={{
                backgroundColor: '#1E88E5',
                '&:hover': {
                  backgroundColor: '#1565C0',
                  transform: 'scale(1.05)', // Scale effect on hover
                  transition: 'transform 0.3s ease-in-out', // Smooth transition for scale effect
                },
                borderRadius: "8px",
                transition: 'background-color 0.3s ease-in-out', // Smooth transition for background color
                boxShadow: '0 4px 20px rgba(30, 136, 229, 0.2)', // Add shadow to button
                '&:active': {
                  boxShadow: '0 2px 10px rgba(30, 136, 229, 0.5)', // Change shadow on click
                },
              }}
            >
              Pay Now
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}
