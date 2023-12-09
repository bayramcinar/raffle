import './App.css';
import Navbar from './components/navbar';
import React, { useRef, useState } from 'react';
import SliderRaffle from './components/sliderRaffle';
import AllRaffles from './components/allRaffles';
import TableRaffle from './components/tableRaffle';
import Footer from './components/footer';

function App() {
  return (
    
    <>
      <Navbar/>
      <SliderRaffle/>
<<<<<<< HEAD
      <TableRaffle/>
      <AllRaffles/>
=======
       <TableRaffle/>
    <AllRaffles/>
>>>>>>> 77e2ac482efcf4501ed4ebe39eb4c72a30e4864c
      <Footer/>
    </>
  );
}

export default App;
