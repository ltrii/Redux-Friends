import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchingFriends, savingFriends } from '../actions';
import Friends from './Friends';
import AddFriend from './AddFriend';

class FriendsList extends Component {

  componentDidMount() {
    this.props.fetchingFriends();
  }

  render() {
    return (
      <div>
        <AddFriend {...this.props} />
        <Friends friends={this.props.friends} />
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
  { fetchingFriends, savingFriends }
)(FriendsList);
