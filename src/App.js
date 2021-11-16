import React from 'react';
import './App.css';
import Payrollform from './components/payroll-form/Payrollform.jsx';
import Home from './components/home/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<Payrollform />} />
          <Route exact path="/update/:id" element={<Payrollform />}></Route>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;