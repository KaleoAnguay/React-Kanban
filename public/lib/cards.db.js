
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

export const getCardsFromFakeXHR = () => new Promise((resolve,reject) => {
  setTimeout(() => resolve(booksFromFakeDB), 500);
});
export const addCardToFakeXHR = (book) => new Promise((resolve,reject) => {
  setTimeout(() =>{
    card._id = Math.random();
    cardsFromFakeDB.push(card);
    resolve(booksFromFakeDB);
  },500);
});

