import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddAddress from './pages/AddAddress';
import EditAddress from './pages/EditAddress';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddAddress />} />
        <Route path="/edit" element={<EditAddress />} />
      </Routes>
    </Router>
  );
}

export default App;
