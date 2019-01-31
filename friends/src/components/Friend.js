import React, { Component } from 'react'
import EditFriend from './EditFriend';
import { Button, Card, CardText, CardTitle, CardBody } from 'reactstrap';

export default class Friend extends Component {
  constructor(props){
    super(props);
  }

  handleDelete = () => {
    this.props.deletingFriend(this.props.friend.id)
  }

  render() {
    return (
      <Card className="friendHold">
        <CardBody>
          <CardTitle>
            <h3>{this.props.friend.name}</h3>
          </CardTitle>
          <CardText>
            <p>Email: {this.props.friend.email}</p>
            <p>Age: {this.props.friend.age}</p>
          </CardText>
          <div class="friendButtons">
            <EditFriend 
              id={this.props.friend.id} 
              name={this.props.friend.name}
              email={this.props.friend.email}
              age={this.props.friend.age} 
              updatingFriend={this.props.updatingFriend} />
            <Button color="danger" onClick={this.handleDelete}>Delete</Button>
          </div>
        </CardBody>
      </Card>
    )
  }
}
