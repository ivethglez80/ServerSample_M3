const express = require ("express")
const app = express()
const routes = require("./src/routes/index")

app.use(express.json())
app.use(express.urlencoded({extended:false})) 

//a partir  de aca ROUTES
app.use("/", routes);

//el siguiente es codigo para darle acceso al front hacia el back, configurar encabezados CORS (Cross-Origin Resource Sharing)
app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Credentials", true);
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept ")
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    next();
});


module.exports = app;