// Obtener referencia al botón "Calcular"
var calcularBtn = document.getElementById("calcularBtn");

// Agregar un event listener al botón para calcular las operaciones
calcularBtn.addEventListener("click", function() {
    // Obtener los valores de los números ingresados
    var numero1 = parseFloat(document.getElementById("numero1").value);
var numero2 = parseFloat(document.getElementById("numero2").value);

// Comparar los números para determinar cuál es mayor
var numero1 = parseFloat(document.getElementById("numero1").value);
var numero2 = parseFloat(document.getElementById("numero2").value);

// Comparar los números para determinar cuál es mayor
var esMayor = numero1 > numero2; // true si numero1 es mayor que numero2, false en caso contrario
var esMenor = numero1 < numero2; // true si numero1 es menor que numero2, false en caso contrario

// Determinar si uno es mayor o igual que el otro
var resultadoTrue = esMayor || esMenor; // Al menos uno de los valores es true
var resultadoFalse = esMayor && esMenor; // Ambos valores son true

// Calcular las operaciones matemáticas
var suma = numero1 + numero2;
var resta = numero1 - numero2;
var multiplicacion = numero1 * numero2;
var division = numero1 / numero2;
var modulo = numero1 % numero2;

// Mostrar los resultados en un alert
alert("Número 1 es mayor que número 2: " + esMayor +
    "\nNúmero 1 es menor que número 2: " + esMenor +
    "\nAl menos uno es mayor o igual que el otro: " + resultadoTrue +
    "\nAmbos son mayores o iguales entre sí: " + resultadoFalse +
    "\nResultado de la suma: " + suma +
    "\nResultado de la resta: " + resta +
    "\nResultado de la multiplicación: " + multiplicacion +
    "\nResultado de la división: " + division +
    "\nResultado del módulo: " + modulo);
});