import React, { Component } from 'react';
import './App.css';
import { getReservations } from '../apiCalls';
import CardContainer from '../CardContainer/CardContainer'


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

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'></div>
        <div className='resy-container'>
          <CardContainer reservations={this.state.reservations} />
        </div>
       </div>
    )
  }
}

export default App;

/*
Components Needed:
Reservation Container
Reservation Form
Reservation Card
*/
