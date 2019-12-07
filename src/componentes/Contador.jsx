import React, { Component } from 'react';

class Contador extends Component {
    state = {
        numero: this.props.numero == null ? 1000 : this.props.numero

    }

    maisUm = (e) => {
        console.log(e.target)
        this.setState({ numero: this.state.numero + 1})
    }
    alterarNumero = (diferenca) => {
        this.setState( {numero: this.state.numero + diferenca} )
    }
    render() {
        return (
            <div>
                <div>Número: {this.state.numero}</div>
                <button onClick={this.maisUm}>Aumentar</button>
                <button onClick={() => this.alterarNumero(-1)}>Diminuir</button>
                <button onClick={() => this.alterarNumero(10)}>Aumentar 10</button>
                <button onClick={() => this.alterarNumero(-10)}>Diminuir 10</button>
            </div>
        );
    }
}

export default Contador;