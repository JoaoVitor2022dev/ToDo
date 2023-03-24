const express = require("express"); 
const exphbs = require("express-handlebars"); 

// execultar o express
const app = express(); 

// conectar em uma banco de dados... 
const conn = require("./db/conn");

// conection task 
const Task = require('./models/Task');

// rotas 
const taskRoutes = require('./routers/taskRoutes');

// consfig da views de handlebars
app.engine('handlebars', exphbs.engine()); 
app.set('view engine', 'handlebars'); 


// forma de comunicao dda api com a views; 
app.use(
    express.urlencoded({
       extended: true
    })
); 

// forma de comunicaçao 
app.use(express.json());

// config de css
app.use(express.static('public'));

// config dos router
app.use('/tasks', taskRoutes);

// config de servidor... 

conn.sync().then(() => { 
    app.listen(5000);
}).catch( (error) => {
   console.log(error);
});





