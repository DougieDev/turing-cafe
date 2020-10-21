import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import CardContainer from './CardContainer'

describe('CardContainer', () => {
    it('should render cards', () => {
        const cards = [
            { name: 'Dougie', date: '09/18', time: '7:00', number: 2 }
        ]
        const { getByText } = render(<CardContainer reservations={cards} />)
        expect(getByText('Dougie')).toBeInTheDocument()
        expect(getByText('09/18')).toBeInTheDocument()
        expect(getByText('7:00')).toBeInTheDocument()
        expect(getByText('2')).toBeInTheDocument()
    })
})