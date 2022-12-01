import React from 'react'
import Content from './components/Content'
// import Footer from './components/Footer'
import Header from './components/Header'
import Total from './components/Total'

const App = () => {
  // const course = 'Half Stack application development'
  // const part1 = 'Fundamentals of React'
  // const exercises1 = 10
  // const part2 = 'Using props to pass data'
  // const exercises2 = 7
  // const part3 = 'State of a component'
  // const exercises3 = 14

  // const total = exercises1 + exercises2 + exercises3

  // const course = 'Half Stack application development'
  // const part1 = {
  //   name: 'Fundamentals of React',
  //   exercises: 10,
  // }
  // const part2 = {
  //   name: 'Using props to pass data',
  //   exercises: 7,
  // }
  // const part3 = {
  //   name: 'State of a component',
  //   exercises: 14,
  // }

  // const course = 'Half Stack application development'
  // const parts = [
  //   {
  //     name: 'Fundamentals of React',
  //     exercises: 10,
  //   },
  //   {
  //     name: 'Using props to pass data',
  //     exercises: 7,
  //   },
  //   {
  //     name: 'State of a component',
  //     exercises: 14,
  //   },
  // ]

  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
      },
      {
        name: 'State of a component',
        exercises: 14,
      },
    ],
  }
  const total =
    course.parts[0].exercises +
    course.parts[1].exercises +
    course.parts[2].exercises

  return (
    <>
      <h1>
        <Header course={course.name} />
      </h1>
      <p>
        <Content
          name={course.parts[0].name}
          exercises={course.parts[0].exercises}
        />
        <Content
          name={course.parts[1].name}
          exercises={course.parts[1].exercises}
        />
        <Content
          name={course.parts[2].name}
          exercises={course.parts[2].exercises}
        />
        {/* <Content name={parts[1].name} exercises={parts[1].exercises} />
        <Content name={parts[2].name} exercises={parts[2].exercises} /> */}
      </p>
      {/* <p>
        <Content part={part2} exercises={exercises2} />
      </p>
      <p>
        <Content part={part3} exercises={exercises3} />
      </p> */}
      <p>
        Number of exercises <Total total={total} />
      </p>
    </>
  )
}

export default App
