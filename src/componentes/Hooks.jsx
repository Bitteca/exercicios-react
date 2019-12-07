import React, {useState, useEffect} from 'react';

export default props => {
    const [contador, setContador] = useState(100)
    const [status, setParOuImpar] = useState('Par')

    useEffect( () => {
        contador % 2 ===0 ? setParOuImpar('Par') : setParOuImpar('Impar')
    })
    return (
        <div>
            <h2>{contador}</h2>
            <h3>{status}</h3>
            <button onClick={() => setContador(contador + 1)}>Inc</button>
            <button onClick={() => setContador(contador - 1)}>Dec</button>
        </div>
    )
}
