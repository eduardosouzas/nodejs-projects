const { obterPessoas } = require('./services');

Array.prototype.meuReduce = function(callback, valorInicio) {
    let valorFinal = typeof valorInicio !== undefined ? valorInicio : this[0];
    for(let index = 0; index <= this.length; index++) {
        valorFinal = callback(valorFinal, this[index], this);
    }
    return valorFinal;
}
async function main() {
    try {
        const { results } = await obterPessoas('a');
        const pesos = results.map(item => parseInt(item.height));
        console.log('pesos', pesos);
        /* const total = pesos.reduce((anterior, proximo) => {
            return anterior + proximo;
        }); */
        const minhaLista = [
            ['Erick', 'Wendel'],
            ['NodeBR', 'Nerdzão']
        ]
        const total = minhaLista.meuReduce((anterior, proximo) => {
            return anterior.concat(proximo);
        },[]).join(', ');
        console.log('total', total);

    } catch (error) {
        console.error('DEU RUIM', error);
    }
}
main();