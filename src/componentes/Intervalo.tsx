import "./Intervalo.css";
import React from "react";
import Card from "./Card";
import { AlterarNumeroAction, alterarNumeroMaximo, alterarNumeroMinimo, AlterarNumeroParamAction } from '../store/actions/numeros'
import { connect, ConnectedProps } from 'react-redux';
import { Dispatch } from 'redux';
import { mapStateToProps } from '../store/reducers/numeros';

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

function mapDispatchToProp(dispatch:Dispatch<AlterarNumeroAction>){
    return {
        alterarMinimo(novoNumero:AlterarNumeroParamAction['novoNumero']){
            const action = alterarNumeroMinimo(novoNumero);
            dispatch(action);
        },
        alterarMaximo(novoNumero:AlterarNumeroParamAction['novoNumero']){
            const action = alterarNumeroMaximo(novoNumero);
            dispatch(action);
        }
    }
}

export default connector(Intervalo)