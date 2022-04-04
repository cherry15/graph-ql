import { render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('renders learn react link', () => {
    render(<App />)
    const elem = screen.getByText(/track/i)
    expect(elem).toBeInTheDocument()
  })
})
