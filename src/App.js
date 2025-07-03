// src/App.js
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

function App() {
  const [username, setUsername] = useState(localStorage.getItem('username') || '');
  const [darkMode, setDarkMode] = useState(false);

  // Listen for login changes from Login component via localStorage event
  useEffect(() => {
    const handleStorageChange = () => {
      setUsername(localStorage.getItem('username') || '');
    };
    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  useEffect(() => {
    document.body.className = darkMode ? 'dark' : '';
  }, [darkMode]);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            !username ? (
              <Login onLogin={() => setUsername(localStorage.getItem('username'))} />
            ) : (
              <Navigate to="/dashboard" />
            )
          }
        />
        <Route
          path="/dashboard"
          element={
            username ? (
              <Dashboard
                darkMode={darkMode}
                toggleDarkMode={() => setDarkMode(prev => !prev)}
              />
            ) : (
              <Navigate to="/" />
            )
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
