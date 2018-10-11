import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Tab from './Tab'
import builCard from './utils/buil-card';

const getStatusInit = () => {
  const baraja = builCard();
  return {
    baraja,
    parejaSelect: [],
    estaComparando: false
  };
}
class App extends Component {
  constructor(props) {
    super(props);
    this.state = getStatusInit();
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Tab 
        baraja={this.state.baraja}
        parejaSelect = {this.state.parejaSelect}
        seleccionarCartas= {(carta) => this.seleccionarCartas(carta)}
        />
      </div>
    );
  }
    seleccionarCartas(carta) {
      if (this.state.estaComparando || this.state.parejaSelect.indexOf(carta) > -1 || carta.rigth) {
        return;
      }
      const parejaSelect = [...this.state.parejaSelect, carta];
      this.setState({
        parejaSelect
      });

      if (parejaSelect.length === 2) {
        this.compararPareja(parejaSelect);
      }
    }

    compararPareja(parejaSelect) {
      this.setState({estaComparando: true});

      setTimeout(() => {
        const [primeraCarta, SegundaCarta] = parejaSelect
        let baraja = this.state.baraja;

        if (primeraCarta.icon === SegundaCarta.icon){
          baraja = baraja.map((carta) => {
            if (carta.icon !== primeraCarta.icon) {
              return carta;
            }

            return {...carta, rigth:true};
          })
        }

        this.verificarGanador(baraja);
        this.setState({
          parejaSelect: [],
          baraja,
          estaComparando: false
        })
      }, 1000)
    }

    verificarGanador(baraja) {
      if ( baraja.filter((carta) => !carta.rigth).length === 0) {
      }
    }
  }


export default App;
