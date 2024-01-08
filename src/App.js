import SignIn from "./Component/SignIn"
import SignUp from "./Component/SignUp"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


export default function App(){
  return(
    <Router>
    <Routes>
      <Route exact path="/" element = {<SignIn/>}/>
      <Route path="/SignUp" element = {<SignUp/>}/>
    </Routes>
    </Router>
  )
}