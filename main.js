var boton = document.getElementById("cambiarTexto");
var parrafo = document.getElementById("textoVariable");

boton.addEventListener("click", function() {
  var nuevoParrafo = document.getElementById("nuevoTexto").value;
  document.getElementById("textoVariable").innerHTML = nuevoParrafo;
},true);
