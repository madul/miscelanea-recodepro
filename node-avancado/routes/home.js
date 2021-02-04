
const {check, validationResult} = require('express-validator');

module.exports = (app) => {
  app.get('/', (req,res) =>{
    res.render('home',{nome: "", frase:"", bomDia: "", classe:""});
  })
  app.post('/', 
    [check('nome', 'Nome é obrigatório').notEmpty(), 
     check('escolha', 'Marque uma das opções').exists()],
    (req,res) =>{
    console.log(req.body)
    let error = validationResult(req);
    if (!error.isEmpty()){
      res.render ('home', {error: error, nome: "Oi", frase:"", bomDia: "", classe:""})
      console.log(error);
      return
    }
    if(req.body.escolha){
      if (req.body.escolha == 1 || req.body.escolha == 2){
        const pack = require(`../assets/pack${req.body.escolha}.json`)
        let { bomDia, classe} = Math.round(Math.random()) 
                          ? {bomDia:"bota a cara no sol, colega!!!",classe:"text-success"}
                          : {bomDia:"volte a dormir que hoje vai ser osso!",classe:"text-danger"}
        let frase = "";
          
        let randomNum = Math.round(Math.random()*4)
        frase = pack[randomNum]['frase-do-dia'];
        res.render('home',{nome: req.body.nome, frase:frase, bomDia: bomDia, classe:classe});
      }
    } 
  })
}