const express = require('express'); 
const router = express.Router(); 

const TaskController = require('../controllers/TaskController');

// renderizaçao
router.get('/add', TaskController.createTask); 

// mandar dados para o banco
router.post('/add', TaskController.createTaskSave);

// removver dados do banco
router.post('/remove', TaskController.removeTask); 

// renderizar
router.get('/', TaskController.showTasks); 




module.exports = router; 
