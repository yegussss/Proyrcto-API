const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log(`Conectado con éxito al puerto ${port}`)
});

app.get('/', (req, res)=>{
    res.send('Esta es la dirección raíz.');
    res.end();    
})

app.get ('/api/usuarios',(req,res)=>{
    res.send(['Dante', 'Marifer', 'Juanco', 'Daniel', 'Omar', 'Carlos', 'Chema']);
    res.end();
})