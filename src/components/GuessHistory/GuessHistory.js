import React from 'react'

function GuessHistory({ guesses }) {
    return (
        <div className="guess-results">
            {guesses.map(({ id, label }) => (
                <p className="guess" key={id}>
                    {label}
                </p>
            ))}
        </div>
    )
}

export default GuessHistory
