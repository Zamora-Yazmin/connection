let listaDeAlumnos = [];
function calcularPromedio() {

    // Obtener los datos del formulario

    let nombre = document.getElementById("nombre").value;
    
    let edad = document.getElementById("edad").value;

    let calificacion1 = parseFloat(
        document.getElementById("calificacion1").value
    );

    let calificacion2 = parseFloat(
        document.getElementById("calificacion2").value
    );

    let calificacion3 = parseFloat(
        document.getElementById("calificacion3").value
    );
    
    let calificacion4 = parseFloat(
        document.getElementById("calificacion4").value
    );


    // Validar que los datos estén completos

    if (
        nombre === "" && edad === ""||
        isNaN(calificacion1) ||
        isNaN(calificacion2) ||
        isNaN(calificacion3)
    ) {

        document.getElementById("resultado").innerHTML =
            "Por favor, completa todos los datos.";

        return;
    }


    // Calcular promedio

    let promedio =
        (calificacion1 + calificacion2 + calificacion3 + calificacion4) / 4;


    // Mostrar resultado

    if (promedio >= 9 && promedio <=10) {

        document.getElementById("resultado").innerHTML =
            "<strong>Alumno:</strong> " + nombre +
            "<br><strong>Edad:</strong> " + edad +
            "<br><strong>Promedio:</strong> " + promedio.toFixed(2) +
            "<br><br>EXCELENTE";

    } else if (promedio >= 8 && promedio <=8.9) {

        document.getElementById("resultado").innerHTML =
            "<strong>Alumno:</strong> " + nombre +
            "<br><strong>Edad:</strong> " + edad +
            "<br><strong>Promedio:</strong> " + promedio.toFixed(2) +
            "<br><br>MUY BIEN";
    } else if (promedio >= 7 && promedio <=7.9) {

        document.getElementById("resultado").innerHTML =
            "<strong>Alumno:</strong> " + nombre +
            "<br><strong>Edad:</strong> " + edad +
            "<br><strong>Promedio:</strong> " + promedio.toFixed(2) +
            "<br><br>BIEN";
    } else if (promedio >= 6.5 && promedio <=6.9) {

        document.getElementById("resultado").innerHTML =
            "<strong>Alumno:</strong> " + nombre +
            "<br><strong>Edad:</strong> " + edad +
            "<br><strong>Promedio:</strong> " + promedio.toFixed(2) +
            "<br><br>CONSIDERA CONTABILIDAD";
    } else if (promedio >= 6 && promedio <=6.4) {

        document.getElementById("resultado").innerHTML =
            "<strong>Alumno:</strong> " + nombre +
            "<br><strong>Edad:</strong> " + edad +
            "<br><strong>Promedio:</strong> " + promedio.toFixed(2) +
            "<br><br>DATE DE BAJA";
    } else if (promedio >= 0 && promedio <=5.9) {

        document.getElementById("resultado").innerHTML =
            "<strong>Alumno:</strong> " + nombre +
            "<br><strong>Edad:</strong> " + edad +
            "<br><strong>Promedio:</strong> " + promedio.toFixed(2) +
            "<br><br>CONSIDERA TURISMO";
    }

}
//limpiar los datos ingresados en el formulario
function limpia(){
    document.getElementById("nombre").value="";
    document.getElementById("edad").value="";
    document.getElementById("calificacion1").value="";
    document.getElementById("calificacion2").value="";
    document.getElementById("calificacion3").value="";
    document.getElementById("calificacion4").value="";
    document.getElementById("resultado").innerHTML="";
}
//agregar un alumno a una tabla
function agregarAlumno(){
    const nombre = document.getElementById("nombre").value;
    const edad = document.getElementById("edad").value;
    const c1 = parseFloat(document.getElementById("calificacion1").value)||0;
    const c2 = parseFloat(document.getElementById("calificacion2").value)||0;
    const c3 = parseFloat(document.getElementById("calificacion3").value)||0;
    const c4 = parseFloat(document.getElementById("calificacion4").value)||0;
    
    //si el nombre esta vacio no aceptar el ingreso y solicitar intentar de nuevo
    if(nombre.trim()=== ""){
        alert("Por favor, ingresa el nombre del alumno.");
        return;
    }
    //calcula el promedio
    const promedio = ((c1+c2+c3+c4)/4).toFixed(2);
    //agrega a la tabla el nuevo alumno junto con su edad y promedio, limpia los datos del formulario dejandolo listo para ingresar a un nuevo alumno
    const nuevoAlumno={
        nombre : nombre,
        edad: edad,
        promedio: promedio
    };
    listaDeAlumnos.push(nuevoAlumno);
    actualizarTabla();
    limpia();
}
function actualizarTabla() {
    const tbody = document.querySelector("#tablaAlumnos tbody");
    tbody.innerHTML = "";
    
    listaDeAlumnos.forEach(alumno => {
        const fila = `
        <tr>
            <td>${alumno.nombre}</td>
            <td>${alumno.edad}</td>
            <td>${alumno.promedio}</td>
        </tr>
        `;
        tbody.innerHTML += fila;
    });
}