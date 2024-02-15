import React, { useState } from 'react'

export default function Footer(props) {
  const [inputDec, setInputDec] = useState(1)
  return (
    <div>
      <input
        onChange={(event) => setInputDec(Number(event.target.value))}
      ></input>
      <button
        onClick={() => {
          props.funcDec(inputDec)
        }}
      >
        Decrease
      </button>

      <hr />

      <button onClick={props.reset}>Reset DAta</button>
    </div>
  )
}
