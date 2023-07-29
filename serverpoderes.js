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
      fecha_borra : req.body.fecha_borra

    };

    arreglo.push(tmpheroes);
    console.log(JSON.stringify(arreglo));
    res.json(tmpheroes);

});

heroes.post('/api/Poderes',(req, res)=>{


  let tmpPoderes ={
    id : req.body.id,
    nombre : req.body.nombre,
    activo : req.body.activo,
    fecha_borra : req.body.fecha_borra

  };

  arreglo.push(tmpPoderes);
  console.log(JSON.stringify(arreglo));
  res.json(tmpPoderes);

});

heroes.post('/api/HeroesPoder',(req, res)=>{


  let tmpheroes_poder ={
    id : req.body.id,
    id_poder : req.body.id_poder,
    id_heroe : req.body.id_heroe,
    activo : req.body.activo,
    fecha_borra : req.body.fecha_borra

  };

  arreglo.push(tmpheroes_poder);
  console.log(JSON.stringify(arreglo));
  res.json(tmpheroes_poder);

});

heroes.get('/api/Heroes',(req, res)=>{
 
  res.json(arreglo);

});

heroes.get('/api/Poderes',(req, res)=>{
 
  res.json(arreglo);

});

heroes.get('/api/HeroesPoder',(req, res)=>{
 
  res.json(arreglo);

});

heroes.listen(4000);

