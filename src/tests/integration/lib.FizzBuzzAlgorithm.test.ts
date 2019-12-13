
import * as request from 'request';
import { app } from '../../app/app';
import * as  http from 'http';
const config = require('./../../../config.json');

describe('Test for fizz buzz Controller class', () => {
    let server;
    beforeAll((done) => {
        try {

            server = http.createServer(app);
            server.listen(done);
        } catch (error) {
            console.log('Error :', JSON.stringify(error));
            process.exit(1);
        }
    });

    test('Scenario: Check server running or not ====>\n', async (done) => {

        request(config.baseUrl, (error, response, body) => {
            expect(response.statusCode).toBe(200);
            done();
        });
    });

    test('Scenario: Provide invalid request parameter count less than 1  ====>\n', async (done) => {
        const count: number = -1;
        request(`${config.baseUrl}/api/v1/fizzbuzz/${count}`, (error, response, body) => {
            expect(response.statusCode).toBe(422);
            const bodyObject = JSON.parse(body)
            expect(bodyObject.error.message).toBe('Count parameter should be 1 to 100');
            done();
        });
    });

    test('Scenario: Provide invalid request parameter count greater than 100  ====>\n', async (done) => {
        const count: number = 101;
        request(`${config.baseUrl}/api/v1/fizzbuzz/${count}`, (error, response, body) => {
            expect(response.statusCode).toBe(422);
            const bodyObject = JSON.parse(body)
            expect(bodyObject.error.message).toBe('Count parameter should be 1 to 100');
            done();
        });
    });
    test('Scenario: Provide valid request parameter count   100  ====>\n', async (done) => {
        const count: number = 100;
        request(`${config.baseUrl}/api/v1/fizzbuzz/${count}`, (error, response, body) => {
            expect(response.statusCode).toBe(200);
            const bodyObject = JSON.parse(body);
              expect(bodyObject.length).toBe(100);
            done();
        });
    });
    afterAll((done) => {
        server.close(done);
    });
    // We can also add multiple scenarios 
});