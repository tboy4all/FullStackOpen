import React, { useState } from 'react'
import Filter from './Exercise 2/phonebook/Filter'
import Person from './Exercise 2/phonebook/Person'
import PersonForm from './Exercise 2/phonebook/PersonForm'
// import PartTwo from './Exercise 2/courseInfo/PartTwo'

const App = () => {
  // const [persons, setPersons] = useState([
  //   { name: 'Arto Hellas', number: '040-123456', id: 1 },
  //   { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
  //   { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
  //   { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 },
  // ])

  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [personsToShow, setPersonsToShow] = useState(persons)

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(e.target.value)
    setNewName(e.target.value)
  }

  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewNumber(e.target.value)
  }

  const addPerson = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const personsArray = persons.map((e: any) => e.name)
    // const personsArray = persons.filter((person) => person.name === newName)
    const personObject = {
      ...persons,
      name: newName,
      number: newNumber,
      id: persons.length + 1,
    }

    if (personsArray.includes(`${personObject.name}`)) {
      // const currName = persons.filter((person: any) => person.name === name)
      window.confirm(`${newName} is already added to phonebook.`)
      return
    }

    setPersons(persons.concat(personObject))
    setPersonsToShow(persons.concat(personObject))

    setNewName('')
    setNewNumber('')
  }

  const addPersonData = {
    name: newName,
    newNumber,
    handleNameChange,
    handleNumberChange,
  }

  const filterByName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const search = e.target.value
    setFilter(search)
    setPersonsToShow(
      persons.filter(
        (person: any) =>
          person.name.toLowerCase().includes(search.toLocaleLowerCase())
        // person.newName.toLowerCase().indexOf(e.target.value.toLowerCase()) !==-1
      )
    )
  }

  return (
    // <PartTwo />
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} filterByName={filterByName} />
      <h3>Add a new</h3>
      <PersonForm addPerson={addPerson} data={addPersonData} />
      <h3>Numbers</h3>
      {filter === '' ? (
        <Person persons={persons} />
      ) : (
        <Person persons={personsToShow} />
      )}
    </div>
  )
}

export default App
