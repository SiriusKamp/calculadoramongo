var Conta = require("../model/Conta");

async function abreAdd(req, res) {
  res.render("usuario/add.ejs", { msg: "" });
}

async function add(req, res) {
  var numero1 = req.body.numero1;
  var numero2 = req.body.numero2;
  var Operação = req.body.Operação;

  var x;
  switch (Operação){
  case "somar" : x =   parseInt(numero1)+parseInt(numero2);
  break ; 
  case "subtrar" : x = parseInt(numero1)-parseInt(numero2);
  break ; 
  case "multiplicar" : x = parseInt(numero1)*parseInt(numero2); 
  break ;
  case "dividir" : x = parseInt(numero1)/parseInt(numero2); 
  break ;
  default:
  break;
}
  var NovaConta = new Conta({
    numero1: numero1,
    numero2: numero2,
    Operação: Operação,
    Resultado: x,
  });

  NovaConta.save(function (err) {
    if (err) {
      console.log("O erro que aconteceu foi: " + err);
    } else {
      res.render("usuario/add.ejs", { msg: "Conta realizada!"  });
    }
  });
}

async function listar(req, res) {
  Conta.find({})
    .lean()
    .exec(function (err, docs) {
      if (err) {
        console.log("O erro que aconteceu foi: " + err);
      } else {
        res.render("usuario/list.ejs", { Contas: docs });
      }
    });
}

  async function del(req,res) {
    Conta.findByIdAndDelete (req.params.id).exec(function(err){
      if(err){
        console.log("O erro que aconteceu foi : " + err);
      }else {
        res.redirect("/conta");
              }
      
    })
  }

module.exports = {
  add,
  abreAdd,
  listar,
  del,
};
