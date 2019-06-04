const { obterPessoas } = require('./services');
Array.prototype.meuFilter = function (callback) {
    const lista = [];
    for(index in this) {
        const item = this[index];
        const result = callback(item, index,this);
        if(!result) continue;
        lista.push(item);
    }
    return lista;
}

async function main() {
    try {
        const {
            results
        } = await obterPessoas('a');
        /* const familiarLars = results.filter((item) => {
            const result = item.name.toLowerCase().indexOf('lars') !== -1;
            return result;
        }); */
        const familiarLars = results.meuFilter((item, index, lista) => {
            console.log(`index ${index}`, lista.length);
           return item.name.toLowerCase().indexOf('lars') !== -1 });
        const names = familiarLars.map((pessoa) => pessoa.name);
        console.log(names);
    } catch (error) {
        console.error('DEU RUIM', error);
    }
}
main();
