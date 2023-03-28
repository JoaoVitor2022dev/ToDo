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
    // 1  -  validaçoes
    // 2 - processar dados

    // function para  o method post 
    await Task.create(task);

    res.redirect('/tasks');

  }
 
  // method de remoçao 

  static async removeTask( req , res ) {
    
    const id = req.body.id; 

    await Task.destroy({ where : { id : id } }); 
     
    res.redirect('/tasks');

  }

  // renderizar outra pagina pagina tasks/all 
  static async showTasks(  req , res) {

  
   const tasks = await Task.findAll({ raw: true })


     res.render('tasks/all', { tasks });
  }

}


