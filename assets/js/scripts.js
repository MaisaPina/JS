console.log('Hello World')

var numeroAtual = document.getElementById('currentNumber')
var numero = '0'

function increment() {
  numero = numero + 1
  numeroAtual = numero
}

function decrement() {
  numero = numero - 1
  numeroAtual = numero
}
