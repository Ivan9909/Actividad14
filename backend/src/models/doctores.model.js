const mongoose = require('mongoose');

let Schema = mongoose.Schema;
let DoctorSchema = new Schema({
    "nombre": {
        type: String,
        required: [true, "El campo nombre del doctor no puede estar vacio"]
    },
    "apellido": {
        type: String,
        required: [true, "El campo apellido del doctor no puede estar vacio"]
    },
    "especialidad": {
        type: String,
        required: [true, "La campo especialidad no puede estar vacio"]
    },
    "consultorio": {
        type: String,
        required: false
    },
    "correo": {
        type: String,
        required: [true, "El campo correo del doctor no puede estar vacio"]
    }
});

module.exports = mongoose.model('doctores', DoctorSchema);