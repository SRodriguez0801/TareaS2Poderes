const express = require('express');
const heroes = express();
heroes.use(express.json());

const rutaHeroes = require('./routes/heroes'); 
heroes.use('/api/Heroes/' , rutaHeroes );

const rutaPoderes = require('./routes/poderes');
heroes.use('/api/Poderes', rutaPoderes);

const rutaHeroes_Poder = require ('./routes/heroes_poder');
heroes.use('/api/HeroesPoder', rutaHeroes_Poder);

heroes.listen(4000);

