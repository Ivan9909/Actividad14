const express = require('express');
const app = express();

const Cita = require('../controllers/cita.controller');

//Listado
app.get('/citas', Cita.lstCitas);
//Listado
app.get('/citas/:id', Cita.lstCita);

//Registrar cita
app.post('/citas/crear', Cita.createCitas);

//Actualizar cita
app.put('/citas/modificar/:id', Cita.editCitas);

//Eliminar cita
app.delete('/citas/eliminar/:id', Cita.deleteCitas);

module.exports = app;
