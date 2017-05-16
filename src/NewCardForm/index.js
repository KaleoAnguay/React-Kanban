import React, { Component } from 'react';

class NewCard extends Component{
  constructor(props){
    super(props);
    console.log(constructor)

    // set the initial state
    this.state = {
      title: '',
      priority: '',
      createdBy: '',
      assignedBo: ''
    };

    // this.handleTitleChange = this.handleTitleChange.bind(this);
    // this.StatusChange = this.StatusChange.bind(this);
    // this.handlePriorityChange = this.handlePriorityChange.bind(this);
    // this.handleCreatedByChange = this.handleCreatedByChange.bind(this);
    // this.handleAssignedToChange = this.handleAssignedToChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  addCard(card){
    console.log(card);
    this.props.addCard(card);

    const title = '';
    const status = '';
    const priority = '';
    const createdBy = '';
    const assignedTo = '';
    this.setState({
      title,
      status,
      priority,
      createdBy,
      assignedTo
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addCard(this.state);

    this.setState({ title: '', status: '', priority: '', createdBy: '', assignedTo: ''})
  }

  handleTitleChange = (event) => {
    this.setState({ title : event.target.value });
  }

  StatusChange = (event) => {
    this.setState({ status: event.target.value});
  }

  handlePriorityChange = (event) => {
    this.setState({ priority : event.target.value });
  }

  handleCreatedByChange = (event) => {
    this.setState({ created_by : event.target.value });
  }

  handleAssignedToChange = (event) => {
    this.setState({ assigned_to : event.target.value });
  }

  render(){
    return (
      <form id='submit' onSubmit={this.handleSubmit}>
        <div>
          <input type='text' placeholder='title' onChange={this.handleTitleChange} value={this.state.title} />
        </div>

        <div>
          <input type='text' placeholder='created by' onChange={this.handleCreatedByChange} value={this.state.created_by} />
        </div>
        <div>
          <input type='text' placeholder='assigned to' onChange={this.handleAssignedToChange} value={this.state.assigned_to} />
        </div>

        <div> Priority of Task: <br />
          <input type='radio' placeholder='priority' name='priority' onChange={this.handlePriorityChange} value='Low' /> Low <br/>
          <input type='radio' placeholder='priority' name='priority' onChange={this.handlePriorityChange} value='Medium' /> Medium <br/>
          <input type='radio' placeholder='priority' name='priority' onChange={this.handlePriorityChange} value='High' /> High <br/>
        </div>

        <div> Status of Task: <br />
        <input type='radio' placeholder='status' name='status' onChange={this.StatusChange} value='To Do'/> To Do <br/>
        <input type='radio' placeholder='status' name='status' onChange={this.StatusChange} value='Doing'/> Doing <br/>
        <input type='radio' placeholder='status' name='status' onChange={this.StatusChange} value='Done'/> Done <br/>
        </div>
        <div>
          <button type='submit'>Add Card</button>
        </div>
      </form>
    )
  }
}

export default NewCard;