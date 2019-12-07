import React from 'react'

//Usando Array
    // export default props => [
    //         <h1>Parte 1</h1>,
    //         <h2>Parte 2</h2>
    //     ]   

//Usando Fragment
    // export default props =>
    //     <React.Fragment>
    //         <h1>Parte 1</h1>
    //         <h2>Parte 2</h2>
    //     </React.Fragment>

//Soluçao mais usada
    // export default props =>
    //      <div>
    //          <h1>Parte 1</h1>
    //          <h2>Parte 2</h2>
    //      </div>

//Errado
    // export default props =>
    //     <h1>Parte 1</h1>
    //     <h2>Parte 2</h2>