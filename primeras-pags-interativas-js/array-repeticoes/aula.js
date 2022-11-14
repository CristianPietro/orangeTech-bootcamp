

// const notas = [];

// notas.push(5);
// notas.push(7);
// notas.push(8);
// notas.push(2);
// notas.push(5);

// let soma = 0

// for(let i = 0; i < notas.length; i++){
//   const notasAlunos = notas[i];
//   soma = soma + notasAlunos;
// }
// const media = soma / notas.length
// console.log(media)

const numerosPares = [];

    for (let i = 0; i < 10; i++) {
        const numeroPar = i % 2 === 0;
        if (numeroPar) {
            numerosPares.push(i);
        }
    }

    console.log(numerosPares);
