import React from 'react';
import { useState } from 'react';
import Paper from "@mui/material/Paper";
import { Grid, TextField, Button, Link, Typography } from '@mui/material';
import SignUp from "./SignUp";
import { Navigate, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase-config';
import Navbar from "./Navbar"
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect} from 'react';

function SignIn() {

  const [user, setUser] = useState(null);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const [formData, setFormData] = useState({
      email: "",
      password: ""
  });


  let navigate = useNavigate();
  async function handleSubmit(event) {
    event.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, formData.email, formData.password);
      navigate(`/home/${user?.uid}`);
    } catch (error) {
      alert("Login failed. Please check your email and password.");
    }
  }
  


  function handleChange(event) {
      setFormData((prevData) => {
        return {
          ...prevData,
          [event.target.name]: event.target.value
        };
      });
  }


  return (
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ minHeight: '100vh', backgroundColor: '#f0f0f0' }}
      >
        <Grid item xs={4}>
          <Paper elevation={3} sx={{ padding: 3, textAlign: 'center', maxWidth: '400px' }}>
            <h2>Sign In</h2>
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
                sx={{ marginBottom: 2 }}
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
                sx={{ marginBottom: 2 }}
              />

              <Button variant="contained" color="primary" type="submit" sx={{ marginTop: 2 }}>
                SignIn
              </Button>

            </form>
            <Typography variant="body2" sx={{ marginTop: 2 }}>
              Don't have an account? <Link href="/SignUp" variant="body2">Sign Up</Link>
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    );
}

export default SignIn;
