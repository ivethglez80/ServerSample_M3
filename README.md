Creando un server desde cero con express

Uso y orden de middlewares
armado de server con correctas importaciones y exportaciones
correcto manejo de las modulizaciones
correcto manejo del responde al entrar en la ruta

## ROUTES
GET all socios
GET by ID (params) socio
POST (body) socio
PUT by ID (query, body) <- put es el update
DELETE by ID (params)
GET -> API rest (externo)

*******
Index general escucha, levanta el puerto
app.js tiene todos los middleware y las rutas al final

// las rutas que necesito:
// http://localhost:3001/socios/all
// http://localhost:3001/socios/create/:id
// http://localhost:3001/socios/update  --> este va a ser por query

// http://localhost:3001/socios/:id --> elimina
// http://localhost:3001/search/:id --> busca
// http://localhost:3001/socios/apiout --> trae datos de api externa




