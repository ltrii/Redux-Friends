import React from 'react'

export default function Friend(props) {
  return (
    <div className="friendDiv">
      <h3>{props.friend.name}</h3>
      <p>Email: {props.friend.email}</p>
      <p>Age: {props.friend.age}</p>
    </div>
  )
}

