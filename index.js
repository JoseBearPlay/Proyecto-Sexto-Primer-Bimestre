const mongoose = require("mongoose");
const app = require("./app")

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost:27017/dbVentaOnline', {useNewUrlParser: true, useUnifiedTopology: true}).then(()=>{
    console.log('Se encuentra conectado a la base datos');

    app.listen(3000 , function(){
        console.log("Servidor corriendo correctamente");
    })
}).catch(err => console.log(err));