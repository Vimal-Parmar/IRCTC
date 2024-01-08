import React from 'react';
import { useState } from 'react';
import Paper from "@mui/material/Paper";
import { Grid, TextField, Button,Link,Typography } from '@mui/material';

function SignUp() {

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })

    function handleSubmit() {
        // Add your form submission logic here
    }

    function handleChange(event) {
        setFormData((prevData) => {
            return {
                ...prevData,
                [event.target.name]: event.target.value
            }
        })
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
                    <h2>Sign Up</h2>
                    <form onSubmit={handleSubmit}>

                        <TextField
                            className="email"
                            type="email"
                            label='Email Address'
                            variant="outlined"
                            onChange={handleChange}
                            name="email"
                            value={formData.email}
                            margin="normal"
                            fullWidth
                        />

                        <TextField
                            className="password"
                            type="password"
                            label='Password'
                            variant="outlined"
                            onChange={handleChange}
                            name="password"
                            value={formData.password}
                            margin="normal"
                            fullWidth
                        />

                        
                        <Button variant="contained" color="primary" type="submit" sx={{ marginTop: 2 }}>
                            Submit
                        </Button>
                        <Typography variant="body2" sx={{ marginTop: 2 }}>
                            Alredy have an account? <Link href="./SignIn" variant="body2">Sign In</Link>
                        </Typography>
                    </form>
                </Paper>
            </Grid>
        </Grid>
    )
}

export default SignUp;