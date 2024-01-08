const app = require('../app.js');
const request = require('supertest');

describe('Todo Routes', () => {
    it('should return all todos get /todos', (done) => {
        request(app)
            .get('/todos')
            .expect(200)
            .then(response => {
                const firstdata = response.body[0];
                expect(firstdata.title).toBe('belajar Sequelize');
                done();
            })
            .catch(err => done(err));
    });

    it('should add a new todo on POST /todos', (done) => {
        const newTodo = {
            title: 'New Todo',
        };

        request(app)
            .post('/todos')
            .send(newTodo)
            .expect(201) 
            .then(response => {
                expect(response.body.message).toBe('belajar Sequelize1');
                expect(response.body.data.title).toBe('New Todo');
                done();
            })
            .catch(err => done(err));
    });


    it('should delete a todo on DELETE /todos/:id', (done) => {
        request(app)
            .delete('/todos/1') 
            .expect(200)
            .then(response => {
                expect(response.body.message).toBe('belajar Sequelize2');
                done();
            })
            .catch(err => done(err));
    });
});
