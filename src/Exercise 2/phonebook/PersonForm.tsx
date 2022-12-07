import React from 'react'

const PersonForm = ({ addPerson, data }: any) => {
  return (
    <div>
      <form onSubmit={addPerson}>
        <div>
          <span>
            name: <input value={data.name} onChange={data.handleNameChange} />
          </span>
          <br />
          <br />
          <span>
            number:{' '}
            <input value={data.newNumber} onChange={data.handleNumberChange} />
          </span>
        </div>
        <div>
          <button type='submit'>add</button>
        </div>
      </form>
      {/* <div>debug: {newName}</div> */}
    </div>
  )
}

export default PersonForm
