import app from '../src/app'
import  request  from "supertest";

describe('GET / tasks', () => { 

    test('should respond with a 200 status code', async () => {
        const response = await request(app).get('/tasks').send()
        expect(response.statusCode).toBe(200)
    });

    test('should respod with an array', async () => { 
        const response = await request(app).get('/tasks').send();
        expect(response.body).toBeInstanceOf(Array)
    });

});

describe('POST /tasks', () => { 
//should respond with s 200 status code
    test('should respond with as 200 status code', async () => {
        const response = await request(app).post('/tasks').send();
        expect(response.statusCode).toBe(200);
        
    })

    //should respond with content type of aplication/json in header
    test('should have a content-type: application/json', async() => {
        const response= await request(app).post('/tasks').send();
        expect(response.headers['content-type']).toEqual(
            expect.stringContaining("json")
            )
    })
    // sould respod with a json object containing the new tasks with id
    test('should respond with an task ID',async () => {
        const response= await request(app).post('/tasks').send({
            tittle:"tasks",
            description:"test description",
        });
        expect(response.body.id).toBeDefined();
    })
})
