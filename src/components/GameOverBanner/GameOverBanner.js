import React from 'react';

import { WORDS } from '../../data';
import { sample } from '../../utils';

function GameOverBanner({ answer, setAnswer, gameStatus, guessCount }) {
  return (
    <>
      {/* Congrats banner */}
      {gameStatus === 'winner' && (
        <div className="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in{' '}
            <strong>
              {guessCount === 1
                ? '1 guess'
                : `${guessCount} guesses`}
            </strong>.
          </p>
          <button onClick={() => {
            setAnswer(sample(WORDS));
            window.location.reload();
          }}>
            Play Again
          </button>
        </div>
      )}

      {/* Sorry Banner */}
      {gameStatus === 'loser' && (
        <div className="sad banner">
          <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
          <button onClick={() => {
            setAnswer(sample(WORDS));
            window.location.reload();
          }}>
            Play Again
          </button>
        </div>
      )}
    </>
  );
}

export default GameOverBanner;
