import React, { Component } from 'react'

export class TablaClientes extends Component {

    clientes = [
        { nombre: 'Gas Natural', cif: 'A12345678' },
        { nombre: 'Iberdrola', cif: 'A87654321' },
        { nombre: 'Jazztel', cif: 'B12345678' },
        { nombre: 'BBVA', cif: 'C12345678' },
    ]


    render() {
        return (
            <div className='container'>
                <table>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>CIF</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.clientes.map(cliente => {
                            return <tr>
                                <td>{cliente.nombre}</td>
                                <td>{cliente.cif}</td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default TablaClientes