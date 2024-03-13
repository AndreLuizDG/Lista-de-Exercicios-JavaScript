//Escreva uma função que receba a idade de uma pessa em anos e retorne a mesma idade em dias. (Considerando que um ano tem 365 dias, desconsiderando anos bissextos


function converterAnosEmDias(idadeEmAnos) {

    const idadeEmDias = idadeEmAnos * 365;
  
    return idadeEmDias;
  }
  
  console.log(converterAnosEmDias(25));
  console.log(converterAnosEmDias(30));
  console.log(converterAnosEmDias(18));
  
  
