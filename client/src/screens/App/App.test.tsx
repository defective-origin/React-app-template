import React from 'react'
import { render, screen } from '../../intl-test.utils'

// components
import App from './App'

test('renders learn react link', () => {
  render(<App />)
  const linkElement = screen.getByText(/learn react/i)
  expect(linkElement).toBeInTheDocument()
})
