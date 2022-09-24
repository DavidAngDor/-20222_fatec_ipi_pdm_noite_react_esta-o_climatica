import React, { Component } from 'react'

export default class Loading extends Component {
    render() {
        return (
            <div className='d-flex justify-content-center align-item-center border rounded p-3'>
                {/* .spinner-border.text-primary */}
                <div className="spinner-border text-primary" stule={{width: '3rem', height: '3rem'}}>
                    {/* span.visually-hidden{Carregando...} */}
                    <span className="visually-hidden">Carregando...</span>
                </div>
            </div>
        )
    }
}
