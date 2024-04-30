let data = [];
let bigArray = new Array(1000).fill('some data');

let memoryUsage = process.memoryUsage();

setInterval(() => {
    bigArray = new Array(Math.ceil(bigArray.length * 1.5)).fill('some data');
    console.log(`Tamanho do array: ${bigArray.length}`);

    data.push(bigArray);

    // Atualiza o uso de memória a cada iteração
    memoryUsage = process.memoryUsage();
    console.log(`Uso de memória: ${JSON.stringify(memoryUsage)}`);
}, 1000);