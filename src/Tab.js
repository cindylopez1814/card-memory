import React, { Component } from 'react';
import Cartas from './Cartas'
import './Tab.css';

export default class Tab extends Component {
  render() {
    const cartas = [1,2,3,4,5,6,7,8];
    return (
      <div className='tablero'>
      {
        cartas.map((cartas) => <Cartas></Cartas>)
      }
      </div>
    );
  }
};