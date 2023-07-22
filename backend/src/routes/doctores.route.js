const express = require('express');
const app = express();

const Doctor = require('../controllers/doctor.controller');

//Listado
app.get('/doctor', Doctor.lstDoctores);

app.get('/doctor/modificar/:id', Doctor.lstDoctor);

//Registrar cita
app.post('/doctor/crear', Doctor.createDoctor);

//Actualizar cita
app.put('/doctor/modificar/:id', Doctor.editDoctor);

//Eliminar cita
app.delete('/doctor/eliminar/:id', Doctor.deleteDoctor);

module.exports = app;
