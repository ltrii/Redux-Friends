import React from 'react';
import Friend from './Friend';

const Friends = props => {
  return (
    <div>
        {props.friends.map((friend, index) => (
            <Friend friend={friend} key={index} />
        ))}
  </div>
  )
}

export default Friends;
