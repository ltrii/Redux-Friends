import React from 'react';
import Friend from './Friend';

export default function Friends(props) {
  return (
    <div>
        {props.friends.map((friend, index) => (
            <Friend />
        ))}
  </div>
  )
}
