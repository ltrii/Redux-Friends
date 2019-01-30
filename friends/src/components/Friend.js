import React from 'react'

export default function Friend(props) {
  return (
    <div className="friendhold">
      <h3>{props.friend.name}</h3>
      <p>{props.friend.email}</p>
      <p>{props.friend.age}</p>
    </div>
  )
}

