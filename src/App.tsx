import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { PATH } from './constants';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path={PATH.home} element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
