import React from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { mapStateToProps } from '../store/reducers/numeros';
import Card from './Card'

const connector = connect(mapStateToProps);
type PropsFromRedux = ConnectedProps<typeof connector>
type Props = PropsFromRedux;

function Soma(props: Props) {
    const { min, max } = props
    return (
        <Card title="Soma dos Números" color="Blue">
            <div>
                <span>
                    <span>Resultado: </span>
                    <strong>{max + min}</strong>
                </span>
            </div>
        </Card>
    )
}

export default connector(Soma)