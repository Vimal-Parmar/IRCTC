// import React, { useState, useEffect } from "react";
// import BookListCard from "./BookListCard";
// import { useParams } from "react-router-dom";
// import { auth, db } from "../firebase-config";
// import { updateDoc, doc, collection, getDocs, getDoc } from "firebase/firestore";
// import { Grid, Box, Container, Typography } from "@mui/material";
// import { useNavigate } from "react-router-dom";
// import { onAuthStateChanged } from 'firebase/auth';



// export default function BookList() {
//   const { id } = useParams();
//   const [user, setUser] = useState(null);
//   useEffect(() => {
//       onAuthStateChanged(auth, (currentUser) =>{
//           setUser(currentUser);
//       })
//   })
//   const usersCollectionRef = collection(db, "Users");
 
//   const [trainDetails, setTrainDetails] = useState(null);
//   useEffect(() => {
//     const getUsers = async () => {
//       try {
//             const useRef = doc(usersCollectionRef, user.email);
//             const userDoc = await getDoc(useRef);
//             const userData = userDoc.data();
//             setTrainDetails(userData.TrainDetails);
//       } catch (error) {
//         console.error("Error fetching user data:", error.message);
//       }
//     };

//     if(user) getUsers();
//   }, [user]);

  
//   let navigate = useNavigate();

//   function handleClick(itemNo){
//         navigate("/CancelTikit" , {state : itemNo})
//   }

  

//   return (
//     <Container maxWidth="md">
//       <Typography variant="h4">Book List</Typography>
//       <hr></hr>
//       <Box marginY={2}>
//         {trainDetails && (
//           <Grid
//             container
//             spacing={{ xs: 1, sm: 1, md: 4, lg: 5 }}
//             justifyContent="center"
//           >
//            {trainDetails.length === 0 &&
//               <Typography variant="h5" sx={{marginTop : 10}}>
//                 You have not booked any Train Ticket.
//               </Typography>
//             }
//             {trainDetails.map((data) => (
//               <Grid
//                 item
//                 key={data.train_number}
//                 xs={12}
//                 sm={12}
//                 sx={{
//                   display: "flex",
//                   justifyContent: "center",
//                   alignItems: "center",
//                   marginTop: 1,
//                 }}
//               >
//                 <BookListCard data={data} handleClick = {handleClick}/>
//               </Grid>
//             ))}
//           </Grid>
//         )}
//       </Box>
//     </Container>
//   );
// }


import React, { useState, useEffect } from "react";
import BookListCard from "./BookListCard";
import { useParams } from "react-router-dom";
import { auth, db } from "../firebase-config";
import { updateDoc, doc, collection, getDocs, getDoc } from "firebase/firestore";
import { Grid, Box, Container, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from 'firebase/auth';

export default function BookList() {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe(); // Clean up subscription on unmount
  }, []);

  const usersCollectionRef = collection(db, "Users");
  const [trainDetails, setTrainDetails] = useState(null);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const useRef = doc(usersCollectionRef, user.email);
        const userDoc = await getDoc(useRef);
        const userData = userDoc.data();
        setTrainDetails(userData.TrainDetails);
      } catch (error) {
        console.error("Error fetching user data:", error.message);
      }
    };

    if (user) getUsers();
  }, [user]);

  let navigate = useNavigate();

  function handleClick(itemNo) {
    navigate("/CancelTikit", { state: itemNo });
  }

  return (
    <Container 
      maxWidth="md" 
      sx={{ 
        backgroundColor: '#E3F2FD', 
        padding: '20px', 
        borderRadius: '8px', 
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)' 
      }}>
      <Typography 
        variant="h4" 
        sx={{ 
          textAlign: 'center', 
          color: '#1E88E5', 
          marginBottom: '20px', 
          fontWeight: 'bold' 
        }}>
        Book List
      </Typography>
      <hr />
      <Box marginY={2}>
        {trainDetails && (
          <Grid
            container
            spacing={{ xs: 1, sm: 1, md: 4, lg: 5 }}
            justifyContent="center"
          >
            {trainDetails.length === 0 &&
              <Typography 
                variant="h5" 
                sx={{ 
                  marginTop: 10, 
                  color: '#FF5722', 
                  fontWeight: 'bold' 
                }}>
                You have not booked any Train Ticket.
              </Typography>
            }
            {trainDetails.map((data) => (
              <Grid
                item
                key={data.train_number}
                xs={12}
                sm={12}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: 1,
                }}
              >
                <Box 
                  sx={{
                    width: '100%', 
                    maxWidth: '600px',  // Increased max width for larger cards
                    transition: 'transform 0.3s', 
                    '&:hover': {
                      transform: 'scale(1.05)', // Scale effect on hover
                    },
                    padding: '20px', // Increased padding for larger content area
                    margin: '5px',
                  }}
                >
                  <BookListCard data={data} handleClick={handleClick} />
                </Box>
              </Grid>
            ))}
          </Grid>
        )}
      </Box>
    </Container>
  );
}
