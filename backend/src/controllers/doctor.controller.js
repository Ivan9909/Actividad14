const Doctores = require('../models/doctores.model');


let  lstDoctores = (req, res) => {
    Doctores.find({})
    .then((data) => {
        return res.json({
            status: 200,
            dataDoctores: data
        });
    }).catch((err) => {
        return res.json({
            status: 500,
            message: "No se encontraron doctores",
            error: err
        })
    });
}

let lstDoctor = (req, res) => {
    let id = req.params.id;
    Doctores.findById(id)
    .then((data) => {
        return res.json({
            status: 200,
            dataDoctor: data
        });
    }).catch((err) => {
        return res.json({
            status: 500,
            message: "No se encontro doctor",
            error: err
        })
    });
}

let createDoctor = (req, res) => {
    let bodyForm = req.body;
    let insertDoctores = new Doctores({
        "nombre": bodyForm.nombreF,
        "apellido": bodyForm.apellidoF,
        "especialidad": bodyForm.especialidadF,
        "consultorio": bodyForm.consultorioF,
        "correo": bodyForm.correoF
    });
    insertDoctores.save()
    .then((data) => {
        return res.json({
            status: 200,
            message: "El doctor se registro correctamente",
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

let editDoctor = (req, res) => {
    let id = req.params.id;
    let bodyForm = req.body;

    Doctores.findById(id)
        .then((data) => {
            return Doctores.findByIdAndUpdate(
                id,
                {
                    "nombre": bodyForm.nombreF,
                    "apellido": bodyForm.apellidoF,
                    "especialidad": bodyForm.especialidadF,
                    "consultorio": bodyForm.consultorioF,
                    "correo": bodyForm.correoF
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

let deleteDoctor = (req, res) => {
    let id = req.params.id;
    Doctores.findById(id)
    .then((data) => {
        return Doctores.findByIdAndRemove(id);
    })
    .then((response) => {
        res.json({
            status: 200,
            message: "Doctor eliminado correctamente"
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
    lstDoctores,
    lstDoctor,
    createDoctor,
    editDoctor,
    deleteDoctor
};