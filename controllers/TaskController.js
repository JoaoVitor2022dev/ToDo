const Task = require("../models/Task");

module.exports = class TaskController { 
  
   // renderizar uma pagina...
  static createTask( req , res ){
     res.render('tasks/create'); 
  }

  // method para mandar dados para o banco de dados...
  static async createTaskSave( req , res ) {
   // dados em objetos...
    const task = {
      title: req.body.title,
      description: req.body.description, 
      done: false
    }

    // validaçoes
    //processar dados

    // function para  o method post 
    await Task.create(task);

    res.redirect('/tasks');

  }

  // renderizar outra pagina pagina tasks/all 
  static showTasks(  req , res) {
     res.render('tasks/all');
  }
}

