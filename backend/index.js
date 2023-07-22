const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

const PORT = 3001;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Rutas
app.use( require('./src/routes/pacientes.route') );
app.use( require('./src/routes/doctores.route') );
app.use( require('./src/routes/citas.route') );

mongoose.connect('mongodb://localhost:27017/consultorio', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Conexión exitosa a la base de datos');
}).catch((error) => {
    console.error('Error al conectar a la base de datos:', error);
});

app.listen(PORT, () => {
    console.log(`El servidor esta conectado por el puerto ${ PORT }`);
});