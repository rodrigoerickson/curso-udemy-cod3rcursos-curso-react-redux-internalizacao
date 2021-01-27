import './App.css';
import React from 'react';
import Intervalo from './componentes/Intervalo';

function App() {
    return (
        <div className="App">
            <h1>Exercício React-Redux (Simples)</h1>
            <div className="linha">
                <Intervalo></Intervalo>
            </div>
        </div>
    );
}

export default App;