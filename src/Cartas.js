import React, { Component } from 'react';
import FlipCard from 'react-flipcard';
import './Cartas.css';

export default class Carta extends Component {
  render() {
    return (
      <div className='carta' onClick={this.props.seleccionarCartas}>
        <FlipCard
          flipped = {this.props.siendoComparada || this.props.rigth}
          disabled = {true}
        >
          <div className='portada'></div>
          <div className='contenido'>
            <i className={`fa ${this.props.icon} fa-5x`}></i></div>
        </FlipCard>
      </div>
    )
  }
}