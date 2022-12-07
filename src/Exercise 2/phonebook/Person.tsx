import React from 'react'

const Person = ({ persons }: any) => {
  return (
    <ul>
      {/* <p key={person.id}>
        {person.content} &nbsp;
        {person.name}
        {person.number}
      </p> */}
      {persons.length > 0 &&
        persons.map((person: any) => (
          <li key={person.id}>
            {/* {person.content} &nbsp; */}
            {person.name} &nbsp;
            {person.number}
          </li>
        ))}
    </ul>
  )
}

export default Person
