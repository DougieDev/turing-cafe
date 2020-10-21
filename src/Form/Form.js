import React, { Component } from 'react';
import './Form.css'

class Form extends Component {
    constructor(props) {
    super(props)
    this.state = {
        name: '',
        date: '',
        time: '',
        number: '',
        id: ''
    }
}

handleChange = (e) => {
    const {name, value} = e.target
    this.setState({ [name]: value })
}

submitForm = (e) => {
    e.preventDefault()
    this.setState({
        id: Date.now()
    })
    this.props.createReservation(this.state)
}

render() {
    return(
        <section className='form'>
            <form>
                <input 
                    type='text'
                    name='name'
                    id='name'
                    onChange={this.handleChange}
                    value={this.state.name}
                    placeholder='What is your name?'
                />
                <input
                    type='text'
                    name='time'
                    id='time'
                    onChange={this.handleChange} 
                    value={this.state.time}
                    placeholder='Reservation Time?'
                />
                <input 
                    type='text'
                    name='date'
                    id='date'
                    onChange={this.handleChange}
                    value={this.state.date}
                    placeholder='date(mm/dd)'
                />
                <input 
                    type='number'
                    name='number'
                    id='number'
                    onChange={this.handleChange}
                    value={this.state.number}
                    placeholder='Party size?'
                />
                <button type='submit' onClick={this.submitForm}>Make Reservation</button>
            </form>
        </section>
    )
}
}

export default Form