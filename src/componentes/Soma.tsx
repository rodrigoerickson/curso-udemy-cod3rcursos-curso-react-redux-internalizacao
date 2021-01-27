import React from 'react'
import Card from './Card'

function Soma(props:any) {
    const { min, max } = props
    return (
        <Card title="Soma dos Números" color="Blue">
            <div>
                <span>
                    <span>Resultado: </span>
                    <strong>{ max + min }</strong>
                </span>
            </div>
        </Card>
    )
}

export default Soma