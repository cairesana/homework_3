// path: /hangman -- where the rest of the game is played.

// 1. When a game starts, a random word should be selected using the game library function `randomWord`.
// This will be the word the player has to guess.
// randomWord???

import * as React from 'react'
import { makeGuess } from '../actions/game'
import { newGame } from '../actions/game'
import { Component } from 'react';
import { showGuess, wrongGuessCount } from '../lib/game';
//import './App.css';
import { connect } from 'react-redux'



const alphabet = 'abcdefghijklmnopqrstuvwxyz';


export class GameContainer extends Component {

  componentDidMount() {
    this.props.newGame();  }



  render() {
    return (
      <div>
        <h1 className="App-title">{wrongGuessCount(this.props.word, this.props.guesses)}</h1>

        <hr /> {/*line*/}
        {alphabet.split('').map(letter => <span className="letter" onClick={e => this.props.makeGuess(letter)}>{letter}</span>)}
        <hr /> {/*split quebra letra por letra e transforma num array pra poder fazer map*/}

        {showGuess(this.props.word, this.props.guesses)}

        <hr />

        <button onClick={this.props.newGame}>Start New game</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  word: state.game.word,
  guesses: state.game.guesses
});

const mapDispatchToProps = dispatch => ({
  makeGuess: (letter) => dispatch(makeGuess(letter)),
  newGame: () => dispatch(newGame())
});

export default connect(mapStateToProps, mapDispatchToProps)(GameContainer);
