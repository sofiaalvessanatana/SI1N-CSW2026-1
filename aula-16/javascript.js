document.writeln ("olá, mundo!");
document.writeln ("<h2> Bem-vindo ao javascript </h2>");
window.alert("Esta é uma mensagem de alerta!");
document.getElementById("title").innerHTML = "aprendendo JS com o melhor professor da uvv!!"

//let nome = prompt ("digite seu nome:");

const novafrase = document.getElementById("novafrase");

novafrase.innerHTML = " olá," + nome + " ! seja bem-vindo ao JS";
novafrase.style.color = "blue";
novafrase.style.fontSize = "80px";

function exibirmensagem() {
    let nome = document.getElementById("nome").value; 
novafrase.innerHTML = " olá ," + nome + " ! seja bem-vindo ao JS";
novafrase.style.color = "green";
novafrase.style.fontSize = "50px";
}