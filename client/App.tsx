import React from 'react';
import { Route, Routes } from 'react-router-dom';
// import HomePage from './pages/Home';
// import ProfilePage from './pages/Profile';

function App() {
  return (
    <Routes>
      <Route path="/" element={<p>Home page</p>} />
      <Route path="/profile" element={<p>Profile page</p>} />
    </Routes>
  );
}

export default App;
