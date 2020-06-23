//////////////////////////////////////////////////MAIL/////////

var mail = prompt("inserisci mail");
var lista = ["marco@gmail.com", "luca@gmail.com", "giovanni@gmail.com", "stefano@gmail.com"];
var i;
for( i = 0; i < lista.length; i++){
  if (mail == lista[i]){
    console.log("mail presente");
  }else {
    console.log("mail non presente");
  }
};
