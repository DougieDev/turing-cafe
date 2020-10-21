import React, { Component } from 'react';
import './App.css';
import { getReservations, postReservation } from '../apiCalls';
import CardContainer from '../CardContainer/CardContainer'
import Form from '../Form/Form'


class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations: [],
      error: ""
    }
  }

  componentDidMount = () => {
    getReservations()
    .then(reservations => this.setState({ reservations: reservations }))
    .catch(error => this.setState({ error: "Something is amiss!" }))
  }

  createReservation = (reservation) => {
    this.setState({ reservations: [...this.state.reservations], reservation})
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <Form createReservation={this.createReservation} />
        </div>
        <div className='resy-container'>
          <CardContainer reservations={this.state.reservations} />
        </div>
       </div>
    )
  }
}

export default App;