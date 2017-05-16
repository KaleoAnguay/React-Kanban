import React, { Component } from 'react';
import { connect } from 'react-redux';
import {/* addCardToFakeXHR, */getCardsFromFakeXHR } from '../lib/cards.db.js'
import { loadCards, addCard } from '../actions';
import CardList from '../components/CardList';
import NewCard from '../NewCardForm';


// const boardContainer = document.getElementById("main");


// const getCardsFromFakeDB = () => new Promise((resolve,reject) => {
//   const cardsFromFakeDB = [
//     {
//       title: 'Build Computer',
//       priority: 'Medium',
//       status: 'To Do',
//       created_by: 'Kaleo Anguay',
//       assigned_to: 'Tony Do'
//     },
//     {
//       title: 'Eat dinner',
//       priority: 'High',
//       status: 'Done',
//       created_by: 'Kaleo Anguay',
//       assigned_to: 'Everyone'
//     },
//     {
//       title: 'Watch video',
//       priority: 'Low',
//       status: 'Doing',
//       created_by: 'Kaleo Anguay',
//       assigned_to: 'Kaleo Anguay'
//     }
//   ];
//   resolve(cardsFromFakeDB);
// })
// // const Card = (props) => (
// //   <div className = "card">
// //     <h3> Task: { props.card.title }</h3>
// //     <p onClick={() =>this.click(this.props.card)} >Status of Task: { this.props.card.status }> </p>
// //     <p> Priority: { props.card.priority }</p>
// //     <p> Created By: { props.card.created_by }</p>
// //     <p> Assigned to :{ props.card.assigned_to }</p>
// //   </div>
// // );
// // console.log(Card)

// class Card extends React.Component {
//   constructor(props){
//     super(props);
//     this.handleStatusChange = this.handleStatusChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);

//   }

//   handleClick(card){
//     console.log(card);
//     switch(card.status) {
//       case 'To Do':
//        card.status = 'To Do';
//       break;
//       case 'Done':
//         card.status = 'Done';
//       break;
//       case 'Doing':
//         card.status = 'Doing';
//     }
//     console.log('card',card);
//     this.setState({});
//   }

// updateCard(card) {
//   console.log(this.props);
//   this.props.updateCard(card);

//    const title = this.props.card.title;
//     const priority = "";
//     const status = "";
//     const createdBy = "";
//     const assignedTo = "";
//     this.setState({
//       title,
//       priority,
//       status,
//       createdBy,
//       assignedTo
//     });
//   }

//   handleSubmit(event) {
//     event.preventDefault();
//     this.updateCard(this.state);
//   }

//   handleStatusChange(event) {
//     console.log(card);
//     this.setState({ status: event.target.value });
//   }
//   render(){
//     return (
//   <div className = "card">
//     <h3>Task: { this.props.card.title }</h3>
//     <div>Priority Level:  { this.props.card.priority }</div>
//     <div onClick={() =>this.handleClick(this.props.card)} >Status of Task: { this.props.card.status }</div>
//     <div>Created By:  { this.props.card.createdBy }</div>
//     <div>Assigned To:  { this.props.card.assignedTo }</div>
//     <form onSubmit={this.handleSubmit}>
//         <div>
//           <button type="submit">Update Card</button>
//         </div>
//     </form>
//   </div>
//     );
//   }
// }

// class NewCard extends React.Component{
//   constructor(props){
//     super(props);
//     console.log(constructor)

//     // set the initial state
//     this.state = {
//       title: '',
//       priority: '',
//       created_by: '',
//       assigned_to: ''
//     };

//     this.handleTitleChange = this.handleTitleChange.bind(this);
//     this.StatusChange = this.StatusChange.bind(this);
//     this.handlePriorityChange = this.handlePriorityChange.bind(this);
//     this.handleCreatedByChange = this.handleCreatedByChange.bind(this);
//     this.handleAssignedToChange = this.handleAssignedToChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   addCard(card){
//     console.log(card);
//     this.props.addCard(card);

//     const title = '';
//     const status = '';
//     const priority = '';
//     const createdBy = '';
//     const assignedTo = '';
//     this.setState({
//       title,
//       status,
//       priority,
//       createdBy,
//       assignedTo
//     });
//   }

//   handleSubmit(event) {
//     event.preventDefault();
//     this.addCard(this.state);
//   }

//   handleTitleChange(event) {
//     this.setState({ title : event.target.value });
//   }

//   StatusChange(event) {
//     this.setState({ status: event.target.value});
//   }

//   handlePriorityChange(event) {
//     this.setState({ priority : event.target.value });
//   }

//   handleCreatedByChange(event) {
//     this.setState({ created_by : event.target.value });
//   }

//   handleAssignedToChange(event) {
//     this.setState({ assigned_to : event.target.value });
//   }

//   render(){
//     return (
//       <form id='submit' onSubmit={this.handleSubmit}>
//         <div>
//           <input type='text' placeholder='title' onChange={this.handleTitleChange} value={this.state.title} />
//         </div>

//         <div>
//           <input type='text' placeholder='created by' onChange={this.handleCreatedByChange} value={this.state.created_by} />
//         </div>
//         <div>
//           <input type='text' placeholder='assigned to' onChange={this.handleAssignedToChange} value={this.state.assigned_to} />
//         </div>

//         <div> Priority of Task: <br />
//           <input type='radio' placeholder='priority' name='priority' onChange={this.handlePriorityChange} value='Low' /> Low <br/>
//           <input type='radio' placeholder='priority' name='priority' onChange={this.handlePriorityChange} value='Medium' /> Medium <br/>
//           <input type='radio' placeholder='priority' name='priority' onChange={this.handlePriorityChange} value='High' /> High <br/>
//         </div>

//         <div> Status of Task: <br />
//         <input type='radio' placeholder='status' name='status' onChange={this.StatusChange} value='To Do'/> To Do <br/>
//         <input type='radio' placeholder='status' name='status' onChange={this.StatusChange} value='Doing'/> Doing <br/>
//         <input type='radio' placeholder='status' name='status' onChange={this.StatusChange} value='Done'/> Done <br/>
//         </div>
//         <div>
//           <button type='submit'>Add Card</button>
//         </div>
//       </form>
//     )
//   }
// }


class App extends Component {

  componentWillMount() {
    getCardsFromFakeXHR()
    .then( cards => {
      this.props.loadCards(cards)
    })
  }

  addCard = (card) => {
    console.log(card)
    this.props.addCard(card)
  }

  render() {
    console.log(this.props);
    return (

      <div id='board'>
        <h1>My Board</h1>
        <NewCard addCard={this.addCard}/>
        <div className='list'>
          <div id='toDo'>
            <CardList
              cards={this.props.cards.filter(card => card.status ==='To Do')}
              title='To Do'
            />
          </div>
          <div id='doing'>
            <CardList
              cards={this.props.cards.filter(card => card.status ==='Doing')}
              title='Doing'
            />
          </div>
          <div id='done'>
            <CardList
              cards={this.props.cards.filter(card => card.status ==='Done')}
              title='Done'
            />
          </div>
        </div>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  console.log('state',state.cards);
  return {
    cards: state.cards
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    loadCards: cards => {
      dispatch(loadCards(cards))
    },
    addCard: card => {
      dispatch(addCard(card))
    }
  }
}

const ConnectedApp = connect(
  mapStateToProps,
  mapDispatchToProps

)(App);
export default ConnectedApp;