import React from 'react'
import { connect } from 'react-redux'
import Card from './Card'
import { numeros } from './interfaces'

function Soma(props: any) {
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

function mapStateToProp(state:{numeros:numeros}) {
    return {
        min: state.numeros.min,
        max: state.numeros.max,
    }
}

export default connect(mapStateToProp)(Soma)