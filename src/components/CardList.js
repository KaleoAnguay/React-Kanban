import React from 'react';
import Card from './Card';


const CardList = ({ cards, title }) =>
  <ul>
    <h1> { title } </h1>
    {
      cards.map( ({_id, title, priority, createdBy, assignedTo }) =>
        <Card
          key={_id }
          title={ title }
          priority={ priority }
          createdBy={ createdBy }
          assignedTo={ assignedTo }
        />
      )
    }
  </ul>

export default CardList