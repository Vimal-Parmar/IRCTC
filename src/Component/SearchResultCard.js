// import { Grid, Paper, Typography, Button } from "@mui/material";
// import { useNavigate } from "react-router-dom";

// export default function SearchResultCard(props) {
//   const data = props.data;
  
//   let navigate = useNavigate();
  
//   function handleClick() {
//     navigate('/Payment', {state: data});
//   }

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
//             {data.train_name}
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
//             onClick={handleClick}
//           >
//             Book Now
//           </Button>
//         </Paper>
//       </Grid>
//     </Grid>
//   );
// }

import { Grid, Paper, Typography, Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function SearchResultCard(props) {
  const data = props.data;
  let navigate = useNavigate();
  const [hovered, setHovered] = useState(false);

  function handleClick() {
    navigate('/Payment', { state: data });
  }

  return (
    <Grid container spacing={2} alignItems="center" justifyContent="center">
      <Grid item xs={12}>
        <Paper
          sx={{
            backgroundColor: "#E3F2FD", // Light blue background
            width: "100%",
            minHeight: "20vh",
            padding: 3,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            borderRadius: 6,
            boxShadow: hovered
              ? "0px 12px 24px rgba(0, 0, 0, 0.15)"
              : "0px 6px 12px rgba(0, 0, 0, 0.1)",
            transition: "all 0.4s ease",
            transform: hovered ? "translateY(-5px)" : "translateY(0)",
          }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
              mb: 2,
            }}
          >
            <Typography
              variant="h5"
              sx={{
                color: "black",
                fontWeight: "600",
                letterSpacing: "1px",
                textAlign: "left",
              }}
            >
              {data.train_name}
            </Typography>
          </Box>

          <Grid container spacing={1} alignItems="center" justifyContent="space-between">
            <Grid item xs={12} md={4}>
              <Typography sx={{ color: "black", fontWeight: 500 }}>
                {data.from_sta} | {data.train_date} | {data.from_station_name}
              </Typography>
            </Grid>

            <Grid item xs={12} md={4}>
              <Typography sx={{ color: "black", fontWeight: 500 }}>
                Duration: {data.duration}
              </Typography>
            </Grid>

            <Grid item xs={12} md={4}>
              <Typography sx={{ color: "black", fontWeight: 500 }}>
                {data.to_sta} | {data.train_date} | {data.to_station_name}
              </Typography>
            </Grid>
          </Grid>

          <Button
            variant="contained"
            sx={{
              mt: 3,
              backgroundColor: "#43A047",
              color: "#FFFFFF",
              padding: "10px 20px",
              borderRadius: 20,
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: "#66BB6A",
                transform: "scale(1.05)",
              },
            }}
            onClick={handleClick}
          >
            Book Now
          </Button>
        </Paper>
      </Grid>
    </Grid>
  );
}
