import React from 'react'

// type ContentProps = {
//   exercises: Number
//   name: string
// }

const Content = ({ name, exercises }: any) => {
  return (
    <div>
      {name} {exercises}
      {/* {parts.map((el: any) => (
        <div>
          <span>{el.name}</span>
        </div>
      ))} */}
    </div>
  )
}

export default Content
