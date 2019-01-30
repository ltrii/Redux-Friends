import React from 'react';
import Friend from './Friend';

const Friends = props => {
  return (
    <div>
        {props.friends.map((friend, index) => (
            <Friend friend={friend} key={friend.id} />
        ))}
  </div>
  )
}

export default Friends;
