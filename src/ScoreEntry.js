import React from 'react'

export default function ScoreEntry() {

    const handleClick = (e) => {
        e.preventDefault()
        console.log("here")
    }

    return (
        <>
            <form>
                <label>Games Played</label>
                <input type="number" autoFocus />
                <label>Complete in 1</label>
                <input type="number" />
                <label>Complete in 2</label>
                <input type="number" />
                <label>Complete in 3</label>
                <input type="number" />
                <label>Complete in 4</label>
                <input type="number" />
                <label>Complete in 5</label>
                <input type="number" />
                <label>Complete in 6</label>
                <input type="number" />
                <button onClick={handleClick}>Calculate</button>
            </form>
        </>
    )
}
