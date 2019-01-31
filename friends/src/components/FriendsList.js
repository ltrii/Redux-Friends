import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Badge, Spinner } from 'reactstrap';
import { fetchingFriends, savingFriends, deletingFriend, updatingFriend } from '../actions';
import Friends from './Friends';
import AddFriend from './AddFriend';

class FriendsList extends Component {
  constructor(props){
    super(props);
    this.state = {
      initialized: false
    }
  }

  componentDidMount() {
    if(!this.state.initialized){
    this.props.fetchingFriends();
    }
    this.setState({
      initialized: true
    })
  }

  componentDidUpdate(prevProps) {
    if (prevProps.friends.length !== this.props.friends.length) {
      this.props.fetchingFriends();
    }
  }

  render() {
    return (
      <div>
        <div class="header">
          <h1>Friends<Badge className="headBadge" pill href="https://redux.js.org/" color="secondary">Redux</Badge></h1><div>{(this.props.isFetching ? <Spinner color="success" /> : <p></p>)}
        </div>
        </div>
        <AddFriend {...this.props} />
        <Friends friends={this.props.friends} deletingFriend={this.props.deletingFriend} updatingFriend={this.props.updatingFriend} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    friends: state.friendReducer.friends,
    isFetchingFriends: state.friendReducer.fetchingFriends,
    isFetching: state.friendReducer.isFetching,
    isSavingFriends: state.friendReducer.savingFriends,
    error: state.friendReducer.error
  };
};



export default connect(
  mapStateToProps,
  { fetchingFriends, savingFriends, deletingFriend, updatingFriend }
)(FriendsList);
