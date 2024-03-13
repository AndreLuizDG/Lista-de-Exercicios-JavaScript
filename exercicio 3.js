//- Desenvolva uma função que recebe dois parâmetros, um é a quantidade de horas trabalhadas por um funcionário num mês, e o quanto ele recebe por hora. O retorno da função deve ser a string "Salário igual a R$ X”, em que X é o quanto o funcionário ganhou no mês.

function calcularSalario(horasTrabalhadas, valorHora) {
    
    const salarioFinal = horasTrabalhadas * valorHora;

    return 'Salário igual a R$' + salarioFinal.toFixed(2);
  }
  
  // Exemplos de uso
  console.log(calcularSalario(180, 25)); // Salário igual a R$ 4.500,00
  console.log(calcularSalario(160, 30)); // Salário igual a R$ 4.800,00
  console.log(calcularSalario(200, 20)); // Salário igual a R$ 4.000,00
  
  