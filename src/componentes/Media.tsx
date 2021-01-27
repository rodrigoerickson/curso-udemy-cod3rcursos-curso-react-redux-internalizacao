import React from "react";

import Card from "./Card";

function Media(props:any) {
    const { min, max } = props;
    return (
        <Card title="Média dos Números" color="Green">
            <div>
                <span>
                    <span>Resultado: </span>
                    <strong>{(max + min) / 2}</strong>
                </span>
            </div>
        </Card>
    );
}

export default Media;
