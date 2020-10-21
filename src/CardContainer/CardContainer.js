import React from 'react'
import './CardContainer.css'
import Card from '../Card/Card'

const CardContainer = ({ reservations }) => {
    const cards = reservations.map((reservation) => {
        return <Card { ...reservation } />
    })
    return <section className='card-container'>{cards}</section>
};

export default CardContainer;