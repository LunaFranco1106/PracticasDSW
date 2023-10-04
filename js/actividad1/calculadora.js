// Obtener referencia al botón "Calcular"
var calcularBtn = document.getElementById("calcularBtn");

// Agregar un event listener al botón para calcular las operaciones
calcularBtn.addEventListener("click", function() {
    // Obtener los valores de los números ingresados
    var numero1 = parseFloat(document.getElementById("numero1").value);
    var numero2 = parseFloat(document.getElementById("numero2").value);

    // Realizar las operaciones
    var suma = numero1 + numero2;
    var resta = numero1 - numero2;
    var multiplicacion = numero1 * numero2;
    var division = numero1 / numero2;

    // Mostrar los resultados en un alert
    alert("El resultado de la suma es: " + suma +
        "\nEl resultado de la resta es: " + resta +
        "\nEl resultado de la multiplicación es: " + multiplicacion +
        "\nEl resultado de la división es: " + division);
});