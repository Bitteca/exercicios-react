import React from 'react'

const aprovados = ['aluno1', 'aluno2', 'aluno3', 'aluno4']

export default props => {
    const gerarItens = itens => {
        return itens.map(item => <li>{item}</li>)
    }

    return (
        <ul>
            {gerarItens(aprovados)}
        </ul>
    )
}