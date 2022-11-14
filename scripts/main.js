function multiplica(num1,num2) {
  let resultado = num1 * num2;
  return resultado;
}


let miImage = document.querySelector('img');
miImage.onclick = function () {
    let miSrc = miImage.getAttribute('src');
    if (miSrc === 'images/Nissan_Skyline_R32_GT-R_001.jpg') {
      miImage.setAttribute('src','images/Nissan_Skyline_R32_GT-R_002.jpg');
    } else {
      miImage.setAttribute('src', 'images/Nissan_Skyline_R32_GT-R_001.jpg');
    }
}

let miBoton = document.querySelector('button');
let miTitulo = document.querySelector( 'h1');

function estableceNombreUsuario() {
  let miNombre = prompt('Introduzca su nombre.');
  if(!miNombre) {
    estableceNombreUsuario();
  } else {
    localStorage.setItem('nombre', miNombre);
    miTitulo.innerHTML = 'Bienvenido ' + miNombre;
  }
}


if (!localStorage.getItem('nombre')) {
    estableceNombreUsuario();
}
else {
    let nombreAlmacenado = localStorage.getItem('nombre');
    miTitulo.textContent = 'Bienvenido ' + nombreAlmacenado;
}

miBoton.onclick = function() {
    estableceNombreUsuario();
}
