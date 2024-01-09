import React from 'react'
import { range } from '../../utils'

function Guess({ guess, results }) {
    return (
        <p className="guess">
            {range(0, 5).map((_, index) => (
                <span
                    key={index}
                    className={`cell`.concat(' ', results[index]?.status)}
                >
                    {guess[index] ?? ''}
                </span>
            ))}
        </p>
    )
}

export default Guess
