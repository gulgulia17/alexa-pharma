import { POST } from './route'
import fetch, { Request, Response } from 'node-fetch'
(global as any).fetch = fetch as any
(global as any).Response = Response as any

it('returns success for valid JSON', async () => {
  const req = new Request('http://localhost/api/contact', {
    method: 'POST',
    body: JSON.stringify({ message: 'hello' }),
  })

  const res = await POST(req)
  const json = await res.json()

  expect(json).toEqual({ success: true })
  expect(res.status).toBe(200)
})
