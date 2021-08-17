var conexao = require("./conexao");

var contaScheme = conexao.Schema({
  numero1 : { type: String },
  numero2 : { type: String },
  Operação : { type: String },
  Resultado : { type : String},
});

module.exports = conexao.model("conta", contaScheme);
