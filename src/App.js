import React, { useEffect, useState } from "react";
import "./App.css";
import axios from 'axios'
import Photo from './components/photo'

function App() {
 const [photoOfTheDay, setPhotOfTheDay] =useState('')
  useEffect(() => {
   axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
    .then(res => {
      console.log(res.data)
      setPhotOfTheDay(res.data)
    })
    .catch(err => {
      console.log(err)
    })
 },[])
  return (
    <div className="App">
      <Photo photo = {photoOfTheDay} />
    </div>
  );
}

export default App;
