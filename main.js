function calcularPagosEnCuotas() {
    let montoTotal;
    // Solicito el monto total al usuario y valido la entrada
    do {
        montoTotal = parseFloat(prompt("Ingresa el monto total a pagar:"));
        if (isNaN(montoTotal) || montoTotal <= 0) {
            alert("El monto debe ser un número mayor a cero. Inténtalo de nuevo.");
        }
    } while (isNaN(montoTotal) || montoTotal <= 0);

    let numeroCuotas;

    // Solicito el número de cuotas al usuario y valido la entrada
    do {
        numeroCuotas = parseInt(prompt("Ingresa el número de cuotas:"));
        if (isNaN(numeroCuotas) || numeroCuotas <= 0) {
            alert("El número de cuotas debe ser un número mayor a cero. Inténtalo de nuevo.");
        }
    } while (isNaN(numeroCuotas) || numeroCuotas <= 0);

    // Calculo el monto de cada cuota
    let montoPorCuota = montoTotal / numeroCuotas;

    // Muestro el resultado
    alert("El monto de cada cuota es: " + montoPorCuota.toFixed(2));
}

// Llamo a la función para ejecutar el simulador
calcularPagosEnCuotas();
