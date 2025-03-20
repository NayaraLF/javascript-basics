
//Aprendendo Variáveis compostas

let num = [5,8,2,9,3];

num[3] = 6; //inserindo valor na variavel

num.push(7);

num.sort(); //colocar em ordem crescente

console.log(`ò vetor tem ${num.length} posiçoes`);

for(let pos = 0 ;pos <num.length;pos++ ){
    console.log(num[pos])
};

let pos = num.indexOf(8);

console.log(`Ò valor 8 entá na posição ${pos}`);
