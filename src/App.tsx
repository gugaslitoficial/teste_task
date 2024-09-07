import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/login';      // Verifique se o nome do arquivo é login.tsx
import Register from './pages/register';  // Verifique se o nome do arquivo é register.tsx
import Dashboard from './pages/dashboard'; // Verifique se o nome do arquivo é dashboard.tsx

export default function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}