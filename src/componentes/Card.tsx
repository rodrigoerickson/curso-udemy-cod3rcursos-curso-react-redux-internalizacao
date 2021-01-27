import './Card.css'
import React, { FunctionComponent } from 'react'

interface CardProps {
    color:'Red'|'Blue'|'Purple'|'Green',
    title:string
}

export const Card: FunctionComponent<CardProps> = (props) => {
    return (
        <div className={`Card ${props.color}`}>
            <div className="Header">
                <span className="Title">{props.title}</span>
            </div>
            <div className="Content">
                {props.children}
            </div>
        </div>
    )
}