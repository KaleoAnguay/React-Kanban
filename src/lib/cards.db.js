
  const cardsFromFakeDB = [
    {
      title: 'Build Computer',
      priority: 'Medium',
      status: 'To Do',
      createdBy: 'Kaleo Anguay',
      assignedTo: 'Tony Do'
    },
    {
      title: 'Eat dinner',
      priority: 'High',
      status: 'Done',
      createdBy: 'Kaleo Anguay',
      assignedTo: 'Everyone'
    },
    {
      title: 'Watch video',
      priority: 'Low',
      status: 'Doing',
      createdBy: 'Kaleo Anguay',
      assignedTo: 'Kaleo Anguay'
    }
  ];

export const getCardsFromFakeXHR = () => new Promise((resolve,reject) => {
  setTimeout(() => resolve(cardsFromFakeDB), 500);
});
export const addCardToFakeXHR = (card) => new Promise((resolve,reject) => {
  setTimeout(() =>{
    card._id = Math.random();
    cardsFromFakeDB.push(card);
    resolve(cardsFromFakeDB);
  },500);
});

