import React from 'react';

// Components
import GuessResults from '../GuessResults';
import GuessForm from '../GuessForm';
import Keyboard from '../Keyboard';
import GameOverBanner from '../GameOverBanner';

// Resources
import { WORDS } from '../../data';
import { sample } from '../../utils';
import { getLetterStatuses } from '../../game-helpers';
import { NUM_OF_GUESSES_ALLOWED as maxGuesses } from '/src/constants.js';

function Game() {
  const [answer, setAnswer] = React.useState(sample(WORDS));
  const [guesses, setGuesses] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState('playing');

  const letterStatuses = getLetterStatuses(guesses, answer);

  function handleGuessSubmit(newGuess) {
    newGuesses = [...guesses, newGuess]
    setGuesses(newGuesses);
    if (newGuess === answer) {
      setGameStatus('winner');
    } else if (newGuesses.length >= maxGuesses) {
      setGameStatus('loser');
    }
  }

  if (!answer) {
    return <div>Loading...</div>;
  }

  return (
    <div className="game-wrapper">
      <GuessResults
        answer={answer}
        guesses={guesses}
        maxGuesses={maxGuesses}
      />

      <GuessForm
        handleGuessSubmit={handleGuessSubmit}
        disabled={gameStatus !== 'playing'}
      />

      {gameStatus !== 'playing' && (
        <GameOverBanner
          answer={answer}
          setAnswer={setAnswer}
          gameStatus={gameStatus}
          guessCount={guesses.length}
        />
      )}

      <Keyboard letterStatuses={letterStatuses} />
    </div>
  );
}

export default Game;
