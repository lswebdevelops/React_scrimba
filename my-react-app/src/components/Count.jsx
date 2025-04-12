import React from 'react'

function Count(props) {
  console.log("counter rendered");

  return (
    <div>
      <h2 className='count'>{props.number} </h2>
    </div>
  )
}

export default Count
