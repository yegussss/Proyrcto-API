const os = require('os');

function sistema(){
    console.log(os.version());
};

function memLibre(){
    console.log(`Tienes ${Math.round(((os.freemem()/1024)/1024)/1024)}GB de memoria libre.`);
};

function memTotal(){
    console.log(`Tienes ${Math.round(((os.totalmem()/1024)/1024)/1024)}GB de memoria total.`);
}

exports.system = sistema;
exports.libre = memLibre;
exports.total = memTotal;
