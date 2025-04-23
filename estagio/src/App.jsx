import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import './App.css';
import Register from './Register';
import MainPage from './MainPage'; 

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Estado para controle de login

  const handleLogin = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica de autenticação
    setIsLoggedIn(true); // Simula o login
  };

  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/main" element={isLoggedIn ? <MainPage /> : <Navigate to="/" />} />
        <Route path="/" element={<Login onLogin={handleLogin} />} />
      </Routes>
    </Router>
  );
};

const Login = ({ onLogin }) => {
  return (
    <div className="login-container">
      <h1>Login</h1>
      <form className="login-form" onSubmit={onLogin}> {/* Chama a função de login ao enviar */}
        <div className="form-group">
          <label htmlFor="username">E-mail</label>
          <input type="text" id="username" placeholder="Digite seu e-mail" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Senha</label>
          <input type="password" id="password" placeholder="Digite sua senha" required />
        </div>
        <button type="submit">Entrar</button>
        <div className="register-link">
          <p>Ainda não tem uma conta? <Link to="/register">Cadastre-se</Link></p>
        </div>
      </form>
    </div>
  );
};

export default App;