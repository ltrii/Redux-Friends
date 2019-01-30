import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchingFriends } from '../actions';
import Friends from './Friends';

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
        <Friends friends={this.props.friends} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    friends: state.friends,
    isFetchingFriends: state.fetchingFriends,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { fetchingFriends }
)(FriendsList);
