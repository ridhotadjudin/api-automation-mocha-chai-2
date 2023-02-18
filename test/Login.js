// Import the necessary libraries
const request = require('supertest');
const { expect } = require('chai');

// Set the base URL for the API
const baseUrl = 'https://kasir-api.belajarqa.com';

// Declare variables to store the access token and refresh token
let accessToken;
let refreshToken;

describe('Authentication Endpoint', () => {
  // Send a POST request to /authentications before each test to get the tokens
  beforeEach(async () => {
    const response = await request(baseUrl)
      .post('/authentications')
      .send({
        email: 'jayamakmur@email.com',
        password: 'passjayamakmur'
      });

    expect(response.statusCode).to.equal(201);
    expect(response.body).to.have.property('data');
    expect(response.body.data).to.have.property('accessToken');
    expect(response.body.data).to.have.property('refreshToken');

    // Save the tokens as global variables
    accessToken = response.body.data.accessToken;
    refreshToken = response.body.data.refreshToken;
  });

  // Test the response status code
  it('should return a 201 status code', async () => {
    const response = await request(baseUrl)
      .post('/authentications')
      .send({
        email: 'jayamakmur@email.com',
        password: 'passjayamakmur'
      });

    expect(response.statusCode).to.equal(201);
  }).timeout(5000);

  // Test the response body
  it('should return the expected response body', async () => {
    const response = await request(baseUrl)
      .post('/authentications')
      .send({
        email: 'jayamakmur@email.com',
        password: 'passjayamakmur'
      });

    expect(response.body).to.have.property('data');
    expect(response.body.data).to.have.property('accessToken');
    expect(response.body.data).to.have.property('refreshToken');
  }).timeout(5000);
});

// Export the access token and refresh token as global variables
global.accessToken = accessToken;
global.refreshToken = refreshToken;
