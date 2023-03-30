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


  static async updateTask( req , res) {
     
    const id = req.params.id
             
    const task = await Task.findOne({ where: { id: id }, raw: true })

    res.render('tasks/edit', { task })

  }


  static async updateTaskPost( req , res ) {
     
   try {
     
    const id = req.body.id; 
  
    const task = {
       title: req.body.title,
       description: req.body.description
    } 
 
    await Task.update(task, { where: { id : id } })
 
  
    res.redirect('/tasks'); 
 

   } catch (error) {
     
    console.log(error);

   }
     
  }

  static async toggleTaskStatus( req , res ) {

    const id = req.body.id; 

    const task = { 
      done: req.body.done === '0' ? true : false,
    }

    await Task.update(task,  { where : { id: id } })
 
    res.redirect('/tasks');

  }

  // renderizar outra pagina pagina tasks/all 
  static async showTasks(  req , res) {

  
   const tasks = await Task.findAll({ raw: true })


     res.render('tasks/all', { tasks });
  }

}

