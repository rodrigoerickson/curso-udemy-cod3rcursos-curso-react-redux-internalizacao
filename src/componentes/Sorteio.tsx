import React from "react";
import { connect, ConnectedProps } from 'react-redux';
import Card from "./Card";
import { numeros } from './interfaces';

const connector = connect(mapStateToProps);
type PropsFromRedux = ConnectedProps<typeof connector>
type Props = PropsFromRedux;

function Sorteio(props: Props) {
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

function mapStateToProps(state:{numeros:numeros}) {
    return {
        min: state.numeros.min,
        max: state.numeros.max,
    };
}

export default connector(Sorteio);
