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
        nombre === "" ||
        edad === "" ||
        isNaN(calificacion1) ||
        isNaN(calificacion2) ||
        isNaN(calificacion3) ||
        isNaN(calificacion4)
    ) {

        document.getElementById("resultado").innerHTML =
            "Por favor, completa todos los datos.";

        return;
    }


    // Calcular promedio

    let promedio =
        (calificacion1 + calificacion2 + calificacion3 + calificacion4) / 4;


    // Mostrar resultado

    
    
    switch(true){
        case (promedio >= 9 && promedio <= 10):
            document.getElementById("resultado").innerHTML = 
            "<strong>Alumno:</strong> " + nombre +
            "<br><strong>Edad:</strong> " + edad + " años" +
            "<br><strong>Promedio:</strong> " + promedio.toFixed(2) +
            "<br><br>Excelente";
            break;
        case (promedio >= 8 && promedio <= 9):
            document.getElementById("resultado").innerHTML = 
            "<strong>Alumno:</strong> " + nombre +
            "<br><strong>Edad:</strong> " + edad + " años" +
            "<br><strong>Promedio:</strong> " + promedio.toFixed(2) +
            "<br><br>Muy Bien";
            break;
        case (promedio >= 7 && promedio <= 7.9):
            document.getElementById("resultado").innerHTML = 
            "<strong>Alumno:</strong> " + nombre +
            "<br><strong>Edad:</strong> " + edad + " años" +
            "<br><strong>Promedio:</strong> " + promedio.toFixed(2) +
            "<br><br>Bien";
            break;
        case (promedio >= 6.5 && promedio <= 6.9):
            document.getElementById("resultado").innerHTML = 
            "<strong>Alumno:</strong> " + nombre +
            "<br><strong>Edad:</strong> " + edad + " años" +
            "<br><strong>Promedio:</strong> " + promedio.toFixed(2) +
            "<br><br>Piensa en conta";
            break;
        case (promedio >= 6 && promedio <= 6.4):
            document.getElementById("resultado").innerHTML = 
            "<strong>Alumno:</strong> " + nombre +
            "<br><strong>Edad:</strong> " + edad + " años" +
            "<br><strong>Promedio:</strong> " + promedio.toFixed(2) +
            "<br><br>Date de baja";
            break;
        case (promedio >= 0 && promedio <= 5.9):
            document.getElementById("resultado").innerHTML = 
            "<strong>Alumno:</strong> " + nombre +
            "<br><strong>Edad:</strong> " + edad + " años" +
            "<br><strong>Promedio:</strong> " + promedio.toFixed(2) +
            "<br><br>Vete a Turismo o a la 11";
            break;
    }

}



function limpiar(){
    const dats = document.querySelectorAll("input");
    dats.forEach(input => input.value = "");  
} 

function agregaralumno(){
    const guardito = document.getElementById("gyardaralumnos");
    const result = document.getElementById("resultado").innerHTML;
    
    if (result === ""){
       alert("Priemro calcula el promedio para poder agregarlo");
       return;
    }
    
    guardito.innerHTML += "<div class='alumno-guardado'>" + result;
    
    limpiar();
}

