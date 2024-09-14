console.log('test')


const csvFile = 'uno/,dos/,tres' //>>> [{one: "uno" , two: "dos", three: "tres"}]

const csvPocesado = (csv) => {
    const resultado = [];
    const separado = csv.split('/,'); //['uno','dos','tres']
    for (let num of separado){
        const [one, two, three] = num;
        resultado.push({
            one: one,
            two: two,
            three: three
        })
    }

return resultado;
}
const final = csvPocesado(csvFile);
console.log(final)