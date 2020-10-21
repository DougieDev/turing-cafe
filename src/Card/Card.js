import React from 'react'
import './Card.css'

const Card = ({id, name, date, time, number}) => {
    return(
        <section className='card'>
            <h1><span> Name: </span>{name}</h1>
            <p><span> Date: </span>{date}</p>
            <p><span> Time: </span>{time}</p>
            <p><span> Number: </span>{number}</p>
        </section>
    )
}

export default Card