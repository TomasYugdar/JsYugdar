    // Solicitar el número de lanzamientos al usuario
let numeroLanzamientos = parseInt(prompt("¿Cuántas veces quieres lanzar el dado?"));

function simularLanzamientoDados() {

    // Validar que el número de lanzamientos sea positivo
    if (numeroLanzamientos > 0) {
        // Variables para contar las apariciones de cada número
        let conteo1 = 0;
        let conteo2 = 0;
        let conteo3 = 0;
        let conteo4 = 0;
        let conteo5 = 0;
        let conteo6 = 0;

        // Simular el lanzamiento del dado
        for (let i = 0; i < numeroLanzamientos; i++) {
            // Generar un número aleatorio entre 1 y 6
            let resultado = Math.floor(Math.random() * 6) + 1;

            // Contar cuántas veces aparece cada número usando condicionales `if`
            if (resultado === 1) {
                conteo1++;
            } else if (resultado === 2) {
                conteo2++;
            } else if (resultado === 3) {
                conteo3++;
            } else if (resultado === 4) {
                conteo4++;
            } else if (resultado === 5) {
                conteo5++;
            } else if (resultado === 6) {
                conteo6++;
            }
        }

        // Mostrar los resultados
        alert(`Resultados del lanzamiento del dado:
1: ${conteo1} veces
2: ${conteo2} veces
3: ${conteo3} veces
4: ${conteo4} veces
5: ${conteo5} veces
6: ${conteo6} veces`);
    } else {
        alert("El número de lanzamientos debe ser mayor a cero.");
    }
}

