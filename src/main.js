let primeraPantalla = document.getElementById("primera-pantalla");
primeraPantalla.style.display = "block";
let segundaPatalla = document.getElementById("segunda-pantalla");
segundaPatalla.style.display = "none";
let terceraPantalla = document.getElementById("tercera-pantalla");
terceraPantalla.style.display = "none";
let cuartaPantalla = document.getElementById("cuarta-pantalla");
cuartaPantalla.style.display = "none";
let quintaPantalla = document.getElementById("quinta-pantalla");
quintaPantalla.style.display = "none";
let acc = 0;

let inputName = document.getElementById("name");
let botonStart = document.getElementById("boton-start");
let spanUserName = document.getElementById("user-name");

botonStart.addEventListener("click", () => {
  if (inputName.value.trim()) {
    primeraPantalla.style.display = "none";
    segundaPatalla.style.display = "block";
    spanUserName.innerText = inputName.value;
  } else {
    alert("Please write your name");
  }
});

let inputSofia = document.getElementById("sofia");
let inputTimbu = document.getElementById("timbu");
let inputSkopje = document.getElementById("skopje");
let spanElection1 = document.getElementById("election1");
let spanCorrecta1 = document.getElementById("correcta1");

let form1 = document.getElementById("form1");
form1.addEventListener("submit", (event1) => {
  if (document.querySelector('input[name="respuesta1"]:checked')) {
    if (
      document.querySelector('input[name="respuesta1"]:checked').value === "Timbu") {
      acc += 1;
    } else {
      acc += 0;
    }
    segundaPatalla.style.display = "none";
    terceraPantalla.style.display = "block";
  } else {
    alert("Selecciona alguna respuesta");
  }
  console.log(acc);
  event1.preventDefault();
});



let inputBuenosAires = document.getElementById("buenos-aires");
let inputBogota = document.getElementById("bogota");
let inputDusambe = document.getElementById("dusambe");
let spanElection2 = document.getElementById("election2");
let spanCorrecta2 = document.getElementById("correcta2");

let form2 = document.getElementById('form2');
form2.addEventListener("submit", (event2) => {
  if (document.querySelector('input[name="respuesta2"]:checked')) {
    if (document.querySelector('input[name="respuesta2"]:checked').value === "Dusambe") {
      acc += 1;
    }else{
      acc += 0;
    }
    terceraPantalla.style.display = "none";
    cuartaPantalla.style.display = "block";
  }else{
    alert("Selecciona alguna respuesta");
  }
  console.log(acc);
  event2.preventDefault();
});

// let botonEnviar1 = document.getElementById("boton-enviar1");
// botonEnviar1.addEventListener("click", () => {
//   if (inputBuenosAires.checked) {
//     terceraPantalla.style.display = "none";
//     cuartaPantalla.style.display = "block";
//     spanElection2.innerHTML = inputBuenosAires.value;
//     spanCorrecta2.innerText = "Incorrect";
//   } else if (inputBogota.checked) {
//     terceraPantalla.style.display = "none";
//     cuartaPantalla.style.display = "block";
//     spanElection2.innerHTML = inputBogota.value;
//     spanCorrecta2.innerText = "Incorrect";
//   } else if (inputDusambe.checked) {
//     terceraPantalla.style.display = "none";
//     cuartaPantalla.style.display = "block";
//     spanElection2.innerHTML = inputDusambe.value;
//     spanCorrecta2.innerText = "Correct";
//     acc += 1;
//   } else {
//     alert("please choose an option");
//   }
// });

let inputVenezia = document.getElementById("venezia");
let inputCaracas = document.getElementById("caracas");
let inputRoma = document.getElementById("roma");
let spanElection3 = document.getElementById("election3");
let spanCorrecta3 = document.getElementById("correcta3");

let botonEnviar2 = document.getElementById("boton-enviar2");
botonEnviar2.addEventListener("click", () => {
  if (inputVenezia.checked) {
    cuartaPantalla.style.display = "none";
    quintaPantalla.style.display = "block";
    spanElection3.innerHTML = inputVenezia.value;
    spanCorrecta3.innerText = "Incorrect";
  } else if (inputCaracas.checked) {
    cuartaPantalla.style.display = "none";
    quintaPantalla.style.display = "block";
    spanElection3.innerHTML = inputCaracas.value;
    spanCorrecta3.innerText = "Incorrect";
  } else if (inputRoma.checked) {
    cuartaPantalla.style.display = "none";
    quintaPantalla.style.display = "block";
    spanElection3.innerHTML = inputRoma.value;
    spanCorrecta3.innerText = "Correct";
    acc += 1;
  } else {
    alert("please choose an option");
  }
});

let inputRestart = document.getElementById("boton-restart");

inputRestart.addEventListener("click", () => {
  // if (spanElection1 == 'Timbu') {
  //   spanCorrecta1 = 'Correct'
  // } else if(spanElection2 == 'Bogota'){
  //   spanCorrecta2 = 'Correct'
  // } else if(spanElection3 == 'Roma'){
  //   spanCorrecta3 = 'Correct'
  // }

  // else{
  //   spanCorrecta1 = 'Incorrect'
  // }

  location.reload();
});
