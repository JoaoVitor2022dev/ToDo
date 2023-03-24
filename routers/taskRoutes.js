const express = require('express'); 
const router = express.Router(); 

const TaskController = require('../controllers/TaskController');

// renderizaçao
router.get('/add', TaskController.createTask); 

// mandar dados para o banco
router.post('/add', TaskController.createTaskSave);

// renderizar
router.get('/', TaskController.showTasks); 


module.exports = router; 