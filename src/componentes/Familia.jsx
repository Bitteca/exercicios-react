import React from 'react'
import {componenteFilhosProps} from '../utils/utils'

export default props =>
    <div>
        <h1>Familia</h1>
        {/* A notaçao "{...props} cria um objeto e da um spread(...) nas propriedades" */}
        {/* {React.cloneElement(props.children, {...props})}  */}

        {componenteFilhosProps(props)}
        {/* {React.Children.map(props.children, filho =>{
            return React.cloneElement(filho, {...props})
        })} */}

        {/* {props.children} */}
    </div>