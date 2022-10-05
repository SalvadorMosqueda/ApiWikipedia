import { useState,useEffect } from 'react'
import reactLogo from './assets/space.jpg'
import axios from 'axios'
import Peoples  from './Peoples'

import './App.css'

function App() {
  const [Personas, setPeoples] = useState([])
  const url = 'http://api.open-notify.org/astros.json?fbclid=IwAR1YX_E2Xwv3hcMI-oNEi4PKUax1BJL9iI_gG8ODVwMGFUsovlREGkQEdvk'
  const config={
    headers:{
        "Content-type": "application/json",
    }
  }
  useEffect(()=>{
   const Peticion = async ()=>{
    const {data} = await axios.get(url,config)
    setPeoples(data.people)
   }
   Peticion()
  },[])

  return (
    <>
      {Personas.map((persona,index) =>(
        <Peoples key={index} persona={persona}/>
   )
    
    )}
    </>

  )

}

export default App
