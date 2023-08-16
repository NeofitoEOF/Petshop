const rotas = require('./domain/router/routes');
const express = require('express');
const app = express();


app.use(express.json());
app.use(rotas);


app.listen(3333, () => console.log(`Servidor iniciado na localhost:3333`));