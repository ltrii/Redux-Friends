import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchingFriends, savingFriends, deletingFriend } from '../actions';
import Friends from './Friends';
import AddFriend from './AddFriend';

class FriendsList extends Component {

  componentDidMount() {
    this.props.fetchingFriends();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.friends !== this.props.friends) {
      this.props.fetchingFriends();
    }
  }

  render() {
    return (
      <div>
        <h1>Friends</h1>
        <AddFriend {...this.props} />
        <Friends friends={this.props.friends} deletingFriend={this.props.deletingFriend} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    friends: state.friendReducer.friends,
    isFetchingFriends: state.friendReducer.fetchingFriends,
    isSavingFriends: state.friendReducer.savingFriends,
    error: state.friendReducer.error
  };
};



export default connect(
  mapStateToProps,
  { fetchingFriends, savingFriends, deletingFriend }
)(FriendsList);
