import React, { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(
    new Array(7 + 1).join('0').split('').map(parseFloat)
  )

  const getRandomQuote = () => {
    setSelected(Math.floor(Math.random() * 6))
  }

  const addVote = () => {
    setVotes((prevState) => {
      const newVotes = [...prevState]
      newVotes[selected] += 1
      return [...newVotes]
    })
  }

  const highestVote = () => {
    return votes.reduce((cur, prev) => {
      if (cur >= prev) {
        return cur
      } else {
        return prev
      }
    }, 0)
  }

  return (
    <>
      <h2>Anecdote of the Day</h2>
      {anecdotes[selected]}
      <div>
        <strong>has {votes[selected]} votes : </strong>
      </div>
      <br />
      <div>
        <button onClick={getRandomQuote}>next anecdote</button> &nbsp;
        <button onClick={addVote}>Vote</button>
      </div>
      {votes.reduce((prev, cur) => prev + cur, 0) === 0 ? (
        ''
      ) : (
        <div>
          <h2>Anecdote with most votes</h2>{' '}
          {anecdotes[votes.indexOf(highestVote())]} <br />
          <strong>has {highestVote()} votes</strong>
        </div>
      )}
    </>
  )
}

export default App
