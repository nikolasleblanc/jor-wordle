import React from 'react'

function Banner({ guess, answer, outcome }) {
    return (
        <div className={`${outcome} banner`}>
            <p>
                {outcome === 'happy' ? (
                    <>
                        <strong>Congratulations!</strong> Got it in{' '}
                        <strong>{guess} guesses</strong>
                    </>
                ) : (
                    <>
                        Sorry, the correct answer is <strong>{answer}</strong>.
                    </>
                )}
            </p>
        </div>
    )
}

export default Banner
