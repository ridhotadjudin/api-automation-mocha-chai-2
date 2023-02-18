const request = require('supertest');

module.exports = async function () {
    const response = await request('https://kasir-api.belajarqa.com')
        .post('/authentications')
        .send({
            email: 'jayamakmur@email.com',
            password: 'passjayamakmur'
        });
    console.log(response)
    const token = response.body.data.accessToken;
    console.log(token)
    return token;
};
