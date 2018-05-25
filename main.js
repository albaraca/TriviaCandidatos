//obteniendo nombre del jugador
var nombreJugador = prompt("Hola, ¿cómo te llamas?");
//Preguntando si el usuario desea jugar
if(confirm("¿Querés jugar?")) {
document.getElementById("Bienvenida").innerHTML=("Bienvenida " + nombreJugador);
} else {
alert("En otra ocasión será. Saludos")
}
// obteniendo respuestas
function check(){
  var P1=document.myForm.P1.value;
  var P2=document.myForm.P2.value;
  var P3=document.myForm.P3.value;
  var count=0;

  if(P1=="a"){
    count++;
    console.log("P1",count);
    document.getElementById("scoreP1").innerHTML=("correcta");
  } else {
    //document.getElementById("scoreP1").innerHTML=("incorrecta");
    var original = document.getElementById("scoreP1").innerHTML;
    document.getElementById("scoreP1").innerHTML = original + "incorrecta";
  }
  if(P2=="c"){
    count++;
    console.log("P2",count);
    document.getElementById("scoreP2").innerHTML=("correcta");
  }else {
    document.getElementById("scoreP2").innerHTML=("incorrecta");
  }
  if(P3=="b"){
    count++;
    console.log("P3",count);
    document.getElementById("scoreP3").innerHTML=("correcta");
  } else {
    document.getElementById("scoreP3").innerHTML=("incorrecta");
  }
  console.log("cuenta final", count)
  document.getElementById("finalScore").innerHTML=(count);

  if(count==3){
    document.getElementById("goodJob").style.visibility="visible";
    document.getElementById('goodJob').src="peña.jpg";
}
if(count==2){
  document.getElementById("goodJob").style.visibility="visible";
  document.getElementById('goodJob').src="penchina.jpg";
}
if(count==1){
  document.getElementById("goodJob").style.visibility="visible";
  document.getElementById('goodJob').src="elva.jpg";
}
if(count==0) {
  document.getElementById("goodJob").style.visibility="visible";
  document.getElementById('goodJob').src="quadri.jpg";
}
}
