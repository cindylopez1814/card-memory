import React, { Component } from 'react';
import './Header.css'
export default class Header extends Component {
  render() {
    return (
      <header>
        <div className="titulo">Card-Memory</div>
        <div>
          <button className="reinit">Reiniciar</button>
        </div>
        <div className="title">Intentos:</div>
      </header>  
    )

  }
}