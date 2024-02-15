import React from 'react'
import Clock from './Clocks'

export default function Header(props) {
  return (
    <div>
      <Clock />
      {props.count}
    </div>
  )
}
