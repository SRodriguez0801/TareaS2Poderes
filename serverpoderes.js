const express = require('express');
const heroes = express();

heroes.use(express.json());

var arreglo = new Array();

heroes.post('/api/Heroes',(req, res)=>{


    let tmpheroes ={
      id : req.body.id,
      nombre : req.body.nombre,
      identidad_secreta : req.body.identidad_secreta,
      activo : req.body.activo,
      fecha_horas : req.body.fecha_horas

    };

    arreglo.push(tmpheroes);
    console.log(JSON.stringify(arreglo));
    res.json(tmpheroes);

});
heroes.listen(4000);

