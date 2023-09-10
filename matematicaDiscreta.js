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
    
    // Remova os parênteses que indicam repetição periódica (se existirem)
    const parteDecimalLimpa = parteDecimal.replace(/\(/g, '').replace(/\)/g, '');
    
    // Calcule o numerador e o denominador da fração
    const numerador = parseInt(parteInteira + parteDecimalLimpa);
    const denominador = Math.pow(10, parteDecimalLimpa.length) - 1;
    
    // Encontre o MDC entre o numerador e o denominador e reduza a fração
    const mdc = gcd(numerador, denominador);
    const numeradorSimplificado = numerador / mdc;
    const denominadorSimplificado = denominador / mdc;
    
    const resultado = `A fração é: ${numeradorSimplificado}/${denominadorSimplificado}`;
    document.getElementById('resultado').textContent = resultado;
  }
  