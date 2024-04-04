/*1. Solicitar al usuario que responda a la pregunta (“¿Eres bellisimo/a?”), en caso de contestar sí, responder “Ciertamente”, en caso de contestar no, responder: “No te creo”. */


let   decision = prompt ( "Ejercicio No.1 \n \n Eres Bellisimo /a \n  1.- Ciertamente. \n  2.- No te creo");

    if ( decision == true){
        alert ( "Ciertamente");  
    } else {
        alert ("No te creo");   
    }




/* 2. Solicitar al usuario un número, y determinar si es divisible entre dos o no. Mostrando al usuario un mensaje de “x número es divisible entre 2” o “x núm no es divisible entre 2”. */
/*
let  divisibleEntreDos = prompt("Ejercicio No.2 \n \n Introduce un número: ");

if (divisibleEntreDos%2 === 0){
    alert(`El número: ${divisibleEntreDos}  es divisible entre dos`);
    console.log(divisibleEntreDos);
} else {
    alert(`El número: ${divisibleEntreDos}  no es divisible entre dos`);
    console.log(divisibleEntreDos);
}
*/



/*3. Crear un programa que determine si un número introducido en un Prompt es par o no, la respuesta será mostrada en un Alert.  */
/*
let numero = prompt("Ejercicio No.3 \n \n Introduce un número: ");

if (numero%2==0){
    alert( `El número que elegiste: ${numero} es un numero par` );
} else {
    alert(`El número que elegiste: ${numero} es un numero impar`);
}
*/


/* 4. Solicitar al usuario un número de cliente. Si el número es el 1000, imprimir 'Ganaste un premio', en caso contrario mostrar el número y el mensaje “Lo sentimos, sigue participando”.  */
/*
let numero = prompt("Ejercicio No.4 \n \n Introduce un número de Cliente: ");

if (numero == 1000){
    alert(`Ganaste un premio, por que tu número es el: ${numero}`);
} else {
    alert(`"Lo sentimos, sigue participando"`)
}
*/

/*5. Solicitar al usuario que ingrese dos números y mostrar cuál de los dos es menor. No considerar el caso en que ambos números son iguales.  */

/*
let numero1 = prompt("  Ejercicio No. 5 \n Selecciona un número1:");
let numero2 = prompt("Selecciona el número2");



if (parseInt(numero1) < parseInt(numero2)){
    alert(`El número menor es: ${numero1}`); 
} else {
    alert(`El numero menor es: ${numero2}`);
}
*/

/* 6. Solicitar al usuario que ingrese tres números y mostrar cuál de los tres es el número mayor. Considerar el caso en que 2 números sean iguales. */
/*
let numero1 = prompt("  Ejercicio No. 6 \n Selecciona un número1:");
let numero2 = prompt("Selecciona el número2");
let numero3 = prompt("Selecciona un tercer número");

if (parseInt(numero1) >= parseInt(numero2) && parseInt(numero1)>= parseInt(numero3)){
    alert(`El número mayor o igual: ${numero1}`)
} else  if (parseInt(numero2) >= parseInt(numero1) && parseInt(numero2) >= parseInt(numero3)){
    alert(`El número mayor o igual: ${numero2}`)
} else  if (parseInt(numero3) >= parseInt(numero1) && parseInt(numero3) >= parseInt(numero2)){
    alert(`El número mayor o igual: ${numero3}`)
}
*/


/*
7. Requerir al usuario que ingrese un día de la semana e imprimir un mensaje si es lunes, otro mensaje diferente si es viernes, otro mensaje diferente si es sábado o domingo. Si el día ingresado no es ninguno de esos, imprimir otro mensaje.
*/
/*
let diaSemana = prompt("Ejercicio 7 \n Selecciona un dia de la semana")
console.log(diaSemana)
if (diaSemana == "lunes"){
    alert(`Tu dia de la semana es: ${diaSemana}`)
} else if (diaSemana == "viernes"){
    alert(`Gracias a Dios, es: ${diaSemana}`)
} else if (diaSemana == "sabado"){
    alert(`Buen fin de semana  hoy es:${diaSemana}`)
} else if (diaSemana == "domingo"){
    alert(`Buen fin de semana  hoy es:${diaSemana}`)
} else {
    alert(`Animo: Hoy es un dia normal, ${diaSemana}`)
}
*/


/*
8. Solicitar al usuario una calificación (entre 1 y 10). Luego se debe comprobar que el número efectivamente esté en ese rango, si no lo está imprima un mensaje de error. Si lo está, imprima “reprobado” si la calificación es inferior a 6, “regular” si está entre 6 y 8, “bien” si es 9, y por último, “excelente” si es 10.
*/
/*
let calificacion = prompt("Ejercicio No. 8   \n  Introduce una calificación:" )

if (calificacion >= 1 && calificacion >= 11){
    alert("Lo sentimos tu calificacion no esta en el rango")
    console.log("calificacion no esta en el rango")
} else if (calificacion <= 5){
    alert(`Reprobado tu calificacion es: ${calificacion}`)
} else if (calificacion == 6) {
    alert(`regular, tu calificacion es: ${calificacion}`)
} else if (calificacion >= 7 && calificacion <=8){
    alert(`Bien, tu calificacion es: ${calificacion}`)
} else if (calificacion >= 9){
    alert(`Excelente, tu calificacion es: ${calificacion}`)
}
*/


/*
9. Escribe un programa que responda a un usuario que quiere comprar un helado en una conocida marca de comida rápida cuánto le costará en función del topping que elija.
El helado sin topping cuesta 50 MXN.
El topping de oreo cuesta 10 MXN.
El topping de KitKat cuesta 15 MXN.
El topping de brownie cuesta 20 MXN.
En caso de no disponer del topping solicitado por el usuario, el programa le indicará “no tenemos este topping, lo sentimos.” y a continuación le informará el precio del helado sin ningún topping.
*/
/* 
let topping = prompt("Ejercicio No.9 \n \n Elige un topping \n \n 1.-Topping oreo \n 2.-Topping KitKat \n 3.-Topping browni \n 4.- Sin Topping \n \n El precio del Helado sin topping es de $ 50.00 MNX")
let totalApagar=0
let totalHelado=50

if (topping == 1){ 
    totalApagar = totalHelado + 10
    alert(`Elegiste la opcion oreo: ${totalApagar} MXN` )
} else if (topping == 2){
    totalApagar = totalHelado + 15
    alert(`Elegiste la opcion kitkat: ${totalApagar} MXN` )
} else if (topping == 3){
    totalApagar = totalHelado + 20
    alert(`Elegiste la opcion browni: ${totalApagar} MXN` )
} else if (topping == 4){
    totalApagar = totalHelado
    alert(`Elegiste la opcion sin topping: ${totalApagar} MXN` )
} else {
    alert("Lo sentimos, no disponemos de ese topping")
}
*/

/*
10. Un conocido portal de educación en tecnología está ofreciendo programas para aprender a desarrollar aplicaciones. Escribe un programa que le indique a la persona interesada cuánto deberá pagar mensualmente de acuerdo a la opción elegida.
El programa educativo contempla 3 diferentes niveles, cada uno con su costo mensual: Course: $4999 MXN
Carrera $3999 MXN
Master: $2999 MXN
Adicionalmente preguntar si cuenta con alguna beca y aplicar el descuento correspondiente al precio final.
Beca Facebook: 20% de descuento.
Beca Google: 15% de descuento.
Beca Jesua: 50% de descuento.
Finalmente, además del precio mensual con descuento, indicar al usuario cuánto gastaría en total por el curso elegido, tomando en cuenta las siguientes duraciones:
Course: 2 meses
Carrera 6 meses
Master: 12 meses

*/
/*
const programa = Number(prompt(" Ejercicio No. 10 \n \n Elige un nivel \n 1.-Curso $4999 MXN \n 2.-Carrera $3999 MXN  \n 3.-Master $2999 MXN \n  "));

const beca = Number(prompt("Elige una beca \n 1.-Facebook: 20% de descuento \n 2.-Google: 15% de descuento  \n 3.-Jesua: 50% de descuento \n 4.-Sin Beca"));

function calcularCostoPrograma (programa, beca){
    let costoMensual = 0;
    let costoBeca = 0;

    if (programa === 1){
        costoMensual = 4999;
    } else if (programa === 2){
        costoMensual = 3999;
    } else if (programa === 3){
        costoMensual = 2999;
    }

    if (beca === 1){
        costoBeca = costoMensual - costoMensual * 0.2
    } else if (beca === 2){
        costoBeca = costoMensual - costoMensual * 0.15
    } else if (beca === 3){
        costoBeca = costoMensual - costoMensual * 0.5
    } else if (beca === 4){
        costoBeca = costoMensual
    }

    return costoBeca;
}

function calcularCostoTotal (programa, costoMensual){
    let costoFinal = 0;

    if (programa === 1){
        costoFinal = costoMensual * 2;
    } else if (programa === 2){
        costoFinal = costoMensual * 6;
    } else if (programa === 3){
        costoFinal = costoMensual * 12;
    }

    return costoFinal;
}

const costoMensualConDescuento = calcularCostoPrograma(programa, beca);
const costoTotal = calcularCostoTotal(programa, costoMensualConDescuento);

alert(`El Costo mensual del programa es:  $${costoMensualConDescuento}MXN  \n El costo total del programa es: $${costoTotal} MXN`);
*/

/*11. Realizar un programa que ayude a calcular el total a pagar de acuerdo a la distancia recorrida por un vehículo con cargo extra por los litros consumidos, tomando en consideración lo siguiente:
Si el vehículo es “coche”, el precio kilometro ha de ser 0.20, si es “moto” ha de ser 0.10 y si es “autobús” 0.5.
Si los litros consumidos están entre 0 y 100 se ha de añadir 5 al costo total, si es mayor la cantidad de litros consumidos se ha de añadir 10 al total. Considere qué:
total a pagar = (precio kilometro x kms recorridos) + extra por litros consumidos.  */
/*
const vehiculo = Number(prompt("Ejercicio No.11 \n Elige un vehiculo: \n 1.-Coche. \n 2.-Moto. \n 3.-Autobus."));
const kilometro = Number(prompt("¿Cuantos kilometros has recorrido?"));

let litrosConsumidos = 0;
let costoTotal = 0;

if (litrosConsumidos === 0 && litrosConsumidos === 100){
    costoTotal = 
    alert(`El rango esta de acuerdo al parametro estabecido, has recorrido: ${kilometro} `)
} 

*/