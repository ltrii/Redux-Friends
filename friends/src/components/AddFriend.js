import React, { Component } from 'react'

export default class AddFriend extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curName: '',
      curEmail: '',
      curAge: ''
    }
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    let addFriendHold = {
      name: this.state.curName,
      email: this.state.curEmail,
      age: this.state.curAge,
    }
    this.props.savingFriends(addFriendHold);
    this.setState({
      curName: '',
      curEmail: '',
      curAge: ''
    })
  }


  render() {
    return (
      <form className="addForm" onSubmit={e => this.handleSubmit(e)}>
        <input required onChange={this.handleChange} type="text" placeholder="Friend name" name="curName" value={this.state.curName} />
        <input required onChange={this.handleChange} type="email" placeholder="Friend email" name="curEmail" value={this.state.curEmail} />
        <input required onChange={this.handleChange} type="number" min="0" max="130" placeholder="Friend age" name="curAge" value={this.state.curAge} />
        <button>Submit</button>
      </form>
    )
  }
}
