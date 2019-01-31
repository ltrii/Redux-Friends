import React from 'react';
import Friend from './Friend';

const Friends = props => {
  return (
    <div className="friendsHold">
        {props.friends.map((friend, index) => (
            <Friend friend={friend} key={friend.id} deletingFriend={props.deletingFriend} />
        ))}
  </div>
  )
}

export default Friends;
