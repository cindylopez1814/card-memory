import React, { Component } from 'react';
import Cartas from './Cartas'
import './Tab.css';

export default class Tab extends Component {
  render() {
    return (
      <div className='tablero'>
      {
        this.props.baraja
        .map((carta, index) => {
          const siendoComparada = this.props.parejaSelect.indexOf(carta) > -1;
          return <Cartas 
          key = {index}
          icon={carta.icon}
          siendoComparada = {siendoComparada}
          seleccionarCartas = {() => this.props.seleccionarCartas(carta)}
          right = {carta.rigth} 
          />
        }
      )}
      </div>
    );
  }
};