import React from 'react'
import Guess from './../Guess'

function GuessResults({ guesses }) {
    return (
        <div className="guess-results">
            {guesses.map((guess) => {
                return (
                    <Guess
                        key={guess.id}
                        guess={guess.label}
                        results={guess.results}
                    />
                )
            })}
        </div>
    )
}

export default GuessResults
