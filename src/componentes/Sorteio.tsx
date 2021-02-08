import React from "react";
import { connect } from 'react-redux';
import Card from "./Card";
import { numeros } from './interfaces';

function Sorteio(props: any) {
    const { min, max } = props;
    const aleatorio = parseInt((Math.random() * (parseInt(max) - parseInt(min))) + min);
    return (
        <Card title="Sorteio de um Números" color="Purple">
            <div>
                <span>
                    <span>Resultado: </span>
                    <strong>{aleatorio}</strong>
                </span>
            </div>
        </Card>
    );
}

function mapStateToProp(state:{numeros:numeros}) {
    return {
        min: state.numeros.min,
        max: state.numeros.max,
    };
}

export default connect(mapStateToProp)(Sorteio);
