import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import InitialPgGame from './containers/InitialPgGame';
//import GameContainer from './containers/GameContainer';
import { Route } from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Route exact path='/' component={InitialPgGame} />
        {/*<Route exact path=`/hangman` component={GameContainer} />*/}
      </div>
    );
  }
}


export default App;
