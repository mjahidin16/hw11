const express = require('express');
const router = express.Router(); 
const TodoController = require('../controller/todoController');

router.get('/', TodoController.getAll);
router.get('/:id', TodoController.getById);
router.post('/', TodoController.create); 
router.delete('/:id', TodoController.delete);

module.exports = router;
