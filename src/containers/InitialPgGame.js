// vai conter o / path --  it should show an initial page with a welcome message and a link "Start playing!".

// The link links to `/hangman` -- Clicking it should change the route to `/hangman`,
// where the rest of the game is played.

// This should be done using react-router, the page should not reload.

import * as React from 'react'
import { Link } from 'react-router-dom';

export default function InitialPgGame() {
  return (
    <div>
      <h1>Welcome to the Hangman Game!</h1>

      <h2>Ready to start?</h2>

      <p>
        <Link to={`/hangman`}>Start Playing!</Link>
      </p>
    </div>
  )
}
