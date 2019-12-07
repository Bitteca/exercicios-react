import React, { Component } from 'react';

class ComponenteClasse extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.valor || "Padrao"}</h1>
            </div>
        );
    }
}

export default ComponenteClasse;