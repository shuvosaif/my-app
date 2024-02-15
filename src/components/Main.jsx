import React, { useState } from 'react'

export default function Main(props) {
  const [input, setInput] = useState(1)

  return (
    <div>
      <input
        onChange={(event) => {
          setInput(Number(event.target.value))
        }}
      ></input>
      <button
        onClick={() => {
          props.funcInc(input)
        }}
      >
        Increase
      </button>
    </div>
  )
}
