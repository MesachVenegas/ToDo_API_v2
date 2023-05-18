const db = require('./src/config/connection');
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
require('dotenv').config();

const PORT = process.env.PORT || 8000;

const app = express();

db.authenticate()
    .then(() => console.log('Connection Data Base successfully'))
    .catch((err) => console.error(err));

db.sync()
    .then(() => console.log('Sincronice Data Base successfully'))
    .catch((err) => console.error(err));

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

app.get('/', (req, res) => {
    console.log("servidor en linea")
    res.send("Servidor en linea");
})

app.listen(PORT, () => {
    console.log(`Server on line and listening on port ${PORT}`);
});
