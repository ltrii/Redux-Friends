import React, { Component } from 'react'
import EditFriend from './EditFriend';
import { Button, Card, Collapse, CardText, CardTitle, CardBody } from 'reactstrap';

export default class Friend extends Component {
  constructor(props){
    super(props);
    this.toggleInfo = this.toggleInfo.bind(this);
    this.state = { collapse: false };
  }

  toggleInfo() {
    this.setState({ collapse: !this.state.collapse });
  }

  handleDelete = () => {
    this.props.deletingFriend(this.props.friend.id)
  }

  displayAddInfo = () => {
    if(!this.props.friend.additional){
      return 'No additional info'
    } else {
      return this.props.friend.additional
    }
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
          <Collapse isOpen={this.state.collapse}>
            <div class="moreInfo">
              {this.displayAddInfo()}
            </div>
          </Collapse>
          <div class="friendButtons">
          <Button color="info" onClick={this.toggleInfo} >More Info</Button>
            <div class="friendButtonsEdDe">
              <EditFriend 
                id={this.props.friend.id} 
                name={this.props.friend.name}
                email={this.props.friend.email}
                age={this.props.friend.age} 
                additional={this.props.friend.additional}
                updatingFriend={this.props.updatingFriend} />
              <Button color="danger" onClick={this.handleDelete}>Delete</Button>
            </div>
          </div>
        </CardBody>
      </Card>
    )
  }
}
