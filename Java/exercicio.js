function somarNumeros() {
    let soma = 0;
    let continuar = true;

while (continuar) {
        let numero = parseFloat(prompt("Digite um nùmero (ou digite '0' para encerrar):"));
        if (!isNaN(numero)) {
            soma+= numero;
        } else {
            alert("Por favor, digite um número valido.");
        }
        continuar = confirm("Deseja adicionar mais números?");
    }

    alert("A soma dos números é:" + soma)
}

somarNumeros();


function contagemRegressiva(tempoTotal) {
    let tempoRestante = tempoTotal;
  
    const contador = setInterval(() => {
      if (tempoRestante <= 0) {
        clearInterval(contador);
        console.log('Lançamento!');
      } else {
        console.log(`T-${tempoRestante} segundos para o lançamento.`);
        tempoRestante--;
      }
    }, 1000);
  }

  contagemRegressiva();

 
  function balancoAnual() {
    let ganhoAnual = 0;
    let gastoAnual = 0;
  
    // Solicita ganhos e gastos para cada mês
    for (let i = 1; i <= 12; i++) {
      const ganho = parseFloat(prompt(`Digite o ganho bruto do mês ${i}:`));
      const gasto = parseFloat(prompt(`Digite os gastos do mês ${i}:`));
  
      ganhoAnual += ganho;
      gastoAnual += gasto;
    }

    const saldo = ganhoAnual - gastoAnual;

    let mensagemLucroPrejuizo;
    if (saldo > 0) {
      mensagemLucroPrejuizo = "A empresa teve lucro.";
    } else if (saldo < 0) {
      mensagemLucroPrejuizo = "A empresa teve prejuízo.";
    } else {
      mensagemLucroPrejuizo = "A empresa não teve lucro nem prejuízo.";
    }
  
    console.log(`Ganho bruto anual: R$ ${ganhoAnual.toFixed(2)}`);
    console.log(`Gasto anual: R$ ${gastoAnual.toFixed(2)}`);
    console.log(`Saldo financeiro: R$ ${saldo.toFixed(2)}`);
    console.log(mensagemLucroPrejuizo);
  }

  balancoAnual();

  
  function ordenarDecrescente() {
 
    const valores = [];
  
    for (let i = 1; i <= 4; i++) {
      const valor = parseInt(prompt(`Digite o ${i}º valor inteiro:`));
      valores.push(valor);
    }
  
    valores.sort((a, b) => b - a);
  
    console.log("Valores em ordem decrescente:");
    for (const valor of valores) {
      console.log(valor);
    }
  }
  
  ordenarDecrescente();

  function transformarNumero() {

    let numero = parseInt(prompt("Digite um número:"));
  
    if (numero % 2 === 0) {

      numero += 1;
      console.log(`O número ${numero - 1} era par. Transformado em ímpar: ${numero}`);
    } else {
  
      numero -= 1;
      console.log(`O número ${numero + 1} era ímpar. Transformado em par: ${numero}`);
    }
  }
  
  transformarNumero();

  
  
  
  



