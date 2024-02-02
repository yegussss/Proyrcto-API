const fs = require('fs');

function leer(){
    fs.readFile('./texto.txt', 'utf-8', (err,data)=>{
        if (err) {
            console.log(err);
        } else {
            console.log(data);
        }
    });
}

function crear (){
    let nuevo = fs.createWriteStream('./texto.txt')
    nuevo.write("Hola, este es un archivo nuevo")
    nuevo.end();
}

function escribir (){
    fs.appendFile('./texto.txt', "\nSoy el texto agregado OwO", (err)=>{
        if(err){
            console.log(err);
        }
        console.log("Agregaste el texto con éxito.")
    })
}

exports.create = crear;
exports.read = leer;
exports.write = escribir;
