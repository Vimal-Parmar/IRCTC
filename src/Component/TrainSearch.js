import React from "react";
import { useState, useEffect } from "react";
import {
  Grid,
  Container,
  Typography,
  Box,
  TextField,
  Select,
  MenuItem,
  Button,
  Paper,
} from "@mui/material";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import SwapIcon from '@mui/icons-material/SwapVert';
import StationListCard from "./StationListCard";
import SearchResultCard from "./SearchResultCard";
import Axios from "axios";

export default function TrainSearch() {
  const [formData, setFormData] = React.useState({
    from: "",
    to: "",
    date: null,
    class: "allClasses",
    category: "GENERAL",
  });

  const [trainData , setTrainData] = useState(null);
  const [from,setFrom] = useState({flag:false,data : [{name:"NEW DELHI",code:"NDLS",state_name:"DELHI"},{name:"NEW DELHI",code:"NDLS",state_name:"DELHI"},{name:"NEW DELHI",code:"NDLS",state_name:"DELHI"}]});
  const [to, setTo] = useState( {flag : false, data : [{name:"NEW DELHI",code:"NDLS",state_name:"DELHI"},{name:"NEW DELHI",code:"NDLS",state_name:"DELHI"},{name:"NEW DELHI",code:"NDLS",state_name:"DELHI"}]});
  const [searchResult, setSearchResult] = useState({falg : false,data : [{train_number:"22221",train_name:"Rajdhani Express",from_sta:"16:43",to_sta:"09:55",from_station_name:"KALYAN JN",to_station_name:"DELHI HAZRAT NIZAMUDDIN",duration:"17:10",train_date:"02-02-2024",to_day:1},
                                                                          {train_number:"22221",train_name:"Rajdhani Express",from_sta:"16:43",to_sta:"09:55",from_station_name:"KALYAN JN",to_station_name:"DELHI HAZRAT NIZAMUDDIN",duration:"17:10",train_date:"02-02-2024",to_day:1}]});


  // useEffect(() => {
  //     const fetchData = async () => {
  //       const url = `https://irctc1.p.rapidapi.com/api/v1/searchStation?query=${formData.from}`;
  //       const options = {
  //         method: 'GET',
  //         headers: {
  //           'X-RapidAPI-Key': 'c80551d8b3mshacfc31ebe2fe6e1p1dfd93jsn5b404ec019d0',
  //           'X-RapidAPI-Host': 'irctc1.p.rapidapi.com'
  //         }
  //       };
        
  //       try {
  //         const response = await fetch(url, options);
  //         const result = await response.json();
  //          setFrom((prevFrom) => ({ ...prevFrom, data : result.data }));
  //        console.log(result.data);
         
  //         console.log(result);
  //       } catch (error) {
  //         console.error(error);
  //       }
         
          
  //    };
         

  //     if(from.flag) {console.log("active"); fetchData();}
         
  // }, [formData.from]);




//   useEffect(() => {
//         const fetchData = async () => {
//         const url = `https://irctc1.p.rapidapi.com/api/v1/searchStation?query=${formData.to}`;
//         const options = {
//           method: 'GET',
//           headers: {
//             'X-RapidAPI-Key': 'c80551d8b3mshacfc31ebe2fe6e1p1dfd93jsn5b404ec019d0',
//             'X-RapidAPI-Host': 'irctc1.p.rapidapi.com'
//           }
//         };
        
//         try {
//           const response = await fetch(url, options);
//           const result = await response.json();
//            setTo((prevTo) => ({ ...prevTo, data : result.data }));
//          console.log(result.data);
         
//           console.log(result);
//         } catch (error) {
//           console.error(error);
//         }
         
          
//      };

//     if(to.flag) fetchData();

// }, [formData.to]);
  
  
//  useEffect(() => {

//         const fetchData = async () => {
//           const date = formData.date;

          
//             const opt = {
//               year: 'numeric',
//               month: '2-digit',
//               day: '2-digit',
//               timeZone: 'Asia/Kolkata'
//             };
          
//             const formattedDate = date.toLocaleDateString('en-IN', opt).split('/').reverse().join('-');
//             console.log(formattedDate);
         
          
          
          
//           const url = `https://irctc1.p.rapidapi.com/api/v3/trainBetweenStations?fromStationCode=${formData.from}&toStationCode=${formData.to}&dateOfJourney=${formattedDate}`;
//           const options = {
//             method: 'GET',
//             headers: {
//               'X-RapidAPI-Key': '96250f1e8fmsh1949ec684ff7520p10deb7jsna6e3f7a38d07',
//               'X-RapidAPI-Host': 'irctc1.p.rapidapi.com'
//             }
//           };       

//           try {
//             const response = await fetch(url, options);
//             const result = await response.json();
//             setSearchResult((prevData) => ({ ...prevData, data: result.data }));
//             console.log(result);
//             console.log(result.data);
//           } catch (error) {
//             console.error(error);
//           }

//           console.log("run");
//       };

//     if(searchResult.flag === true) fetchData();
//  },[searchResult.flag])

  

  function handleSearch() {
    setSearchResult(prevData => ({...prevData, flag : true}));
  }

  function handleChange(event) {
    setFormData((prevData) => {
      return {
        ...prevData,
        [event.target.name]: event.target.value,
      };
    });
    if(event.target.name === "from") setFrom((prevFrom) => ({ ...prevFrom, flag: true }));
    if(event.target.name === "to") setTo((prevTo) => ({ ...prevTo, flag: true }));

  }

  const handleDateChange = (date) => {
    setFormData({ ...formData, date: date });
  };

  const handleSwap = () => {
    setFormData((prevData) => {
      return {
        ...prevData,
        from: prevData.to,
        to: prevData.from,
      };
    });
  };
  
  return (
    <Container maxWidth="sm" sx={{ padding: 4, borderRadius: 8 }}>
      <Paper elevation={3} >
        <Box padding={5}>
          <Typography variant="h5" textAlign={"center"} gutterBottom>
            Start Your Journey
          </Typography>

          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} sx={{marginBottom : 3}}>
              <TextField
                name="from"
                type="text"
                label="From"
                fullWidth
                onChange={handleChange}
                value={formData.from}
              />
                {/* ///////////////////////////////////////////// serch in from BVI///////////////////////////////////////////////////// */}
            </Grid>
           
              {from.flag &&
                <Grid container spacing={{ xs: 1, sm: 1, md: 4, lg: 5 }} justifyContent="center" >
                  { from.data && from.data.map((data) => (
                    <Grid item key={data.code} xs={12} sm={12} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                      <Button
                        onClick={()=>{
                          setFormData((prevData) => {
                            return {
                              ...prevData,
                              from: data.code,
                            };
                          });
                          setFrom((prevFrom) => ({ ...prevFrom, flag: false }));
                          
                        }}
                        style={{ width: "90%", padding: 0, display: "flex", alignItems: "center" }}
                      >
                        <StationListCard name={data.name} code={data.code} state={data.state_name} />
                      </Button>
                    </Grid>
                  ))}
                </Grid>
              }
           


            <Grid item xs={12} sm={12} sx={{ display: "flex", justifyContent: "center" }}>
              <Button onClick={handleSwap} variant="contained" sx={{ marginBottom: 1 }}>
                <SwapIcon/>
              </Button>
            </Grid>

            <Grid item xs={12} sm={12} sx={{marginBottom : 3}}>
              <TextField
                name="to"
                type="text"
                label="To"
                fullWidth
                onChange={handleChange}
                value={formData.to}
              />

              {/* ////////////////////////////////////////// serch in to NDLS //////////////////////////////////////////////// */}
            </Grid>
            
            {to.flag &&

            <Grid container spacing={{ xs: 1, sm: 1, md: 4, lg: 5 }} marginTop={3}>
              {to.data && to.data.map((data) => (
                <Grid item key={data.code} xs={12} sm={12} sx={{ display: "flex", justifyContent: "center", alignItems : "center" }}>
                    <Button
                      onClick={()=>{
                        setFormData((prevData) => {
                          return {
                            ...prevData,
                            to : data.code,
                          };
                        });
                        setTo((prevTo) => ({ ...prevTo, flag: false }));
                        
                      }}
                      style={{ width: "90%", padding: 0, display: "flex", alignItems: "center" }}
                    >
                  <StationListCard name={data.name} code={data.code} state={data.state_name} />
                  </Button>
                </Grid>
              ))}
            </Grid>
            }

          </Grid>

          <Grid container spacing={2} alignItems="center" marginTop={3}>
            <Grid item xs={12} sm={6}>
              <Typography variant="subtitle1">Select Class:</Typography>
              <Select
                name="class"
                value={formData.class}
                onChange={handleChange}
                displayEmpty
                fullWidth
              >
                 <MenuItem value="allClasses">All classes</MenuItem>
                <MenuItem value="2S">Second Seating (2S)</MenuItem>
                <MenuItem value="3A">AC 2 Tier (3A)</MenuItem>
                <MenuItem value="CC">AC Chair Car</MenuItem>
                <MenuItem value="EC">Exec. Chair Car</MenuItem>
              </Select>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Typography variant="subtitle1">Category :</Typography>
              <Select
                name="category"
                value={formData.category}
                onChange={handleChange}
                displayEmpty
                fullWidth
              >
                 <MenuItem value="GENERAL">Genaral</MenuItem>
                <MenuItem value="LADIES">LADIES</MenuItem>
                <MenuItem value="LOWER BERTH/SR.CITIZEN">LOWER BERTH/SR.CITIZEN</MenuItem>
                <MenuItem value="PERSON WITH DISABILITY">PERSON WITH DISABILITY</MenuItem>
                <MenuItem value="DUTY PASS">DUTY PASS</MenuItem>
                <MenuItem value="TATKAL">TATKAL</MenuItem>
              </Select>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Typography variant="subtitle1">Select Date:</Typography>
              <DatePicker
                selected={formData.date}
                onChange={handleDateChange}
                dateFormat="dd/MM/yyyy"
                placeholderText="Select a date"
                fullWidth
              />
            </Grid>
          </Grid>

          <Button onClick={handleSearch} fullWidth variant="contained" color="primary" sx={{ marginTop: 4 }}>
            Search
          </Button>
        </Box>
      </Paper>

      {searchResult.flag && 
        <Grid container spacing={{ xs: 1, sm: 1, md: 4, lg: 5 }} justifyContent="center" >
        {searchResult.data && searchResult.data.map((data) => (
          <Grid item key={data.train_number} xs={12} sm={12} sx={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop : 1 }}>
           
              <SearchResultCard data = {data}/>
          
          </Grid>
        ))}
      </Grid>
      }
    </Container>
  );
}
