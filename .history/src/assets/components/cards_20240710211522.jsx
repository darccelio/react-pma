import React from 'react'

const cards = (props) => {
  return (
    <>

        <h3>{props.title}</h3>
        <div>
        <p>{props.content}</p>
        </div>
        <div>
          <button type="button">{props.action1}</button>
          <button type="button">{props.action2}</button>
        </div>

    </div>
  )
}

export default cards