import React from 'react';
import Header from './Header';

const MainPage = ({ onLogout }) => {
    return (
        <div>
            <Header onLogout={onLogout} />
            <div className="main-container">
                <h1>Página Principal</h1>
                <p>Bem-vindo à sua página principal!</p>
                {/* Você pode adicionar mais conteúdo aqui */}
            </div>
        </div>
    );
};

export default MainPage;