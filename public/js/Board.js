const boardContainer = document.getElementById("main");

const getCardsFromFakeDB = () => new Promise((resolve,reject) => {
  const cardsFromFakeDB = [
    {
      title: 'Build Computer',
      priority: 'Medium',
      status: 'To Do',
      created_by: 'Kaleo Anguay',
      assigned_to: 'Tony Do'
    },
    {
      title: 'Eat dinner',
      priority: 'High',
      status: 'Done',
      created_by: 'Kaleo Anguay',
      assigned_to: 'Everyone'
    },
    {
      title: 'Watch video',
      priority: 'Low',
      status: 'Doing',
      created_by: 'Kaleo Anguay',
      assigned_to: 'Kaleo Anguay'
    }
  ];
  resolve(cardsFromFakeDB);
})
const Card = (props) => (
  <div className = "card">
    <h3> Task: { props.card.title }</h3>
    <p> Status: { props.card.status} </p>
    <p> Priority: { props.card.priority }</p>
    <p> Created By: { props.card.created_by }</p>
    <p> Assigned to :{ props.card.assigned_to }</p>
  </div>
);
console.log(Card)



const CardList = ({ cards }) => (
  <ul>
    { cards
      .map( card => <Card card={card} /> )
    }
  </ul>
);

// to do search
const ToDoSearch = filter => ({ status }) =>
  status === 'To Do';

//to do list
const ToDoList = ({ cards, filter }) => (
   <ul>
   {cards
      .filter(ToDoSearch())
      .map( card => <Card card={card} />)
   }
   </ul>
);

//done search
const DoneSearch = filter => ({ status }) =>
  status === 'Done';

// done list
const DoneList = ({ cards, filter }) => (
  <ul>
  {cards
    .filter(DoneSearch())
    .map( card => <Card card={card} />)
  }
  </ul>
)

//doing search
const DoingSearch = filter => ({ status }) =>
  status === 'Doing';

//doing list
const DoingList = ({ cards, filter }) => (
  <ul>
  {cards
    .filter(DoingSearch())
    .map( card => <Card card={card} />)
  }
  </ul>
)

class Done extends React.Component {
  render(){
    return (
        <div>
          <div className="done">
            <h1>Done</h1>
            <DoneList cards={this.props.cards}></DoneList>
          </div>
        </div>

    )
  }
}

class Doing extends React.Component {
  constructor(props) {
    super(props);

  };
  render(){
    return (
      <div>
        <div className="doing">
          <h1>Doing</h1>
          <DoingList cards={this.props.cards}></DoingList>
        </div>
      </div>
    )
  }
}

class ToDo extends React.Component {
  constructor(props){
    super(props);

    };
  render(){
    return (
      <div>
        <div className="toDo">
          <h1>To Do</h1>
          <ToDoList cards={this.props.cards}></ToDoList>
        </div>
      </div>
    )
  }
}

class NewCard extends React.Component{
  constructor(props){
    super(props);
    console.log(constructor)

    // set the initial state
    this.state = {
      title: '',
      priority: '',
      created_by: '',
      assigned_to: ''
    };

    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleStatusChange = this.handleStatusChange.bind(this);
    this.handlePriorityChange = this.handlePriorityChange.bind(this);
    this.handleCreatedByChange = this.handleCreatedByChange.bind(this);
    this.handleAssignedToChange = this.handleAssignedToChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

  handleSubmit(event) {
    event.preventDefault();
    this.addCard(this.state);
  }

  handleTitleChange(event) {
    this.setState({ title : event.target.value });
  }

  handleStatusChange(event) {
    this.setState({ status: event.target.value});
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
        <input type='radio' placeholder='status' name='status' onChange={this.handleStatusChange} value='To Do'/> To Do <br/>
        <input type='radio' placeholder='status' name='status' onChange={this.handleStatusChange} value='Doing'/> Doing <br/>
        <input type='radio' placeholder='status' name='status' onChange={this.handleStatusChange} value='Done'/> Done <br/>
        </div>
        <div>
          <button type='submit'>Add Card</button>
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
      todo : [],
      doing : [],
      done: []
    };

    this.addCard = this.addCard.bind(this);
    console.log(this);
  }

  componentWillMount() {
    this.getBCard()
    .then( cards => {
      this.setState({ cards });
    })
  }
  getBCard(){
    return getCardsFromFakeDB();
  }

  Filter(e) {
    console.log(e.target.value);
    this.setState({ filter: e.target.value });
  }

  addCard(card){
    this.setState({
      cards : this.state.cards.concat(card)
    });
  }



  render(){
    return (
      <div id='board'>
        <h1>My Board</h1>
        <NewCard addCard={this.addCard}/>
        <div className='list'>
          <ToDo cards={this.state.cards} />
          <Doing cards={this.state.cards}/>
          <Done cards={this.state.cards}/>
        </div>
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