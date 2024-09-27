// import React, { useState, useEffect } from "react";
// import { Grid, Paper, Typography, Button } from "@mui/material";
// import { useNavigate } from "react-router-dom";

// export default function BookListCard(props) {
//   const data = props.data;
//   const handleClick = props.handleClick;
//   const navigate = useNavigate();
//   const [flag, setFlag] = useState(false);
//   const [Track, setTrack] = useState(null);
 

//   return (
//     <Grid container spacing={2} alignItems="center">
//       <Grid item xs={12}>
//         <Paper
//           sx={{
//             backgroundColor: "#B9EBFF",
//             width: "100%",
//             minHeight: "15vh",
//             padding: 2,
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "center",
//             justifyContent: "center",
//             borderRadius: 4,
//             boxShadow: 2,
//           }}
//         >
//           <Typography variant="h6" sx={{ marginBottom: 1 }}>
//              {data.train_number} | {data.train_name} 
//           </Typography>

//           <Grid container spacing={1} alignItems="center" justifyContent="center">
//             <Grid item xs={12} md={4}>
//               <Typography>
//                 {data.from_sta} | {data.train_date} | {data.from_station_name}
//               </Typography>
//             </Grid>
//             <Grid item xs={12} md={4}>
//               <Typography>Duration: {data.duration}</Typography>
//             </Grid>
//             <Grid item xs={12} md={4}>
//               <Typography>
//                 {data.to_sta} | {data.train_date} | {data.to_station_name}
//               </Typography>
//             </Grid>
//           </Grid>
         
//           <Button
//             variant="contained"
//             color="primary"
//             sx={{ marginTop: 2, backgroundColor: "#007BFF" }}
//             onClick={() => handleClick(data.itemNo)}
//           >
//             Cancel Ticket
//           </Button>
//         </Paper>
//       </Grid>
//     </Grid>
//   );
// }


import React, { useState } from "react";
import { Grid, Paper, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function BookListCard(props) {
  const data = props.data;
  const handleClick = props.handleClick;
  const navigate = useNavigate();

  return (
    <Grid container spacing={2} alignItems="center">
      <Grid item xs={12}>
        <Paper
          sx={{
            background: "linear-gradient(135deg, #B9EBFF, #6EC6FF)", // Gradient background
            width: "100%",
            minHeight: "15vh",
            padding: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 4,
            boxShadow: 5, // Enhanced shadow
            transition: "transform 0.3s, box-shadow 0.3s",
            '&:hover': {
              transform: "translateY(-5px)", // Lift effect on hover
              boxShadow: "0 20px 40px rgba(0, 0, 0, 0.2)", // Stronger shadow on hover
            },
          }}
        >
          <Typography variant="h6" sx={{ marginBottom: 1, fontWeight: 'bold', color: '#1A237E' }}>
            {data.train_number} | {data.train_name}
          </Typography>

          <Grid container spacing={1} alignItems="center" justifyContent="center">
            <Grid item xs={12} md={4}>
              <Typography sx={{ color: '#424242' }}>
                {data.from_sta} | {data.train_date} | {data.from_station_name}
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography sx={{ color: '#424242' }}>
                Duration: {data.duration}
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography sx={{ color: '#424242' }}>
                {data.to_sta} | {data.train_date} | {data.to_station_name}
              </Typography>
            </Grid>
          </Grid>

          <Button
            variant="contained"
            color="primary"
            sx={{
              marginTop: 2,
              backgroundColor: "#007BFF",
              padding: '10px 20px',
              borderRadius: '8px',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
              transition: 'background-color 0.3s, transform 0.2s, box-shadow 0.2s',
              '&:hover': {
                backgroundColor: "#0056b3",
                transform: 'translateY(-3px)', // Slight lift on hover
                boxShadow: '0 6px 30px rgba(0, 0, 0, 0.2)',
              },
              '&:active': {
                transform: 'translateY(1px)', // Press effect on active
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
              },
            }}
            onClick={() => handleClick(data.itemNo)}
          >
            Cancel Ticket
          </Button>
        </Paper>
      </Grid>
    </Grid>
  );
}
