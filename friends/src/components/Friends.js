import React from 'react';
import Friend from './Friend';
import { ReactComponent as ShockedSvg } from '../img/shocked.svg'

const Friends = props => {
  if(props.friends.length === 0) {
    return <div className="noFriends"><ShockedSvg /></div>
  } else {
  return (
    <div className="friendsHold">
        {props.friends.map((friend, index) => (
            <Friend friend={friend} key={friend.id} deletingFriend={props.deletingFriend} updatingFriend={props.updatingFriend} />
        ))}
  </div>
  )
        }
}

export default Friends;
