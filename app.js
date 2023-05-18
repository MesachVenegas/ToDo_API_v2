const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
require('dotenv').config();

const PORT = process.env.PORT || 8000;

const app = express();

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
