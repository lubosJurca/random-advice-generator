import React, {useState, useEffect} from "react"
import Axios from "axios"
import './App.css';

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faDiceFive} from "@fortawesome/free-solid-svg-icons"

function App() {

  const [advice,setAdvice] = useState({
    id: "",
    description: ""
  })

const callAdvice = async() => {
   const data = await Axios.get("https://api.adviceslip.com/advice")
   setAdvice({
     id: data.data.slip.id,
     description: data.data.slip.advice
   })
 
  }


      
useEffect(() => {
  callAdvice()
}, [])

  return (
    <div className="App">

      <div className="wrapper">
        <small>Advice #{advice.id}</small>
        <p>"{advice.description}."</p>
        
      </div>
      <FontAwesomeIcon icon={faDiceFive} className="icon" onClick={callAdvice} />
    </div>
  );
}

export default App;
