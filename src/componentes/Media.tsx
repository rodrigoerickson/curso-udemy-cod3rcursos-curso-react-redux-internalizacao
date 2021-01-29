import React from "react";
import { connect, MapStateToPropsParam } from 'react-redux';
import Card from "./Card";
import { numeros } from './interfaces';

function Media(props:any) {
    const { min, max } = props;
    return (
        <Card title="Média dos Números" color="Green">
            <div>
                <span>
                    <span>Resultado: </span>
                    <strong>{(max + min) / 2}</strong>
                </span>
            </div>
        </Card>
    );
}

function mapStateToProps(state:{numeros:numeros}){
    return {
        min: state.numeros.min,
        max: state.numeros.max
    }
}

export default connect(mapStateToProps)(Media);
