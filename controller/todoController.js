const { Todo } = require('../models');

class TodoController {
    static getAll = async (req, res, next) => {
        try {
            const data = await Todo.findAll(
                {
                    where: {status: 'active'}
                }
            )

            if (data) {
                res.status(200).json(data);
            } else {
                res.status(404).json({ message: 'No Todos found' });
            }
        } catch (err) {
            next(err);
        }
    }

    static getById = async (req, res, next) => {
        try {
            const { id } = req.params;
            const todo = await Todo.findByPk(id);

            if (todo) {
                res.status(200).json(todo);
            } else {
                res.status(404).json({ message: 'Todo not found' });
            }
        } catch (err) {
            next(err);
        }
    }

    static create = async (req, res, next) => {
        try {
            const { title, status } = req.body;
            const newTodo = await Todo.create({ title, status });

            res.status(201).json(newTodo);
        } catch (err) {
            next(err);
        }
    }

    static delete = async (req, res, next) => {
        try {
            const { id } = req.params;
            const todo = await Todo.findByPk(id);

            if (todo) {
                await todo.destroy();
                res.status(204).json();
            } else {
                res.status(404).json({ message: 'Todo not found' });
            }
        } catch (err) {
            next(err);
        }
    }
}

module.exports = TodoController;