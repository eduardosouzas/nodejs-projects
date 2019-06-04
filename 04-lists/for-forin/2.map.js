const service = require('./services');

Array.prototype.meuMap = function (callback) {
    const novoArrayMapeado = [];
    for (let indice = 0; indice <= this.length - 1; indice++) {
        const resultado = callback(this[indice], indice);
        novoArrayMapeado.push(resultado)
    }
    return novoArrayMapeado;
}
async function main () {
    try {
        const res = await service.obterPessoas('a');
        
       /* 
       const names = [];
       res.results.forEach(items => {
            names.push(items.name);
        }); */
       // const names = res.results.map(pessoa => { pessoa.nome });
       const names = res.results.meuMap((pessoa,indice) => {
            return `[${indice}]${pessoa.name}`;
       });
        console.log('nomes', names);
    } catch (error) {
        console.error('DEU RUIM', error);
    }
}
main();