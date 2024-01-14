import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import './App.css'
import Puchvanu from "./Puchvanu";
import ManiGay from "./ManiGay";

function App() {



  return (
    <>
      {/* <Puchvanu /> */}
      {/* <ManiGay /> */}
      <Routes>
        <Route path="/" element={<Puchvanu />} />
        <Route path="/Mani-Gay" element={<ManiGay />} />
      </Routes>

    </>
  )
}

export default App



