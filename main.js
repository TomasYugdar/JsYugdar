// Array para almacenar el historial de pagos
let historialPagos = [];

// Función para agregar un pago al historial
function agregarPago(montoTotal, numeroCuotas) {
    let pago = {
        montoTotal: montoTotal,
        numeroCuotas: numeroCuotas,
        montoPorCuota: montoTotal / numeroCuotas
    };
    historialPagos.push(pago); // Agregamos el pago al array
}

// Función para calcular pagos en cuotas
function calcularPagosEnCuotas() {
    let montoTotal;
    
    // Solicito el monto total a pagar al usuario y valido la entrada
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

    // Agrego el pago al historial
    agregarPago(montoTotal, numeroCuotas);

    // Muestro el resultado
    alert("El monto de cada cuota es: " + (montoTotal / numeroCuotas).toFixed(2));
}

// Función para filtrar los pagos
function filtrarPagosPorMonto(montoMinimo) {
    return historialPagos.filter(pago => pago.montoTotal > montoMinimo);
}

// Llamo a la función para ejecutar el simulador
calcularPagosEnCuotas();

// Ejemplo de uso del filtrado
let pagosFiltrados = filtrarPagosPorMonto(1500); // Filtra pagos mayores a $1500
alert("Pagos mayores a $1500: " + JSON.stringify(pagosFiltrados));
