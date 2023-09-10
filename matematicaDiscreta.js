// matematicaDiscreta.js

function gcd(a, b) {
    if (b === 0) {
      return a;
    } else {
      return gcd(b, a % b);
    }
  }
  
  function converterDizima() {
    const dizima = document.getElementById('dizimaInput').value;
    const partes = dizima.split('.');
    
    const parteInteira = partes[0];
    const parteDecimal = partes[1];
    
    // Função que remove parenteses caso Exista, na repetição Periodica
    const parteDecimalLimpa = parteDecimal.replace(/\(/g, '').replace(/\)/g, '');
    
    // Realizar o Calculo de Numerador e Denominador da Fração
    const numerador = parseInt(parteInteira + parteDecimalLimpa);
    const denominador = Math.pow(10, parteDecimalLimpa.length) - 1;
    
    // Encontrar o MDC para poder reduzir a Fração;
    const mdc = gcd(numerador, denominador);
    const numeradorSimplificado = numerador / mdc;
    const denominadorSimplificado = denominador / mdc;
    
    const resultado = `A fração é: ${numeradorSimplificado}/${denominadorSimplificado}`;
    document.getElementById('resultado').textContent = resultado;
  }
  
