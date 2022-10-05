import React from 'react'
import axios from 'axios'
import { useState } from 'react'

const Peoples = ({persona}) => {
    const [info,setInfo]=useState()
    const [Visible,setVisible]=useState(false)

    const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${persona.name}`
    const config={
      headers:{
          "Content-type": "application/json",
      }
    }
    
    const Busqueda = async() =>{
     const {data} = await axios.get(url,config)
     setInfo(data.extract)
     setVisible(!Visible)
    }
    
  return (
    <>
    <div className='card'>
    <button onClick={Busqueda}>{persona.name}</button>
    {Visible?<p>{info}</p>:null}
    </div>
   </>
  )
}
export default Peoples
