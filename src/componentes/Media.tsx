import React from "react";
import { connect, ConnectedProps } from 'react-redux';
import { mapStateToProps } from '../store/reducers/numeros';
import Card from "./Card";

const connector = connect(mapStateToProps);
type PropsFromRedux = ConnectedProps<typeof connector>
type Props = PropsFromRedux;

function Media(props:Props) {
    const { min, max } = props;
    return (
        <Card title="Média dos Números" color="Green">
            <div>
                <span>
                    <span>Resultado: </span>
                    <strong>{(parseInt(max) + parseInt(min)) / 2}</strong>
                </span>
            </div>
        </Card>
    );
}

export default connector(Media);
