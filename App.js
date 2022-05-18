// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
import React, {Component } from 'react';
import Tablero from './src/Tablero';
import Header from './src/Header';
import './src/App.css';
import construirBaraja from './src/utils/construirBaraja';

const getEstadoInicial = () => {
  const baraja = construirBaraja();
  return {
    baraja
  };
}
class App extends Component {
  constructor(props){
    super(props);
      this.state = getEstadoInicial();
  }
  render()
  {
    return(
      <div> 
        <Header />
        <Tablero 
        baraja ={this.state.baraja}
        />
      </div>
    );
  }
}

export default App;