import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const Header = ({ onLogout }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        onLogout(); // Chama a função de logout passada como prop
        navigate('/'); // Redireciona para a página de login
    };

    return (
        <header style={headerStyle}>
            <div style={logoStyle}>
                <FontAwesomeIcon icon={faUserCircle} size="2x" />
                <span style={titleStyle}>Perfil</span>
            </div>
            <nav style={navStyle}>
                <button onClick={handleLogout} style={buttonStyle}>Logout</button>
                <button onClick={() => navigate('/main')} style={buttonStyle}>Voltar</button>
            </nav>
        </header>
    );
};

const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#6a0dad',
    color: 'white',
};

const logoStyle = {
    display: 'flex',
    alignItems: 'center',
};

const titleStyle = {
    marginLeft: '10px',
    fontSize: '1.5rem',
};

const navStyle = {
    display: 'flex',
    gap: '10px',
};

const buttonStyle = {
    backgroundColor: 'transparent',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    fontSize: '1rem',
};

export default Header;