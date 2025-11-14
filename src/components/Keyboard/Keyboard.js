import React from 'react';

import { KEYBOARD_ROWS } from '/src/constants.js';

function Keyboard({ letterStatuses }) {

  return (
    <div className="keyboard-wrapper">
      {KEYBOARD_ROWS.map((row, rowIdx) => (
        <div key={rowIdx} className="keyboard-row">
          {row.map(letter => (
            <span key={letter} className={`keyboard-cell ${letterStatuses[letter] || ''}`}>
              {letter}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Keyboard;
