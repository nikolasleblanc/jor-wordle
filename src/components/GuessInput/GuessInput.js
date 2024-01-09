import React from 'react'

const GuessInput = ({ handleGuess, disabled }) => {
    const [guessInput, setGuessInput] = React.useState('')
    return (
        <form
            className="guess-input-wrapper"
            onSubmit={(event) => {
                event.preventDefault()
                if (guessInput.length !== 5) {
                    return
                }
                handleGuess(guessInput)
                console.log({ guess: guessInput })
                setGuessInput('')
            }}
        >
            <label htmlFor="guess-input">Enter Guess</label>
            <input
                type="text"
                id="guess-input"
                name="guess-input"
                value={guessInput}
                maxLength="5"
                disabled={disabled}
                onChange={(e) => setGuessInput(e.target.value.toUpperCase())}
            />
        </form>
    )
}

export default GuessInput
