let monthNumber = Number(prompt("ingrese el numero de mes:"));

let monthNumber: number;
switch (monthNumber) {
  case 1:
    monthNumber = 1;
    console.log("Enero");
    break;
  case 2:
    monthNumber = 2;
    console.log("Febrero");
    break;
  case 3:
    monthNumber = 3;
    console.log("Marzo");
    break;
  case 4:
    monthNumber = 4;
    console.log("Abril");
    break;
  case 5:
    monthNumber = 5;
    console.log("Mayo");
    break;
  case 6:
    monthNumber = 6;
    console.log("Junio");
    break;
  case 7:
    monthNumber = 7;
    console.log("Julio");
  case 8:
    monthNumber = 8;
    console.log("Agosto");
  case 9:
    monthNumber = 9;
    console.log("Septiembre");
    break;
  case 10:
    monthNumber = 10;
    console.log("Octubre");
    break;
  case 11:
    monthNumber = 11;
    console.log("Noviembre");
    break;
  case 12:
    monthNumber = 12;
    console.log("Diciembre");
    break;
  default:
    console.log("mes incorrecto");
    let monthNumber = Number(prompt("ingrese el numero de mes:"));
}
