const request = require('supertest')
const app = require("../app")

describe('API Endpoints', ()=>{
    // Check status with GET
    it('It should return 200', async()=>{
        const res=await request(app).get('/api');
        expect(res.statusCode).toEqual(200);
    });

    // Checking the property message exist using message
    it('It should return valid message', async()=>{
        const res=await request(app).get('/api');
        expect(res.body).toHaveProperty('message');
    });

    // Post data using POST
    it('It should post valid data', async () => {
        const data = { data: "Hello" };
        const res = await request(app)
            .post('/api/data')
            .send(data);
    
        expect(res.status).toBe(201); 
        expect(res.body.received).toBe("Hello"); 
    });
    
    
});