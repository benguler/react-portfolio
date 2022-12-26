import React, {useState} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './Home'
import Calculator from './Calculator/Calculator';
import ToDoTracker from './ToDoTracker/ToDoTracker';
import Navbar from './Navbar';

const App = () => {
  return(
    <div>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/calculator' element={<Calculator />} />
        <Route path='/todotracker' element={<ToDoTracker />} />
      </Routes>
    </div>
  );

}

export default App;
