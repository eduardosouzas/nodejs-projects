const { get } = require('axios');
const URL = 'https://swapi.co/api/people';
 
async function obterPessoas (nome) {
    const url = `${URL}/?search=${nome}&format=json`;
    const response = await get(url);
    // console.log(JSON.stringify(response.data));
    return response.data.results.map(mapearPessoas);
} 
function mapearPessoas(item) {
    return {
        nome: item.name,
        peso: item.height
    }
}
module.exports = {
    obterPessoas
};

obterPessoas('R2-D2');