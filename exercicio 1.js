//Crie uma função que retorna a string "Olá, " concatenada com um argumento text (a ser passado para a função) e com ponto de exclamação "!" no final.

function saudacao(texto) {

    const mensagem = 'Olá, ' + texto + '!';
  
    return mensagem;
  }
  
  console.log(saudacao("Rafa"));
  console.log(saudacao("Bruno"));
  console.log(saudacao("Diego"));
  