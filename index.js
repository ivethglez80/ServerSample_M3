const app = require ("./app")
require('dotenv').config();
const url = process.env.URL;
const port = process.env.PORT || 3001;   

app.listen(port,()=>{
    console.log("in port http://localhost:3001")
});