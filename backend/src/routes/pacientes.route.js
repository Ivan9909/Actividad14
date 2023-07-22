const express = require('express');
const app = express();

const Paciente = require('../controllers/paciente.controller');

//Listado
app.get('/pacientes', Paciente.lstPacientes);
app.get('/pacientes/:id', Paciente.lstPaciente);

//Registrar cita
app.post('/pacientes/crear', Paciente.createPaciente);

//Actualizar cita
app.put('/pacientes/modificar/:id', Paciente.editPaciente);

//Eliminar cita
app.delete('/pacientes/eliminar/:id', Paciente.deletePaciente);

module.exports = app;
