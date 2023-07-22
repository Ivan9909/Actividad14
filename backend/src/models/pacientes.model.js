const mongoose = require('mongoose');

let Schema = mongoose.Schema;
let PacienteSchema = new Schema({
    "nombres": {
        type: String,
        required: [true, "El campo nombre no puede estar vacio"]
    },
    "apellidos": {
        type: String,
        required: [true, "El campo apellido no puede estar vacio"]
    },
    "identificacion": {
        type: Number,
        required: [true, "El campo identificación no puede estar vacio"]
    },
    "edad": {
        type: Number,
        required: [true, "La campo edad no puede estar vacio"]
    },
    "telefono": {
        type: Number,
        required: [true, "El campo correo no puede estar vacio"]
    }
});

module.exports = mongoose.model('pacientes', PacienteSchema);