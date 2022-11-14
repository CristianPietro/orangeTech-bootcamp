// Criar uma classe para representar carros;
// Os carros possuem marcas, uma cor e um gasto medio de combustível por KM rodado.
//  Crie um metodo que dado a quantdade de KM e o preço do combustivel nos de o valor
// gasto em reais para realizar o percurso

// class Carros {
//   marca;
//   cor;
//   gastoPorKM;
    
//   constructor(marca, cor, gastoPorKM){
//   this.marca = marca;
//   this.cor = cor;
//   this.gastoPorKM = gastoPorKM;
// };

// calacularGasto(distanciaKM, precoCombustivel){
//   return (distanciaKM * this.gastoPorKM) * precoCombustivel
// }
//  }


// const uno = new Carros('Fiat', 'Azul', 1/12)
// const corsa = new Carros('Chevrolet', 'Preto', 1/10)

// console.log(uno.calacularGasto(70, 5))
// console.log(corsa.calacularGasto(121, 5))



//Crie uma  classe para representar uma pessoa
// para cada pessoas teremos os atributos, nome, peso e altura
// As pessoa devem ter capacidade de dizer o valor do seu  IMC (peso / (altura * altura))
// Instancie uma pessoa chamada José que tenha 70kg e 1,75 de altura
// e peça ao joé falar o eu IMC

// class Pessoa{
//   nome;
//   altura;
//   peso;

//   constructor(nome, peso, altura){
//     this.nome = nome;
//     this.altura = altura;
//     this.peso = peso;
//   }

//   calcularIMC(){
//     return this.peso / (this.altura ** 2)
//   }

//   classificarIMC(){
//     const imc = this.calcularIMC();
//     if(imc < 18.5){
//       return('abaixo do peo')
//     }  else if (imc >= 18.5 && imc < 25) {
//       return('Peso normal')
//     }  else if (imc >= 25 && imc < 30) {
//       return('Acima do peso')
//     }  else if (imc >= 30 && imc < 40) {
//       return('Obeso')
//     }else{
//       return('Obsidade grave, procure um médico urgente!')
//     }



    
//   }
// }

// const jose = new Pessoa('José', 70, 1.75)

// console.log(jose.classificarIMC())
// console.log(jose.calcularIMC())

class Pessoa {
  nome;
  idade;

  constructor(nome, idade) {
      this.nome = nome;
      this.idade = idade;
  }

  descrever() {
      console.log(`Nome: ${this.nome}; Idade: ${this.idade};`);
  }
}

new Pessoa('Renan', 30).descrever();