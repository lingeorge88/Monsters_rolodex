import React from 'react';
import './card.styles.css';

const Card = ({monster}) => {
    const { name, email, id } = monster;
  return (
    <div className='card-container' key={monster.id}>
                <img src={`https://robohash.org/${id}?set=set2`} alt={`monster ${name}`} />
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
  )
}

export default Card