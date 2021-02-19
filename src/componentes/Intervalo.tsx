import "./Intervalo.css";
import React from "react";
import Card from "./Card";
import { alterarNumeroMaximo, alterarNumeroMinimo } from '../store/actions/numeros'
import { numeros } from './interfaces';
import { connect, ConnectedProps } from 'react-redux';

const connector = connect(mapStateToProps, mapDispatchToProp);
type PropsFromRedux = ConnectedProps<typeof connector>
type Props = PropsFromRedux;

function Intervalo(props: Props) {
    const { min, max } = props;

    return (
        <Card title="Intervalo de Números" color="Red">
            <div className="Intervalo">
                <span>
                    <strong>
                        Mínimo:
                    </strong>
                    <input type="text" value={min}
                        onChange={e => props.alterarMinimo(+e.target.value)}
                         />
                </span>
                <span>
                    <strong>
                        Máximo:
                    </strong>
                    <input type="text" value={max}
                        onChange={e => props.alterarMaximo(+e.target.value)}
                         />
                </span>
            </div>
        </Card>
    );
}

function mapStateToProps (state:{numeros:numeros}){
    return {
        min: state.numeros.min,
        max: state.numeros.max,
    }
}

function mapDispatchToProp(dispatch:any){
    return {
        alterarMinimo(novoNumero:number){
            const action = alterarNumeroMinimo(novoNumero);
            dispatch(action);
        },
        alterarMaximo(novoNumero:number){
            const action = alterarNumeroMaximo(novoNumero);
            dispatch(action);
        }
    }
}

export default connector(Intervalo)