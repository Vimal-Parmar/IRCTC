import React from 'react';
import { Container, Grid, Typography, IconButton, Box } from '@mui/material';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import HomeIcon from '@mui/icons-material/Home';
import MailIcon from '@mui/icons-material/Mail';

const Footer = () => {
  const daiictLocationLink = 'https://www.google.com/maps/place/DAIICT,+Gandhinagar,+Gujarat';
  const emailAddress = 'mailto:202101500@daiict.ac.in';

  return (
    <footer style={{ marginTop: 'auto', backgroundColor: '#B9EBFF', padding: '20px 0' }}>
      <Typography paddingLeft={2}>
        Get connected with us on social networks  : {" "}
        <IconButton color="inherit" href="https://www.youtube.com/">
          <YouTubeIcon />
        </IconButton>
        <IconButton color="inherit" href="https://www.instagram.com/">
          <InstagramIcon />
        </IconButton>
        <IconButton color="inherit" href="https://github.com/">
          <GitHubIcon />
        </IconButton>
        <IconButton color="inherit" href="https://www.linkedin.com/">
          <LinkedInIcon />
        </IconButton>
      </Typography>

      <hr
        style={{
          color: 'black',
        }}
      />

      <Container maxWidth="lg">
        <Grid container spacing={6}>
          {/* First Column */}
          <Grid item xs={12} md={5}>
            
            <Box>
              <Typography variant="body2" color="inherit">
                This is IRCTC project. 
                Which is made using ReactJs, Firebase, and MUI.
              </Typography>
            </Box>
          </Grid>

          {/* Second Column */}
          <Grid item xs={12} md={5}>
            <Typography variant="h6" gutterBottom>
              CONTACT
            </Typography>

            <Typography variant="body2" color="inherit">
              <HomeIcon />{' '}
              <a href={daiictLocationLink} target="_blank" rel="noopener noreferrer">
                DAIICT, INDIA
              </a>
            </Typography>

            <Typography variant="body2" color="inherit">
              <MailIcon />{' '}
              <a href={emailAddress}>{emailAddress.replace('mailto:', '')}</a>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
