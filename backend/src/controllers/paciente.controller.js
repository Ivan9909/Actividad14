const Pacientes = require('../models/pacientes.model');


let  lstPacientes = (req, res) => {
    Pacientes.find({})
    .then((data) => {
        return res.json({
            status: 200,
            dataPaicentes: data
        });
    }).catch((err) => {
        return res.json({
            status: 500,
            message: "No se encontraron pacientes",
            error: err
        })
    });
}

let  lstPaciente = (req, res) => {
    let id = req.params.id;
    Pacientes.findById(id)
    .then((data) => {
        return res.json({
            status: 200,
            dataPaicente: data
        });
    }).catch((err) => {
        return res.json({
            status: 500,
            message: "No se encontraron paciente",
            error: err
        })
    });
}

let createPaciente = (req, res) => {
    let bodyForm = req.body;
    let insertPaciente = new Pacientes({
        "nombres": bodyForm.nombresF,
        "apellidos": bodyForm.apellidosF,
        "identificacion": bodyForm.identificacionF,
        "edad": bodyForm.edadF,
        "telefono": bodyForm.telefonoF
    });
    insertPaciente.save()
    .then((data) => {
        return res.json({
            status: 200,
            message: "El paciente se registro correctamente",
            data
        });
    }).catch((err) => {
        return res.json({
            status: 400,
            message: "Error al insertar",
            error: err
        })
    })
}

let editPaciente = (req, res) => {
    let id = req.params.id;
    let bodyForm = req.body;

    Pacientes.findById(id)
        .then((data) => {
            return Pacientes.findByIdAndUpdate(
                id,
                {
                    "nombres": bodyForm.nombresF,
                    "apellidos": bodyForm.apellidosF,
                    "identificacion": bodyForm.identificacionF,
                    "edad": bodyForm.edadF,
                    "telefono": bodyForm.telefonoF
                },
                { new: true }
            );
        })
        .then((data) => {
            res.json({
                status: 200,
                message: "Se modificó el doctor exitosamente",
                data
            });
        })
        .catch((err) => {
            return res.json({
                status: 500,
                message: "Error en el servidor",
                error: err
            });
        });
};

let deletePaciente = (req, res) => {
    let id = req.params.id;
    Pacientes.findById(id)
    .then((data) => {
        return Pacientes.findByIdAndRemove(id);
    })
    .then((response) => {
        res.json({
            status: 200,
            message: "Paciente eliminado correctamente"
        })
    })
    .catch((err) => {
        return res.json({
            status: 500,
            message: "Error en el servidor",
            error: err
        });
    });
}

module.exports = {
    lstPacientes,
    lstPaciente,
    createPaciente,
    editPaciente,
    deletePaciente
};