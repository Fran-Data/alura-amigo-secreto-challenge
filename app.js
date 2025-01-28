//CHALLENGE AMIGO SECRETO

//Agregar nombres: Los usuarios escribirán el nombre de un amigo en un campo de texto y lo agregarán a una lista visible al hacer clic en "Adicionar".

//Validar entrada: Si el campo de texto está vacío, el programa mostrará una alerta pidiendo un nombre válido.

//Visualizar la lista: Los nombres ingresados aparecerán en una lista debajo del campo de entrada.

//Sorteo aleatorio: Al hacer clic en el botón "Sortear Amigo", se seleccionará aleatoriamente un nombre de la lista y se mostrará en la página.

//ARRAY DE AMIGOS
let nombres = [];

//FUNCIONES

//FUNCION AGREGAR NOMBRE
function adicionarNombre() {
    const inputNombre = document.getElementById('nombreAmigo');
    const nombre = inputNombre.value.trim();

    if (nombre === '') {
        alert('Por favor, inserte un nombre');
        return;
    }

    if (nombres.includes(nombre)) {
        alert('El nombre ya está en la lista.');
        return;
    }

    nombres.push(nombre);
    inputNombre.value = '';
    mostrarLista();

    // Limpiar el resultado del sorteo
    const resultadoSorteo = document.getElementById('resultadoSorteo');
    resultadoSorteo.innerHTML = '';
}

//FUNCION MOSTRAR LISTA
function mostrarLista() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    nombres.forEach(nombre => {
        const li = document.createElement('li');
        li.textContent = nombre;
        lista.appendChild(li);
    });
}

//FUNCION SORTEAR AMIGO
function sortearAmigo() {
    if (nombres.length < 2) {
        alert('Debe haber al menos dos amigos en la lista para realizar el sorteo.');
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * nombres.length);
    const nombreSorteado = nombres[indiceAleatorio];
    const resultadoSorteo = document.getElementById('resultadoSorteo');
    resultadoSorteo.innerHTML = `El amigo secreto es: ${nombreSorteado}`;
    resetearLista();
}

//FUNCION RESETEAR LISTA
function resetearLista() {
    nombres = [];
    mostrarLista();
}

//EVENTOS
document.getElementById('btnAdicionar').addEventListener('click', adicionarNombre);
document.getElementById('btnSortear').addEventListener('click', sortearAmigo);

//FIN DEL RETO  
// EN MI LOCAL HA FUNCIONADO, SOLO FALTA HACER UN DEPLOYMENT PARA VERIFICAR QUE FUNCIONE EN LA WEB