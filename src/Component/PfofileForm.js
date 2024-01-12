import React from "react";
import { useState } from "react";
import { TextField, Button, Grid, Paper, Typography } from "@mui/material";

export default function ProfileForm() {
  const [formData, setFormData] = useState({});

  function handleChange(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
    console.log(formData);
  }

  return (
    <Paper elevation={3} style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
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
        <Button variant="contained" color="primary" style={{ marginTop: "16px" }}>
          Update
        </Button>
      </form>
    </Paper>
  );
}
