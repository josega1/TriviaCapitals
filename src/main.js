function iniciarTrivia(){
  let botonEnviar = document.getElementById('boton-enviar');
  botonEnviar.addEventListener('click', seleccionarRespuesta);
}



function seleccionarRespuesta(){
  let inputSofia = document.getElementById('sofia');
  let inputTimbu = document.getElementById('timbu');
  let inputSkopje = document.getElementById('skopje');
  let inputBuenosAires = document.getElementById('buenos-Aires');
  let inputBogota = document.getElementById('bogota');
  let inputDusambe = document.getElementById('dusambe');
  


  if(inputSofia.checked || inputTimbu.checked || inputSkopje.checked){
    let selectionEnviar = document.getElementById('mensaje');
  selectionEnviar.style.display = 'block'
  }
  else if(inputBuenosAires.checked || inputBogota.checked || inputDusambe.checked){
    let selectionEnviar = document.getElementById('mensaje');
    selectionEnviar.style.display = 'block'
  }
  else{alert('hola')}
  
}

window.addEventListener('load', iniciarTrivia)








