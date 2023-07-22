const mongoose = require('mongoose');

let Schema = mongoose.Schema;
let CitaSchema = new Schema({
    "numeroPaciente": {
        type: Number,
        required: [true, "El numero del paciente no puede estar vacio"]
    },
    "especializacion": {
        type: String,
        required: [true, "Seleccionar una especialización"]
    }
});

module.exports = mongoose.model('citas', CitaSchema);