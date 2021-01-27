import React from "react";
import Card from "./Card";

function Sorteio(props: any) {
    const { min, max } = props;
    const aleatorio = (Math.random() * (parseInt(max) - parseInt(min))) + min;
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

export default Sorteio;