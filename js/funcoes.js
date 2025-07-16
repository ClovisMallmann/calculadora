
let operador=''

let valor1 = 0
let valor2 = 0



function alteraOperando(x) {
    if (operando_1 === x.value) {
        let operando_2 = x.value
    }else{
    let operando_1 = x.value
    }
}



function atualizarDisplay(btn) { //função dos botões
  const display = document.getElementById('display')
  if(display.value.length === 9) return //evita do display ter mais que 9 digitos
  if(display.value === '0') {           
    display.value = btn.value

    valor1 = btn.value

  } else {
      display.value += btn.value          
      valor2 = btn.value
    }
}

function limpaDisplay() { //função da tecla C
  document.getElementById('display').value = 0
  }

function atualizaOperacao(btn) { //função dos operadores
  const display = document.getElementById('display')
  operador = btn.value
  display.value += operador
}

function calcularOperacao() {
  const display = document.getElementById('display')
  const calcula = eval(valor1 + operador + valor2)//a funcao EVAL  do JS entende o que foi passado e calcula.
    display.value = calcula  //o resultado é passado para o display
  
}