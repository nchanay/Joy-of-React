import React from 'react';

import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';

function GuessResults({ answer, guesses, maxGuesses}) {
  return (
    <div className="guess-results">
      {range(maxGuesses).map((wordIndex) => {
        const guess = checkGuess(guesses[wordIndex], answer);

        return (
          <p key={wordIndex} className="guess">
            {range(5).map((letterIndex) => (
              <span key={letterIndex} className={`cell${guess ? ` ${guess[letterIndex].status}` : ''}`}>
                {guess ? guess[letterIndex].letter : ''}
              </span>
            ))}
          </p>
        );
      })}
    </div>
  );
}

export default GuessResults;
