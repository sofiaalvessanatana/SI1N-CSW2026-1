var issoEumastring = "isso é uma string";
let issoeumnuemro = 42 ;
const issoeumbooleano = true;
let issotambemeumastring = "42";

if (issoEumastring === issotambemeumastring ) { // concatenar - junção de uma nméro e uma string: o numero basicamente se torna uma string 
    console.log(" as strings são iguais");
} else {
    console.log("as strings são diferentes");
}

console.log (issoeumnuemro + issotambemeumastring);
console.log (issoeumnuemro + issoeumnuemro);

var issoEumglobal = "eu sou uma variavel global";
{
    let issoEumalocal = "eu sou uma variavel local";
    console.log (issoEumglobal);
    console.log (issoEumalocal);
}



// onde usar let e onde usar var? variavel global (todo o sistema): usa ver. Quando é uma variavel local (declarada dentro de um bloco) usam 


let floatvalue1 = 0.06;
let floatvalue2 = 0.01;

console.log (sum.toprecision(2));

for ( let i = 0; i < 10; i+=2) {
    console.log(i);    
}
while ( let i = 0; i < 10; i += ) {
    console.log(i);
}

for (let i = 0; i < 5; i++) {
 console.log(i);
 console.log( i*2);
 console.log(i*2+1);
}


let j = 0;
while (j < 5) {
    console.log (j*2+1);
    j++;
}
