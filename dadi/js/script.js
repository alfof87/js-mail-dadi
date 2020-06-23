///////////////////////////////////////////////////////DADI
// document.getElementById('btn');
// var dado1 = Math.floor(Math.random()*6);
// var dado2 = Math.floor(Math.random()*6);
// var num =[1, 2, 3, 4, 5, 6];
//
// for (i=0; i > 5; i++){
//   if(dado1 > dado2){
//     console.log("dado1 ha vinto!");
//   }else if (dado1 < dado2){
//     console.log("dado2 ha vinto!");
//   }else{
//     console.log("parità!");
//   }
// };




// document.getElementById('btn');
//
// document.getElementById('btn').addEventListener("click", function(){
//
//   var dado1 = Math.floor(Math.random()*6 + 1);
//   var dado2 = Math.floor(Math.random()*6 + 1);
//   var vittoria;
//   var parita = dado1 = dado2;
//   if (dado1 > dado2) {
//     console.log(vittoria = dado1);
//   }else if(dado2 > dado1){
//     console.log(vittoria = dado2);
//   }else {
//     console.log(vittoria = parita);
//   }
// });



 var dado1 = Math.floor(Math.random()*6 + 1);
 var dado2 = Math.floor(Math.random()*6 + 1);
 var vittoria;
 var parita = dado1 = dado2;
 
  if (dado1 > dado2) {
    console.log("Vince dado 1");
  }else if(dado2 > dado1){
    console.log("Vince dado2");
  }else {
    console.log("Pareggio");
  };
