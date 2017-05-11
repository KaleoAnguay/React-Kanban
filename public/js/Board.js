const boardContainer = document.getElementById("main");


const Card = (props) => (
  <div className = "card">
    <h3>{ props.card.title }</h3>
    <p>{ props.card.priority }</p>
    <p>{ props.card.created_by }</p>
    <p>{ props.card.assigned_to }</p>
  </div>
);

const CardList = ({ cards }) => (
  <ul>
    { cards
      .map( card => <Card card={card} /> )
    }
  </ul>
);

// class List extends React.Component {
//   Card() {
//     if(this.props.priority === 'To D')
//   }
// }

class Done extends React.Component {
  render(){
    return (
        <div>
          <div className="done">
            <p>Done</p>
          </div>
        </div>

    )
  }
}

class Doing extends React.Component {
  render(){
    return (
        <div>
          <div className="doing">
            <p>Doing</p>
          </div>
        </div>
    )
  }
}

class Queue extends React.Component {
  constructor(props){
    super(props);

    };

  render(){
    return (
        <div>
          <div className="queue">
            <p>To Do</p>
            <CardList cards={this.props.cards}></CardList>
          </div>
        </div>
    )
  }
}

class NewCard extends React.Component{
  constructor(props){
    super(props);

    // set the initial state
    this.state = {
      title: '',
      status: '',
      priority: '',
      created_by: '',
      assigned_to: ''
    };

    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handlePriorityChange = this.handlePriorityChange.bind(this);
    this.handleCreatedByChange = this.handleCreatedByChange.bind(this);
    this.handleAssignedToChange = this.handleAssignedToChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  addCard(card){
    console.log(card);
    this.props.addCard(card);

    const title = '';
    const priority = '';
    const created_by = '';
    const assigned_to = '';
    this.setState({
      title,
      priority,
      created_by,
      assigned_to
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.addCard(this.state);
  }

  handleTitleChange(event) {
    this.setState({ title : event.target.value });
  }

  handlePriorityChange(event) {
    this.setState({ priority : event.target.value });
  }

  handleCreatedByChange(event) {
    this.setState({ created_by : event.target.value });
  }

  handleAssignedToChange(event) {
    this.setState({ assigned_to : event.target.value });
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <input type="text" placeholder="title" onChange={this.handleTitleChange} value={this.state.title} />
        </div>
        <div>
          <input type="text" placeholder="priority" onChange={this.handlePriorityChange} value={this.state.priority} />
        </div>
        <div>
          <input type="text" placeholder="created by" onChange={this.handleCreatedByChange} value={this.state.created_by} />
        </div>
        <div>
          <input type="text" placeholder="assigned to" onChange={this.handleAssignedToChange} value={this.state.assigned_to} />
        </div>
        <div>
          <button type="submit">Add Card</button>
        </div>
      </form>
    )
  }

}



class App extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      cards : [],
      todo : []
    };

    this.addCard = this.addCard.bind(this);
  }

  addCard(card){
    this.setState({
      cards : this.state.cards.concat(card)
    });
  }

  render(){
    return (
      <div>
        <h1>My Board</h1>
        <NewCard addCard={this.addCard}/>
        <Queue cards={this.state.cards} />
        <Doing cards={this.state.cards}/>
        <Done cards={this.state.cards}/>
      </div>
    );
  }

  }

ReactDOM.render(
  // component to render
  <App />,

  // where to inject this component
  // dom element, or use getElementById
  boardContainer
);