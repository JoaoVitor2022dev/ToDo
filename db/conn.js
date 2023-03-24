const { Sequelize } = require('sequelize'); 

const sequileze = new Sequelize('nodemvc2', 'root', 'vitordev123', { 
   host: 'localhost',
   dialect: 'mysql',
})

try {
    
  sequileze.authenticate(); 
  console.log('API conectada ao Banco de Dados mySQL'); 

} catch (error) {
    
  console.log(`Nao foi possivel conectar: ${error}`); 

}

module.exports = sequileze; 

