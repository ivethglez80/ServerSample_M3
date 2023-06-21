//este es socios de controllers
const STATUS_OK = 200;
const STATUS_ERROR = 404;

const listSocios = [];

//aqui vamos a simular que estamos consultando una base de datos y no el pequeño array listSocios
function handlerList(swap){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if (swap){
                resolve(listSocios)
            }else{
                reject("list not found")
            }
        },1000);
    })
}

async function userAll(req,res){
    try {
        const resultAllList =  await handlerList(true);
        if (Array.isArray(resultAllList)){
            return res.status(STATUS_OK).json(resultAllList)
        }
        res.status(STATUS_ERROR).json({message:"list not found"});
    } catch (error) {
        res.status(STATUS_ERROR).json({message:"list not found de catch"});
    }  
}

//por params
async function userById(req,res){
    try {
        const {id} = req.params;  
        const list = await handlerList(true);
        const socio = list.find((e)=> e.id===Number(id))    /*el id por params viene como string*/
        if (socio){
           return res.status(STATUS_OK).json(socio); /*usamos return para no usar else*/
        }
        res.status(STATUS_ERROR).json({message:"socio no encontrado"});
    } catch (error) {
        res.status(STATUS_ERROR).json({message:"no se encuentra socio con ese id"});
    }

    return;
}

function userDeleteById(req,res){
    return;
}

function userUpdateById(req,res){
    return;
}

async function userCreate(req,res){
    const {id, name, descripcion, image, direcc, tel, actividad01} = req.body;
    
    try {
    if (!name || !id || !tel){
        return res.status(STATUS_ERROR).json({message:"faltan datos"});
    }
    const socio = {
        id, 
        name,
        tel,
        descripcion: descripcion? descripcion:"falta la descripcion",
        image: image? image:"https://img.uxwing.com/wp-content/themes/uxwing/download/emoji-emoticon/smile-icon.png",
        direcc: direcc? direcc:"direccion desconocida",
        actividad01: actividad01?actividad01:"actividad 1 desconocida"
    };
    const list = await handlerList(true);
    list.push(socio);
    res.status(STATUS_OK).json(socio);
    } catch (error) {
    res.status(STATUS_ERROR).json({message:"error al cargar socio"})
    }  
}

function dataApiOut(req,res){
    return
}

module.exports = {
    userAll,
    userById,
    userCreate, 
    userDeleteById,
    userUpdateById,
    dataApiOut
};

// las rutas que necesito:
// http://localhost:3001/socios/all
// http://localhost:3001/socios/create/:id
// http://localhost:3001/socios/update  --> este va a ser por query

// http://localhost:3001/socios/:id --> elimina
// http://localhost:3001/search/:id --> busca
// http://localhost:3001/socios/apiout --> trae datos de api externa

// modelo de objeto, en este caso:
// socio = {
    // id, 
    // name,
    // descripcion,
    // image,
    // direcc,
    // tel,
// }
