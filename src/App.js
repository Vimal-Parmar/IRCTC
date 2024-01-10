import SignIn from "./Component/SignIn"
import SignUp from "./Component/SignUp"
import Home from "./Component/Home"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigate } from "react-router-dom";


export default function App(){
  return(
    <Router>
      <Routes>
        <Route exact path = "/" element = {<Navigate to = {"/SignIn"}/>}/>
        <Route path="/SignIn" element = {<SignIn/>}/>
        <Route path="/SignUp" element = {<SignUp/>}/>
        <Route path="/home" element = {<Home/>}/>
      </Routes>
    </Router>


  )
}