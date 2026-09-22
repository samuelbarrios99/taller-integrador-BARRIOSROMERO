let cantidadNotas = 3;
let promedio = 0;

function calcularPromedio() {
    let valorNota1 = parseFloat(document.getElementById("nota1").value);
    let valorNota2 = parseFloat(document.getElementById("nota2").value);
    let valorNota3 = parseFloat(document.getElementById("nota3").value);

    if (isNaN(valorNota1) || isNaN(valorNota2) || isNaN(valorNota3)) {
        document.getElementById("resultado-promedio").innerHTML = "Debe ingresar las tres notas.";
        document.getElementById("resultado-estado").innerHTML = "";
        return;
    }

    promedio = (valorNota1 + valorNota2 + valorNota3) / cantidadNotas;

    document.getElementById("resultado-promedio").innerHTML = "Promedio: " + promedio.toFixed(2);

    if (promedio >= 3.0) {
        document.getElementById("resultado-estado").innerHTML = "Resultado: aprobado";
    } else {
        document.getElementById("resultado-estado").innerHTML = "Resultado: reprobado";
    }
}