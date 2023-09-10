def decimal_para_fracao(dizima):
    partes = dizima.split('.')
    parte_inteira = partes[0]
    parte_decimal = partes[1]
    
    # Remova os pontos de repetição da parte decimal
    parte_decimal = parte_decimal.replace('(', '').replace(')', '')
    
    # Calcule o numerador e o denominador
    numerador = int(parte_inteira + parte_decimal) - int(parte_inteira)
    denominador = 10 ** len(parte_decimal) - 1
    
    # Encontre o MDC entre o numerador e o denominador e reduza a fração
    from math import gcd
    fator_comum = gcd(numerador, denominador)
    numerador = numerador // fator_comum
    denominador = denominador // fator_comum
    
    return numerador, denominador

# SUBSTITUA O VALOR ENTRE "" PELO VALOR DESEJADO, OBSERVANDO EM DEIXAR O "." e os "..." ao Final!
dizima = "0.9999998..."
numerador, denominador = decimal_para_fracao(dizima)
print(f"A fração é: {numerador}/{denominador}")