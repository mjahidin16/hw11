const express = require('express');
const router = express.Router(); // Perbaikan: menggunakan express.Router() dengan huruf 'R' besar
const todoRouter = require('./todo');

router.use('/todos', todoRouter); // Perbaikan: menggunakan '/todos' sebagai path

module.exports = router;
