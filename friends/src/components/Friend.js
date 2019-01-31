import React, { Component } from 'react'

export default class Friend extends Component {
  constructor(props){
    super(props);
  }

  handleDelete = () => {
    this.props.deletingFriend(this.props.friend.id)
  }

  render() {
    return (
      <div className="friendDiv">
        <h3>{this.props.friend.name}</h3>
        <p>Email: {this.props.friend.email}</p>
        <p>Age: {this.props.friend.age}</p>
        <button onClick={this.handleDelete}>Delete</button>
      </div>
    )
  }
}
