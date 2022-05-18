import React, { Component } from 'react';
import './Carta.css'
import Flipcard from "react-flipcard-2";


export default class Carta extends Component {
    render () {
        return (
             <div className="carta">
                <Flipcard>
                    <div className='portada'></div>
                     <div className='contenido'>
                        <i className={'fa $[this.props.icono} fa-5x'}></i>
                    </div>
                </Flipcard>
                <i className={'fa ${this.props.icono} fa-5x'}> </i>
            </div>
        )
    }
};


