import React from 'react';
import './App.css';
import Intervalo from './componentes/Intervalo';
import Media from './componentes/Media';
import Soma from './componentes/Soma';
import Sorteio from './componentes/Sorteio';

function App() {

    return (
        <div className="App">
            <h1>Exercício React-Redux (Simples)</h1>
            <div className="linha">
                <Intervalo></Intervalo>
            </div>
            <div className="linha">
                <Media></Media>
                {/* <Soma></Soma> */}
                {/* <Sorteio></Sorteio> */}
            </div>
        </div>
    );
}

export default App;
