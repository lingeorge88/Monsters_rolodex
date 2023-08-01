import React from 'react';
import './card.styles.css';
import { Monster } from '../../App';

type CardProps = {
  monster: Monster;
}

const Card = ({monster}: CardProps) => {
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