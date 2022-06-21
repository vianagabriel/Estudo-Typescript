//Desafio 1
const funcionario2: {codigo: number, nome: string} = {
  codigo: 10,
  nome: 'joao'
}

//Desafio 2

enum Trabalho {
  Atriz,
  Padeiro
}

type Pessoa = {
  nome: string,
  idade: number,
  profissao: Trabalho
}

let pessoa1: Pessoa = {
  nome: 'Gabriel',
  idade: 23,
  profissao: Trabalho.Padeiro
};

let pessoa2: Pessoa = {
  nome: 'Rebeca',
  idade: 20,
  profissao: Trabalho.Atriz
};

//Desafio 3

let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo')!;
let soma = document.getElementById('soma')! as HTMLInputElement;
let campoSaldo = document.getElementById('campo-saldo');

let saldoTotal = 0

limparSaldo()

function somarAoSaldo(soma: number) {
  if (campoSaldo) {
      saldoTotal += soma
      campoSaldo.innerHTML = saldoTotal.toString();
      limparCampoSoma();
  }
}

function limparCampoSoma() {
  soma.value = "";
}

function limparSaldo() {
  if (campoSaldo) {
      saldoTotal = 0;
      campoSaldo.innerHTML = saldoTotal.toString();
  }
}

if (botaoAtualizar) {
  botaoAtualizar.addEventListener('click', () => {
      somarAoSaldo(Number(soma.value)); 
  });
}
botaoLimpar.addEventListener('click', () => {
  limparSaldo();
});
