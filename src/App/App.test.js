import React from 'react';
import ReactDOM from 'react-dom';
import { render, fireEvent, waitFor } from '@testing-library/react'
import App from './App';

describe('App', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  // it('should render a new card when form submit button is clicked', async () => {
  //   const { getByPlaceHolderText, getByText } = render(<App />)

  //   fireEvent.change(getByPlaceHolderText('What is your name?'), { target: {'Dougie'}})
  //   await waitFor(() => {
  //     expect(getByText("Christie")).toBeInTheDocument()
  //   })
  // })
})


