// import React from 'react';
// import { useState } from 'react';
// import Paper from "@mui/material/Paper";
// import { Grid, TextField, Button, Link, Typography } from '@mui/material';
// import SignUp from "./SignUp";
// import { Navigate, useNavigate } from 'react-router-dom';
// import { signInWithEmailAndPassword } from 'firebase/auth';
// import { auth } from '../firebase-config';
// import Navbar from "./Navbar"
// import { onAuthStateChanged } from 'firebase/auth';
// import { useEffect} from 'react';

// function SignIn() {

//   const [user, setUser] = useState(null);
//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//       setUser(currentUser);
//     });
//     return () => unsubscribe();
//   }, []);

//   const [formData, setFormData] = useState({
//       email: "",
//       password: ""
//   });


//   let navigate = useNavigate();
//   async function handleSubmit(event) {
//     event.preventDefault();
//     try {
//       await signInWithEmailAndPassword(auth, formData.email, formData.password);
//       navigate("/home");
//     } catch (error) {
//       alert("Login failed. Incorrect email or password.");
//     }
//   }
  


//   function handleChange(event) {
//       setFormData((prevData) => {
//         return {
//           ...prevData,
//           [event.target.name]: event.target.value
//         };
//       });
//   }


//   return (
//       <Grid
//         container
//         spacing={0}
//         direction="column"
//         alignItems="center"
//         justifyContent="center"
//         sx={{ minHeight: '100vh', backgroundColor: '#f0f0f0' }}
//       >
//         <Grid item xs={4}>
//           <Paper elevation={3} sx={{ padding: 3, textAlign: 'center', maxWidth: '400px' }}>
//             <h2>Sign In</h2>
//             <form onSubmit={handleSubmit}>

//               <TextField
//                 type="email"
//                 label='Email Address'
//                 variant="outlined"
//                 onChange={handleChange}
//                 name="email"
//                 value={formData.email}
//                 margin="normal"
//                 fullWidth
//                 sx={{ marginBottom: 2 }}
//               />

//               <TextField
//                 type="password"
//                 label='Password'
//                 variant="outlined"
//                 onChange={handleChange}
//                 name="password"
//                 value={formData.password}
//                 margin="normal"
//                 fullWidth
//                 sx={{ marginBottom: 2 }}
//               />

//               <Button variant="contained" color="primary" type="submit" sx={{ marginTop: 2 }}>
//                 SignIn
//               </Button>

//             </form>
//             <Typography variant="body2" sx={{ marginTop: 2 }}>
//               Don't have an account? <Link href="/SignUp" variant="body2">Sign Up</Link>
//             </Typography>
//           </Paper>
//         </Grid>
//       </Grid>
//     );
// }

// export default SignIn;

import React, { useState, useEffect } from 'react';
import Paper from "@mui/material/Paper";
import { Grid, TextField, Button, Link, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase-config';
import { onAuthStateChanged } from 'firebase/auth';

function SignIn() {
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  let navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, formData.email, formData.password);
      navigate("/home");
    } catch (error) {
      alert("Login failed. Incorrect email or password.");
    }
  }

  function handleChange(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value
    }));
  }

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #e3f2fd 30%, #bbdefb 90%)', // Soft gradient background
      }}
    >
      <Grid item xs={12} sm={8} md={4}>
        <Paper elevation={12} sx={{
          padding: 4,
          textAlign: 'center',
          borderRadius: '16px',
          boxShadow: '0 6px 40px rgba(0,0,0,0.2)',
          background: '#ffffff',
          transition: 'transform 0.3s, box-shadow 0.3s', // Animation effect on hover
          '&:hover': {
            transform: 'scale(1.02)', // Slight scaling effect on hover
            boxShadow: '0 12px 60px rgba(0,0,0,0.3)', // Enhance shadow on hover
          },
        }}>
          <Typography variant="h4" sx={{
            marginBottom: 3,
            fontWeight: 'bold',
            color: '#343a40',
            letterSpacing: '0.5px',
            transition: 'color 0.3s',
            '&:hover': {
              color: '#007bff', // Change color on hover for the title
            },
          }}>
            Sign In
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              type="email"
              label='Email Address'
              variant="outlined"
              onChange={handleChange}
              name="email"
              value={formData.email}
              margin="normal"
              fullWidth
              sx={{
                marginBottom: 2,
                transition: 'border-color 0.3s',
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: '#007bff', // Primary border color
                  },
                  '&:hover fieldset': {
                    borderColor: '#0056b3', // Darker on hover
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#007bff', // Focus border color
                  },
                },
              }}
            />
            <TextField
              type="password"
              label='Password'
              variant="outlined"
              onChange={handleChange}
              name="password"
              value={formData.password}
              margin="normal"
              fullWidth
              sx={{
                marginBottom: 2,
                transition: 'border-color 0.3s',
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: '#007bff', // Primary border color
                  },
                  '&:hover fieldset': {
                    borderColor: '#0056b3', // Darker on hover
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#007bff', // Focus border color
                  },
                },
              }}
            />
            <Button variant="contained" color="primary" type="submit" sx={{
              marginTop: 2,
              borderRadius: '8px',
              padding: '10px 20px',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
              transition: 'background-color 0.3s, transform 0.2s, box-shadow 0.2s',
              '&:hover': {
                backgroundColor: '#0056b3', // Darker color on hover
                transform: 'translateY(-3px)', // Slight lift on hover
                boxShadow: '0 6px 30px rgba(0, 0, 0, 0.2)', // Enhanced shadow on hover
              },
              '&:active': {
                transform: 'translateY(1px)', // Press effect on active
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)', // Reset shadow on active
              },
            }}>
              Sign In
            </Button>
          </form>
          <Typography variant="body2" sx={{ marginTop: 2, color: '#6c757d' }}>
            Don't have an account? <Link href="/SignUp" variant="body2" sx={{ color: '#007bff', fontWeight: 'bold' }}>Sign Up</Link>
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default SignIn;