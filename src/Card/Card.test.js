import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import Card from './Card'

describe('Card', () => {
    it('should render a card', () => {
        const reservation = {
            name: 'Dougie',
            date: '09/18',
            time: '7:00',
            number: 2,
            id: 1
        }
        const { getByText } = render(<Card {...reservation} />)
        expect(getByText('Dougie')).toBeInTheDocument();
        expect(getByText('09/18')).toBeInTheDocument();
        expect(getByText('7:00')).toBeInTheDocument();
    })
})