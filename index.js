const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require("mongoose");
const app = express();

const AuthRouter = require('./Routes/auth');
const CodigoRouter = require('./Routes/codigoPenal')

app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use(cors())

mongoose.connect("mongodb+srv://crudTest:crudTest@crudtestedb.eoulb.mongodb.net/Users?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

app.use('/api', AuthRouter)
app.use('/codigo', CodigoRouter)

app.listen(3001, () => {
    console.log("Server running on port 3001")
})