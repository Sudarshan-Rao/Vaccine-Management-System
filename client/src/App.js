import React from "react"
import RegisterPatient from "./Components/RegisterPatient";
import Header from "./Components/Header";
import Statistics from "./Components/Statistics";
import { Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={ <Statistics/>} />
        <Route path="register" element={<RegisterPatient />} />
      </Route>
    </Routes>
  );
}

export default App;
