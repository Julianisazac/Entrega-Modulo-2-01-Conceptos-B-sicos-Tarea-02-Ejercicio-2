let nombreEmpleado= prompt("Nombre y apellido");
let horasDeTrabajo = Number(prompt("Nùmero de horas"));
let valorHora = 40;

let totalPAgo = valorHora* horasDeTrabajo;

document.write("Nombre del empleado: " + nombreEmpleado + ", ");
document.write("Horas trabajadas: "+ horasDeTrabajo + ", ");
document.write("Tu pago es de $" + totalPAgo + ", ");

