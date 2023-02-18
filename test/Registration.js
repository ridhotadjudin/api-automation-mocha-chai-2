// Import the necessary libraries
const supertest = require('supertest');
const chai = require('chai');
const expect = chai.expect;

// Set the base URL for the API
const api = supertest('https://kasir-api.belajarqa.com');

// Describe the API endpoint that you want to test
describe('Registration Endpoint', () => {
  // Define the request body for the test
  const requestBody = {
    "name": "nama Toko",
    "email": "sample@ex.com",
    "password": "123adsfadf@",
  };
  
  // Test the API endpoint to ensure it returns a successful response
  it('should return a successful response', async () => {
    const response = await api.post('/registration').send(requestBody);
    expect(response.statusCode).to.equal(201);
  });

  // Test the API endpoint to ensure it returns the expected response body
  it('should return the expected response message', async () => {
    const response = await api.post('/registration').send(requestBody);
    expect(response.body.message).to.equal('Toko berhasil didaftarkan');
  });

  // Test the API endpoint to ensure it returns the expected response headers
  it('should return the expected response headers', async () => {
    const response = await api.post('/registration').send(requestBody);
    expect(response.headers['content-type']).to.include('application/json');
  });
});
