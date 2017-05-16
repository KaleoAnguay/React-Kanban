import React from 'react';

const Card = ({ title, priority, createdBy, assignedTo}) =>
  <li>
    <h3> Task: { title } </h3>
    <p> Priority Level: { priority } </p>
    <p>Created By: { createdBy } </p>
    <p>Assigned To:{ assignedTo } </p>
  </li>

export default Card;

