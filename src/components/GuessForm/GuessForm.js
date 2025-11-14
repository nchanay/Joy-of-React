import React from 'react';

function GuessForm({ handleGuessSubmit, disabled }) {
  const [guessText, setGuessText] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();
    handleGuessSubmit(guessText);
    setGuessText('');
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        required
        maxLength={5}
        minLength={5}
        disabled={disabled}
        value={guessText}
        onChange={(event) => setGuessText(event.target.value.toUpperCase())}
        placeholder={disabled ? "Game Over" : ""}
        pattern="[A-Za-z]{5}"
        title="Word must be 5 letters"
      />
    </form>
  );
}

export default GuessForm;
