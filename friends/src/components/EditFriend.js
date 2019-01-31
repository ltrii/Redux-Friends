import React, { Component } from 'react';
import { Form, Input, Button, FormGroup, Modal } from 'reactstrap';

export default class EditFriend extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curName: this.props.name,
      curEmail: this.props.email,
      curAge: this.props.age,
      curID: this.props.id,
      curInfo: this.props.additional,
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
    let updatedFriend = {
      id: this.state.curID,
      name: this.state.curName,
      email: this.state.curEmail,
      age: this.state.curAge,
      additional: this.state.curInfo
    }
    this.props.updatingFriend(updatedFriend.name, updatedFriend.age, updatedFriend.email, updatedFriend.additional, updatedFriend.id);
    this.setState({
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
      <div className="editFriendDiv">
        <Button color="secondary" onClick={this.toggle}>Edit</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
        <Form onSubmit={e => this.handleSubmit(e)}>
          <FormGroup>
            <Input required onChange={this.handleChange} type="text" placeholder="Friend name" name="curName" value={this.state.curName} />
            <Input required onChange={this.handleChange} type="email" placeholder="Friend email" name="curEmail" value={this.state.curEmail} />
            <Input required onChange={this.handleChange} type="number" min="0" max="130" placeholder="Friend age" name="curAge" value={this.state.curAge} />
            <Input onChange={this.handleChange} type="textarea" placeholder="Additional info" name="curInfo" value={this.state.curInfo} />
          </FormGroup>
          <Button>Submit</Button>
        </Form>
        </Modal>
      </div>
    )
  }
}