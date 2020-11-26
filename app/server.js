const express = require('express'),
app = express(),
port = process.env.PORT || 3000,
mongoose = require('mongoose'),
bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect(
    "mongodb+srv://root:Max358729@cluster0.wbsj9.mongodb.net/app-agenda-usuarios?retryWrites=true&w=majority",
    {useNewUrlParser: true, useUnifiedTopology: true}
)

const db = mongoose.connection;
db.on("error", console.error.bind(console, "Erro na conexão com o banco de dados"));
db.once("open", function(){
    console.log("Conexão com o banco de dados OK");
});

/** Configurar o body parser */

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const { mongo, Mongoose } = require('mongoose');
const userRoute = require('./routes/user/user-route');

userRoute(app);

/** Configurar a porta onde o servidor vai ouvir */

app.listen(port);
console.log("Servidor NodeJS rodando na porta: "+port); 