import React from 'react'

import { sample } from '../../utils'
import { WORDS } from '../../data'
import GuessInput from '../GuessInput/GuessInput'
import GuessHistory from '../GuessHistory/GuessHistory'
import GuessResults from '../GuessResults/GuessResults'
import Banner from '../Banner/Banner'
import { NUM_OF_GUESSES_ALLOWED } from '../../constants'
import { range } from '../../utils'
import { checkGuess } from '../../game-helpers'

// Pick a random word on every pageload.
const answer = sample(WORDS)
// To make debugging easier, we'll log the solution in the console.
console.info({ answer })

function Game() {
    const [guess, setGuess] = React.useState(0)
    const [guesses, setGuesses] = React.useState(
        range(0, 6).map(() => {
            return {
                label: '',
                id: crypto.randomUUID(),
                results: [],
            }
        })
    )
    const [outcome, setOutcome] = React.useState('')
    const handleGuess = (label) => {
        if (guess >= NUM_OF_GUESSES_ALLOWED) {
            return
        }
        const nextGuesses = [...guesses]
        nextGuesses[guess].label = label
        const results = checkGuess(label, answer)
        nextGuesses[guess].results = results
        setGuesses(nextGuesses)
        setGuess(guess + 1)
        setOutcome(
            results.every((result) => result.status === 'correct')
                ? 'happy'
                : 'sad'
        )
    }

    return (
        <>
            <GuessResults guesses={guesses} />
            <GuessInput
                handleGuess={handleGuess}
                disabled={guess === NUM_OF_GUESSES_ALLOWED}
            />
            <GuessHistory guesses={guesses} />
            {(guess > 5 || ['happy'].includes(outcome)) && (
                <Banner guess={guess} answer={answer} outcome={outcome} />
            )}
        </>
    )
}

export default Game
