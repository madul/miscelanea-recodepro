const app = require('./config/server');

var rotaHome = require('./routes/home')(app);

app.listen(3001, (err,res)=>{
  if(err) throw err;
  else 
    console.log("Servidor rodando!")
})