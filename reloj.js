function actualizarReloj() {
  const ahora = new Date();
  let horas = ahora.getHours().toString().padStart(2, "0");
  let minutos = ahora.getMinutes().toString().padStart(2, "0");
  let segundos = ahora.getSeconds().toString().padStart(2, "0");

  document.getElementById(
    "reloj"
  ).textContent = `${horas}:${minutos}:${segundos}`;
}

// actualizar el reloj casa segundo
setInterval(actualizarReloj, 1000);

//llama a la funcion una ves cargar la pagina

actualizarReloj();
