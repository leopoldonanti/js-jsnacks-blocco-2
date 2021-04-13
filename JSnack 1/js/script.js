/* JSnack 1
l software deve chiedere per 5 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
Esegui questo programma in due versioni, con il for e con il while. */

var num = [];
var i = 0;
var z=0;
var somma = 0;
/* for(i=0; i<5; i++){
  num[i] = parseInt(prompt("Inserisci un numero!"));
}
console.log(num)
for(z=0; z<5; z++){
  somma += num[z];
}*/

while (i<5) {
  num[i] = parseInt(prompt("inserisci un numero"));
  i++;
}
while (z<5){
  somma += num[z];
  z++
}
console.log(somma);