const express = require("express");
const app = express();
var calcularRoute = require("./routes/calcularRoute");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set("view engine", "ejs");

app.use("/Conta", calcularRoute);

app.listen("3000", function () {
  console.log("Projeto funcionando!");
});
