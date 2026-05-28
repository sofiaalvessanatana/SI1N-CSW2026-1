const botao = document.getElementById("calcular");

botao.addEventListener("click", calcularIdade);

function calcularIdade() {

  const dia = Number(document.getElementById("dia").value);
  const mes = Number(document.getElementById("mes").value) - 1;
  const ano = Number(document.getElementById("ano").value);

  const nascimento = new Date(ano, mes, dia);
  const hoje = new Date();

  let anos = hoje.getFullYear() - nascimento.getFullYear();
  let meses = hoje.getMonth() - nascimento.getMonth();
  let dias = hoje.getDate() - nascimento.getDate();

  // Ajuste dos dias
  if (dias < 0) {

    meses--;

    const ultimoMes = new Date(
      hoje.getFullYear(),
      hoje.getMonth(),
      0
    ).getDate();

    dias += ultimoMes;
  }

  // Ajuste dos meses
  if (meses < 0) {

    anos--;
    meses += 12;
  }

  document.getElementById("resultado").innerHTML =
    `${anos} anos, ${meses} meses e ${dias} dias`;
}