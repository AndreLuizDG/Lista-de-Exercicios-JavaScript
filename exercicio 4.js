//Crie uma função que recebe um número (de 1 a 12) e retorne o mês correspondente como uma string. Por exemplo, se a entrada for 2, a função deverá retornar "fevereiro", pois este é o 2º mês.

function obterMes(numeroMes) {
    const meses = [
        "janeiro",
        "fevereiro",
        "março",
        "abril",
        "maio",
        "junho",
        "julho",
        "agosto",
        "setembro",
        "outubro",
        "novembro",
        "dezembro"];
  
    if (numeroMes < 1 || numeroMes > 12) {
      return "Número de mês inválido";
    }
  
    return meses[numeroMes - 1];
  }
  
  console.log(obterMes(2)); // fevereiro
  console.log(obterMes(1)); // janeiro
  console.log(obterMes(13)); // Número de mês inválido
  