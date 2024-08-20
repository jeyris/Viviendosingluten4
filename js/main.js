
// //Json 
// let usuarioIngresos =   '[{"nombre":"Ingrese su nombre y apellido"," email" : "Ingrese su email"}]'
// //console.log (usuarioIngresos)
// //console.log (typeof usuarioIngresos)

//  // convertir la cadena json a js  

// let jsonConvertido = JSON.parse(usuarioIngresos);

// const nuevoUsuario = {
//     nombre:"yris",
//     email: "cardozoyris@gmail.com"
// };

// jsonConvertido.push (nuevoUsuario);

// //convertir el objeto js modificado de nuevo a cadena JSON

// let datoConvertido = JSON.stringify (jsonConvertido);
// console.log (datoConvertido);
// console.log (typeof datoConvertido);

// //almacenar la base de datos actualizada en el localstorage

// localStorage.setItem ('nuevoUsuario', datoConvertido);
// let mensaje = localStorage.getItem('nuevoUsuario');

// //Convertir el string JSON de nuevo a un array de objetos
// let datosArray = JSON.parse(mensaje);

// // Mostrar un alert con el nombre del último usuario en el array
// let ultimoUsuario = datosArray[datosArray.length - 1];
// alert(`Hola Bienvenida: ${ultimoUsuario.nombre}`);


// console.log(jsonConvertido)
// console.log (typeof jsonConvertido)

// //localstorage: setitem

// localStorage.setItem = prompt('¡Hola, Bienvenida!' + (ultimoUsuario));
// localStorage.setItem = prompt(`Ingrese su email: ${email}`);


//localstorage: getitem

// let saludo = localStorage.getItem ('Bienvenida')
// let email = localStorage.getItem ('Email')

// console.log ('El nombre y apellido ingresado es: ' + saludo)
// console.log (typeof saludo)

// console.log ("El email ingresado es: " + email)
// console.log(typeof email)


//PRACTICA EN CLASE:

// let usuarioIngresos = [
//     '{"nombre":"YRIS CARDOZO"," email" : "CARDOZOYRIS@GMAIL.COM"}'
// ];

// function agregarInformacionPorPrompt() {
//     let nombre = prompt("Ingrese su nombre y apellido: ");
//     let email = prompt("Ingrese su email: ");


// datosUsuarios.push({nombre: nombre, email: email});
// console.log ("Datos ingresados exitosamente: ");
// console.log (`nombre: ${nombre}, email: ${email}`);


// // guardar productos en el localstorage
// guardarUsuariosEnElLocalStorage ();

// mostrarUsuariosEnConsola ();
// } 

// function mostrarUsuariosEnConsola (){
//     console.log("datos ingresados: ");
// }

// // for (let i = 0; i < productos.lenght; i ++) {
// //     console.log ("nombre: " + datosUsuarios[i].nombre + ", email: " + datosUsuarios[i].email);
// // }


// function guardarUsuariosEnElLocalStorage(){
//     localStorage.setItem ('nombre', JSON.parse (nombre));

// }

// function cargarUsuariosDesdeLocalStorage (){
//     var usuariosGuardados = localStorage.setItem ('nombre');
//     if (usuariosGuardados){
//         return JSON.stringify (usuariosGuardados);
//     } else {
//         return usuarioIngresos;
//     }
// }

// //cargar datos almacenados, y mostrarlos en consola:
// let datosUsuarios = cargarUsuariosDesdeLocalStorage();
// mostrarUsuariosEnConsola ();

// agregarInformacionPorPrompt ();

//EVENTOS:

// window.onload= function(){
//     console.log("Todos los datos fueron ingresados con exito")
// }

let boton = document.querySelector (".boton");
    boton.onclick = function(){
    console.log ('Hiciste click')
    }


    const formulario1 = document.getElementById('formulario1');
    const errorMessageDiv = document.getElementById('error-message');
    const graciasMessageDiv = document.getElementById('gracias-message');

    formulario1.addEventListener('submit', function(event){
    event.preventDefault();
    
    let inputNombre = document.querySelector('input[name="nombre"]');
    let inputApellido = document.querySelector('input[name="apellido"]');
    let errores = [];
    
    if (inputNombre.value === "") {
        errores.push('El campo nombre debe estar completo')
    } else if (inputNombre.value.length < 3) {
        errores.push('El campo debe tener al menos 3 caracteres')
    }
    
    if (errores.length > 0) {
        console.log('Errores:', errores);
        
        errorMessageDiv.style.display = 'block';
        errorMessageDiv.innerHTML = 'Error: ' + errores.join(', ');
    } else {

        let datos = {
        nombre: inputNombre.value,
        apellido: inputApellido.value
        };
        
        
        localStorage.setItem('datos', JSON.stringify(datos));
        console.log('Datos almacenados en el Local Storage:', JSON.parse(localStorage.getItem('datos')));
        
        
        errorMessageDiv.style.display = 'none';
        formulario1.reset();

        graciasMessageDiv.innerHTML = `Gracias por enviar tus datos! <br> Nombre: ${datos.nombre} <br> Apellido: ${datos.apellido}`;
        graciasMessageDiv.classList.add('show');
        
    }
});


