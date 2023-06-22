/* index de services*/
/* de este modulo obtendremos la data solamente*/
// const axios = require ("axios");

// function getEmojis(){
// axios("https://emojihub.yurace.pro/api/all")
// .then(({data})=>{
//     return data;
// })
// .catch((error)=>{
//     console.log(error);
// });
// };



const axios = require("axios");

const getEmojis = async function () {
  try {
    const response = await axios.get("https://emojihub.yurace.pro/api/all");
    const data = response.data;
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

module.exports = getEmojis;