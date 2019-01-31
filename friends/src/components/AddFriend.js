import React, { Component } from 'react';
import { Form, Input, Button, FormGroup, Modal } from 'reactstrap';

export default class AddFriend extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curName: '',
      curEmail: '',
      curAge: '',
      addInfo: '',
      modal: false
    }

    this.toggle = this.toggle.bind(this);
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
      additional: this.state.addInfo
    }
    this.props.savingFriends(addFriendHold);
    this.setState({
      curName: '',
      curEmail: '',
      curAge: '',
      addInfo: '',
      modal: false
    })
  }

  
  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }


  render() {
    return (
      <div className="addFriendDiv">
        <Button color="primary" onClick={this.toggle}>Add Friend</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
        <Form onSubmit={e => this.handleSubmit(e)}>
          <FormGroup>
            <Input required onChange={this.handleChange} type="text" placeholder="Friend name" name="curName" value={this.state.curName} />
            <Input required onChange={this.handleChange} type="email" placeholder="Friend email" name="curEmail" value={this.state.curEmail} />
            <Input required onChange={this.handleChange} type="number" min="0" max="130" placeholder="Friend age" name="curAge" value={this.state.curAge} />
            <Input onChange={this.handleChange} type="textarea" placeholder="Additional info" name="addInfo" value={this.state.addInfo} />
          </FormGroup>
          <Button>Submit</Button>
        </Form>
        </Modal>
      </div>
    )
  }
}
