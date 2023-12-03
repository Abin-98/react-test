import React from 'react'

const Button=(props)=> {
const ID=props.identifier;
  return (
    <button onClick={()=>props.onClick(ID)}>{props.children}</button>
  )
}

export default Button
