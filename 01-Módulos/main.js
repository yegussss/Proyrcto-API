
const { required } = require("joi");

var juan = "Juan"; //Expresión o sentencia.
let pedro = "Pedro"

function saludo(n1, n2) {
    console.log("Hola " + n1 + ", mi nombre es " + n2);
};

saludo(juan, pedro);

let saludo2 = (n1, n2) => {
    let texto = "Hola " + n1 + ", mi nombre es " + n2;
    return texto
};

console.log(saludo2(pedro, juan));

const fun = require("./funciones.js");

//fun.saludo3("Buenos días.")

const path = require('path');

//console.log(path.parse(__filename).name);

const so = require('./os.js');

so.system();
so.total();
so.libre();

const fs = require('./fs.js');

fs.write();
fs.read();
