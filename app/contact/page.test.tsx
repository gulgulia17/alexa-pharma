import { render, screen, fireEvent } from '@testing-library/react'
import ContactPage from './page'

jest.mock('next/image', () => ({ __esModule: true, default: (props: any) => {
  // eslint-disable-next-line @next/next/no-img-element
  return <img {...props} alt={props.alt} />
}}))

it('submits form and posts to /api/contact', async () => {
  const fetchMock = jest.fn().mockResolvedValue({})
  global.fetch = fetchMock as any

  render(<ContactPage />)

  fireEvent.change(screen.getByLabelText(/full name/i), { target: { value: 'Test User' }})
  fireEvent.change(screen.getByLabelText(/email address/i), { target: { value: 'test@example.com' }})
  fireEvent.change(screen.getByLabelText(/message/i), { target: { value: 'Hello' }})

  fireEvent.submit(screen.getByRole('button', { name: /send message/i }))

  expect(fetchMock).toHaveBeenCalledWith('/api/contact', expect.objectContaining({ method: 'POST' }))
})
