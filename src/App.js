import { BrowserRouter, Routes, Route } from "react-router-dom";
import AnimeItem from "./Components/AnimeItem/AnimeItem";

import Homepage from "./Components/Homepage/Homepage";
import React from 'react'


function App() {

  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/anime/:id" element={<AnimeItem />} />


      </Routes>
    </BrowserRouter>

  );
}

export default App;

