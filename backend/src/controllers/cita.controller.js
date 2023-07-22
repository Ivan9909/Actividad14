const Citas = require('../models/citas.model');


let  lstCitas = (req, res) => {
    Citas.find({})
    .then((data) => {
        return res.json({
            status: 200,
            dataCitas: data
        });
    }).catch((err) => {
        return res.json({
            status: 500,
            message: "No se encontraron citas",
            error: err
        })
    });
}

let lstCita = (req, res) => {
    let id = req.params.id;
    Citas.findById(id)
    .then((data) => {
        return res.json({
            status: 200,
            dataCita: data
        });
    }).catch((err) => {
        return res.json({
            status: 500,
            message: "No se encontraron citas",
            error: err
        })
    });
}

let createCitas = (req, res) => {
    let bodyForm = req.body;
    let insertCitas = new Citas({
        "numeroPaciente": bodyForm.numeroP,
        "especializacion": bodyForm.especializacion_doc
    });
    insertCitas.save()
    .then((data) => {
        return res.json({
            status: 200,
            message: "La cita se registro correctamente",
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

let editCitas = (req, res) => {
    let id = req.params.id;
    let bodyForm = req.body;

    Citas.findById(id)
        .then((data) => {
            return Citas.findByIdAndUpdate(
                id,
                {
                    "numeroPaciente": bodyForm.numeroP,
                    "especializacion": bodyForm.especializacion_doc
                },
                { new: true }
            );
        })
        .then((data) => {
            res.json({
                status: 200,
                message: "Se modificó la cita exitosamente",
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

let deleteCitas = (req, res) => {
    let id = req.params.id;
    Citas.findById(id)
    .then((data) => {
        return Citas.findByIdAndRemove(id);
    })
    .then((response) => {
        res.json({
            status: 200,
            message: "Cita eliminada correctamente"
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
    lstCitas,
    lstCita,
    createCitas,
    editCitas,
    deleteCitas
};