import { render, screen, fireEvent } from '@testing-library/react'
import ContactPage from './Contact'

jest.mock('../lib/contact', () => ({ submitContact: jest.fn(() => Promise.resolve()) }))
import { submitContact } from '../lib/contact'

it('submits form data', async () => {
  const fetchMock = submitContact as jest.Mock

  render(<ContactPage />)

  fireEvent.change(screen.getByLabelText(/full name/i), { target: { value: 'Test User' }})
  fireEvent.change(screen.getByLabelText(/email address/i), { target: { value: 'test@example.com' }})
  fireEvent.change(screen.getByLabelText(/message/i), { target: { value: 'Hello' }})

  fireEvent.submit(screen.getByRole('button', { name: /send message/i }))

  expect(fetchMock).toHaveBeenCalled()
})
