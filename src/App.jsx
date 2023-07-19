import AppRoutes from "./routes";
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import RegisterPage from './components/registartion/reg';
import LoginPage from './components/registartion/login';
import FireBase from "./firebase";

import style from "./app.module.scss"

function App() {
  return (
    <div className={style.app}>
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/reg" element={<RegisterPage />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;