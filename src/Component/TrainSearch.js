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
  const [from,setFrom] = useState({flag:false,data : [{"name":"BAJUD","eng_name":"BAJUD","code":"BJUD","state_name":"GUJARAT"},{"name":"BAJUD","eng_name":"BAJUD","code":"BJUD","state_name":"GUJARAT"},{"name":"BAJUD","eng_name":"BAJUD","code":"BJUD","state_name":"GUJARAT"}]});
  const [to, setTo] = useState( {flag : false, data : [{"name":"BAJUD","eng_name":"BAJUD","code":"BJUD","state_name":"GUJARAT"}]});
  const [searchResult, setSearchResult] = useState({falg : false,data : [{train_number:"22221",train_name:"Rajdhani Express",from_sta:"16:43",to_sta:"09:55",from_station_name:"KALYAN JN",to_station_name:"DELHI HAZRAT NIZAMUDDIN",duration:"17:10",train_date:"02-02-2024",to_day:1},
                                                                          {train_number:"22221",train_name:"Rajdhani Express",from_sta:"16:43",to_sta:"09:55",from_station_name:"KALYAN JN",to_station_name:"DELHI HAZRAT NIZAMUDDIN",duration:"17:10",train_date:"02-02-2024",to_day:1}]});


  // useEffect(() => {
  //     const fetchData = async () => {
          // const url = `https://irctc1.p.rapidapi.com/api/v1/searchStation?query=${formData.from}`;
          // const options = {
          //   method: 'GET',
          //   headers: {
          //     'X-RapidAPI-Key': 'cd652af138mshbc3150ce95fea2ap1bb5e5jsn08663c2e26e8',
          //     'X-RapidAPI-Host': 'irctc1.p.rapidapi.com'
          //   }
          // };

          // try {
          //   const response = await fetch(url, options);
          //   const result = await response.json();
          //   setFrom((prevFrom) => ({ ...prevFrom, data : result.data }));
         
          //   console.log(result);
          // } catch (error) {
          //   console.error(error);
          // }
         
          
     // };
         

      // fetchData();
         
  // }, [formData.from]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //       const url = `https://irctc1.p.rapidapi.com/api/v1/searchStation?query=${formData.to}`;
  //       const options = {
  //         method: 'GET',
  //         headers: {
  //           'X-RapidAPI-Key': 'cd652af138mshbc3150ce95fea2ap1bb5e5jsn08663c2e26e8',
  //           'X-RapidAPI-Host': 'irctc1.p.rapidapi.com'
  //         }
  //       };

  //       try {
  //         const response = await fetch(url, options);
  //         const result = await response.text();
          
  //         setTo((prevTo) => ({ ...prevTo, data : result.data }));
  //          console.log(result.data);
  //       } catch (error) {
  //         console.error(error);
  //       }
  //   };

//     fetchData();

// }, [formData.to]);
  
  
 

  

  function handleSearch() {
    // const { from, to, date, class: travelClass, category } = formData;
  
    // const formattedDate = date ? date.toISOString().split('T')[0] : '';
    // const url = `https://irctc1.p.rapidapi.com/api/v3/trainBetweenStations?fromStationCode=${from}&toStationCode=${to}&dateOfJourney=${formattedDate}&class=${travelClass}&category=${category}`;
  
    // const options = {
    //   method: 'GET',
    //   headers: {
    //     'X-RapidAPI-Key': '4b42f42023msh9311abe3b5f3d1ep1a4713jsnfc0dcab25431',
    //     'X-RapidAPI-Host': 'irctc1.p.rapidapi.com',
    //   },
    // };
  
    // try {
    //   const response = await fetch(url, options);
    //   const result = await response.json();
    //   setSearchResult((prevData) => ({ ...prevData, data: result.data }));
    //   console.log(result);
    // } catch (error) {
    //   console.error(error);
    // }
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
      <Paper elevation={3} marginBottom={3}>
        <Box padding={5}>
          <Typography variant="h5" textAlign={"center"} gutterBottom>
            Start Your Journey
          </Typography>

          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} marginBottom={2}>
              <TextField
                name="from"
                type="text"
                label="From"
                fullWidth
                onChange={handleChange}
                value={formData.from}
              />
                
            </Grid>
           
              {from.flag &&
                <Grid container spacing={{ xs: 1, sm: 1, md: 4, lg: 5 }} justifyContent="center" >
                  {from.data.map((data) => (
                    <Grid item key={data.code} xs={12} sm={12} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                      <Button
                        onClick={()=>{
                          setFormData((prevData) => {
                            return {
                              ...prevData,
                              from: data.name,
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

            <Grid item xs={12} sm={12} marginBottom={3}>
              <TextField
                name="to"
                type="text"
                label="To"
                fullWidth
                onChange={handleChange}
                value={formData.to}
              />
            </Grid>
            
            {to.flag &&

            <Grid container spacing={{ xs: 1, sm: 1, md: 4, lg: 5 }} marginTop={3}>
              {to.data.map((data) => (
                <Grid item key={data.code} xs={12} sm={12} sx={{ display: "flex", justifyContent: "center", alignItems : "center" }}>
                    <Button
                      onClick={()=>{
                        setFormData((prevData) => {
                          return {
                            ...prevData,
                            to : data.name,
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
        {searchResult.data.map((data) => (
          <Grid item key={data.train_number} xs={12} sm={12} sx={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop : 1 }}>
           
              <SearchResultCard data = {data}/>
          
          </Grid>
        ))}
      </Grid>
      }
    </Container>
  );
}
