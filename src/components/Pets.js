import React from 'react';

const Pets = (props) => {
    return(
      <div>
        <ul>
          <li>My pet is a {props.petType}</li>
          <li>It's age is {props.age}</li>
          <li>It's favourite food is {props.FavFood}</li>
          <li>It's excersize is {props.excersize}</li>
        </ul>
      </div>
    )
  }
  export default Pets;