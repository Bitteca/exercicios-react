import React from 'react'

export default props =>
    <div>
        <button onClick={() => props.notificarSaida('shopping')}>
            Vou sair
        </button>
    </div>