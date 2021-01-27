import "./Intervalo.css";
import React from "react";
import Card from "./Card";



function Intervalo(props: any) {
    const { min, max } = props;

    return (
        <Card title="Intervalo de Números" color="Red">
            <div className="Intervalo">
                <span>
                    <strong>
                        Mínimo:
                    </strong>
                    <input type="text" value={min}
                        // onChange={e => props.alterarMinimo(+e.target.value)}
                         />
                </span>
                <span>
                    <strong>
                        Máximo:
                    </strong>
                    <input type="text" value={max}
                        // onChange={e => props.alterarMaximo(+e.target.value)}
                         />
                </span>
            </div>
        </Card>
    );
}

export default Intervalo;