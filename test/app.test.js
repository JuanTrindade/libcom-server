const request = require('supertest')
const app = require('../src/app')

describe('Testing server', () => {
  it('successfully starts the app', async () => {
    const response = await request(app).get('/')

    expect(response.status).toEqual(200)
    expect(response.body).toHaveProperty('message')
    expect(response.body.message).toBe('ok')
  })
})
