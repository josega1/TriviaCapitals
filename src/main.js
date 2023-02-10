function iniciarTrivia(){
  
  let selectionStart = document.getElementById('segundaPantalla');
  selectionStart.style.display = 'none'
  let selectionEnviar = document.getElementById('terceraPantalla');
  selectionEnviar.style.display = 'none'
  let selectionEnviar1 = document.getElementById('cuartaPantalla');
  selectionEnviar1.style.display = 'none'
  let selectionEnviar2 = document.getElementById('quintaPantalla');
  selectionEnviar2.style.display = 'none'

  let botonStart = document.getElementById('boton-start');
  botonStart.addEventListener('click', segundaPantalla);
  let botonEnviar = document.getElementById('boton-enviar');
  botonEnviar.addEventListener('click', terceraPantalla);
  let botonEnviar1 = document.getElementById('boton-enviar1');
  botonEnviar1.addEventListener('click', cuartaPantalla);
  let botonEnviar2 = document.getElementById('boton-enviar2');
  botonEnviar2.addEventListener('click', quintaPantalla);

  
}
 


function segundaPantalla () {

  let selectionInicio = document.getElementById('primeraPantalla');
  selectionInicio.style.display = 'none'
  let selectionEnviar = document.getElementById('segundaPantalla');
  selectionEnviar.style.display = 'flex'

  let inputStart = document.getElementById('boton-start')

  if(inputStart.checked){
    spanStart.innertHTML('segundaPantalla')
  }
  let inputName = document.getElementById('name').value
  let spanUserName = document.getElementById('user-name');
  spanUserName.innerText = inputName;
}

function terceraPantalla () {

  let selectionEnviar = document.getElementById('segundaPantalla');
  selectionEnviar.style.display = 'none'
  let selectionEnviar1 = document.getElementById('terceraPantalla');
  selectionEnviar1.style.display = 'flex'

  let inputEnviar = document.getElementById('boton-enviar')

  if(inputEnviar.checked){
    spanEnviar.innertHTML('terceraPantalla')
  }
}

function cuartaPantalla () {

  let selectionEnviar1 = document.getElementById('terceraPantalla');
  selectionEnviar1.style.display = 'none'
  let selectionEnviar2 = document.getElementById('cuartaPantalla');
  selectionEnviar2.style.display = 'flex'

  let inputEnviar1 = document.getElementById('boton-enviar1')

  if(inputEnviar1.checked){
    spanEnviar1.innertHTML('cuartaPantalla')
  }
}

function quintaPantalla () {

  let selectionEnviar2 = document.getElementById('cuartaPantalla');
  selectionEnviar2.style.display = 'none'
  let selectionRestart = document.getElementById('quintaPantalla');
  selectionRestart.style.display = 'flex'

  let inputEnviar2 = document.getElementById('boton-enviar2')

  if(inputEnviar2.checked){
    spanEnviar2.innertHTML('quintaPantalla')
  }
   let inputRestart = document.getElementById('boton-restart')
   inputRestart.addEventListener('click', reiniciarJuego)
}

function reiniciarJuego() {
  location.reload()
}



window.addEventListener('load', iniciarTrivia)









