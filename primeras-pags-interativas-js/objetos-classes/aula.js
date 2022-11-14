
// Objetos

// const pessoa = {
//   nome: 'Pietro',
//   idade: 26,
//   cidade: 'Osório',

//   descrever: () => {
//     console.log(`Meu nome é ${this.nome} e a minha idade é ${this.idade}`)
//   }
  
// };

// const atributo = 'idade';

// console.log(pessoa[atributo])


// Classes

class Pessoa {
  nome;
  idade;
  anoDeNascimento;

  constructor (nome, idade) {
    this.nome = nome
    this.idade = idade
    this.anoDeNascimento = 2022 - idade
  }

  descrever() {
    console.log(`Meu nome é ${this.nome} e tenho ${this.idade} anos`)
  }
}

function compararPesoas (p1, p2){
  if(p1.idade > p2.idade){
    console.log(`${p1.nome} é mais velho (a) que ${p2.nome}`)
  }else if(p2.idade > p1.idade){
    console.log(`${p2.nome} é mais velho (a) que ${p1.nome}`)
  }else{
    console.log(`${p1.nome} e ${p2.nome} possuem a mesma idade`)
  }
}
 const p1 = new Pessoa('Cristian', 28)
 const p2 = new Pessoa('Pietro', 28)

 console.log(compararPesoas(p1, p2))