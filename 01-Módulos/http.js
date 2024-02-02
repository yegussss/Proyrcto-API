const http = require('http');
const puerto = 5000;

const servidor = http.createServer((req, res)=>{
    switch (req.url) {
        case "/":
            res.write(`El servidor se ha iniciado en el puerto ${puerto}`);
            res.end();
        break;
    }
});

servidor.listen(puerto);
