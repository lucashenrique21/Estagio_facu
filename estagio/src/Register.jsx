import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css'; // Certifique-se de que o CSS é importado

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica de registro (ex: API)
    setRegistrationSuccess(true);

    // Redireciona para a página de login após 2 segundos
    setTimeout(() => {
      navigate('/');
    }, 2000);
  };

  return (
    <div className="register-container">
      {registrationSuccess ? (
        <div className="success-message"> {/* Adiciona a classe aqui */}
          <h1>Cadastro Concluído!</h1>
          <p>Você será redirecionado para a página de login em breve...</p>
        </div>
      ) : (
        <form className="register-form" onSubmit={handleRegister}>
          <div className="form-group">
            <label htmlFor="username">Usuário</label>
            <input 
              type="text" 
              id="username" 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Digite seu usuário" 
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Digite seu email" 
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Senha</label>
            <input 
              type="password" 
              id="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Digite sua senha" 
              required 
            />
          </div>
          <button type="submit">Cadastrar</button>
        </form>
      )}
    </div>
  );
};

export default Register;