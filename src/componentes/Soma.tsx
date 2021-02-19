import React from 'react'
import { connect, ConnectedProps } from 'react-redux'
import Card from './Card'
import { numeros } from './interfaces'

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

function mapStateToProps(state:{numeros:numeros}) {
    return {
        min: state.numeros.min,
        max: state.numeros.max,
    }
}

export default connector(Soma)