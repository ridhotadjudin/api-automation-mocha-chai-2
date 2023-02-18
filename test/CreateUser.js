const supertest = require('supertest');
const expect = require('chai').expect;
const auth = require('./auth.js');

const baseURL = 'https://kasir-api.belajarqa.com';
const accessToken = auth();
console.log(accessToken)



describe('POST /users', () => {
    const request = supertest(baseURL);
    const data = {
        "name": "kasir-serbaguna11",
        "email": "kasir11@email.com",
        "password": "passkasir11",
    };
    // Positive test cases
    it('should create a new user with valid data', async () => {
        const response = await request
            .post('/users')
            .set('Authorization', `Bearer ${accessToken}`)
            .send(data);

        expect(response.status).to.equal(201);
        expect(response.body).to.have.property('id');
        expect(response.body.name).to.equal(data.name);
        expect(response.body.email).to.equal(data.email);
    });

    // it('should create a new user with minimum data', async () => {
    //     const data = {
    //         email: 'kasir12@email.com',
    //         password: 'passkasir12',
    //     };

    //     const response = await request
    //         .post('/users')
    //         .set('Authorization', `Bearer ${accessToken}`)
    //         .send(data);

    //     expect(response.status).to.equal(201);
    //     expect(response.body).to.have.property('id');
    //     expect(response.body.email).to.equal(data.email);
    // });

    // it('should create a new user with maximum data', async () => {
    //     const data = {
    //         name: 'kasir-serbaguna13',
    //         email: 'kasir13@email.com',
    //         password: 'passkasir3',
    //         phone: '1234567890',
    //         address: 'Jl. Benda No. 1',
    //         city: 'Jakarta',
    //         province: 'DKI Jakarta',
    //         country: 'Indonesia',
    //         zip_code: '12345',
    //     };

    //     const response = await request
    //         .post('/users')
    //         .set('Authorization', `Bearer ${accessToken}`)
    //         .send(data);

    //     expect(response.status).to.equal(201);
    //     expect(response.body).to.have.property('id');
    //     expect(response.body.name).to.equal(data.name);
    //     expect(response.body.email).to.equal(data.email);
    //     expect(response.body.phone).to.equal(data.phone);
    //     expect(response.body.address).to.equal(data.address);
    //     expect(response.body.city).to.equal(data.city);
    //     expect(response.body.province).to.equal(data.province);
    //     expect(response.body.country).to.equal(data.country);
    //     expect(response.body.zip_code).to.equal(data.zip_code);
    // });

    // // Negative test cases
    // it('should return 401 unauthorized when Authorization header is missing', async () => {
    //     const data = {
    //         name: 'kasir-serbaguna4',
    //         email: 'kasir4@email.com',
    //         password: 'passkasir4',
    //     };

    //     const response = await request
    //         .post('/users')
    //         .send(data);

    //     expect(response.status).to.equal(401);
    //     expect(response.body).to.have.property('message');
    //     expect(response.body.message).to.equal('Unauthorized');
    // });

    // it('should return 400 bad request when email is missing', async () => {
    //     const data = {
    //         name: 'kasir-serbaguna5',
    //         password: 'passkasir5',
    //     };

    //     const response = await request
    //         .post('/users')
    //         .set('Authorization', `Bearer ${accessToken}`)
    //         .send(data);

    //     expect(response.status).to.equal(400);
    //     expect(response.body).to.have.property('message');
    //     expect(response.body.message).to.equal('"email" is required');
    // });

    // it('should return 400 bad request when password is missing', async () => {
    //     const data = {
    //         name: 'kasir-serbaguna6',
    //         email: 'kasir6@email.com',
    //     };
    //     const response = await request
    //         .post('/users')
    //         .set('Authorization', `Bearer ${accessToken}`)
    //         .send(data);

    //     expect(response.status).to.equal(400);
    //     expect(response.body).to.have.property('message');
    //     expect(response.body.message).to.equal('"password" is required');
    // });

    // it('should return 400 bad request when email is invalid', async () => {
    //     const data = {
    //         name: 'kasir-serbaguna7',
    //         email: 'kasir7@invalid',
    //         password: 'passkasir7',
    //     };

    //     const response = await request
    //         .post('/users')
    //         .set('Authorization', `Bearer ${accessToken}`)
    //         .send(data);

    //     expect(response.status).to.equal(400);
    //     expect(response.body).to.have.property('message');
    //     expect(response.body.message).to.equal('"email" must be a valid email');
    // });
});