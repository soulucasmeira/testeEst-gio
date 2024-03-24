function fibonacci(numero) {
  let numeroAnterior = 0;
  let numeroAtual = 1;
  let sequencia = [];

  for (let i = 0; i < numero + 2; i++) {
    sequencia.push(numeroAnterior);
    let proximoNumero = numeroAnterior + numeroAtual;
    numeroAnterior = numeroAtual;
    numeroAtual = proximoNumero;
  }

  if (sequencia.includes(numero)) {
    console.log(`O número ${numero} pertence à sequência de Fibonacci.`);
  } else {
    console.log(`O número ${numero} não pertence à sequência de Fibonacci.`);
  }
}

fibonacci(13);
