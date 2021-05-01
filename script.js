alert ('¡Soy JavaScript!');

//comentarios
/*de mas de una
linea*/

// sentencias

/* alert('Hola');
alert('mundo');*/



let a = 5;
let b = 6;
let suma =a + b;
console.log ("El resultado de la suma es: ", suma);
b=7;
console.log(b);

let nombre = "Cristian";
let nombre2 = nombre;

nombre2 = "carlos";
console.log("el nombre uno es ", nombre);
console.log("el nombre dos es ", nombre2);

// variables con camel case
nombreUno = "Cristian";
nombreDos = "carlos";

//nombrado underscore
nombre_uno = "Cristian";
nombre_dos = "carlos";

//constantes

const pi = 3.141624;
const COLOR_ROJO ="#FFFF";
pi_dos = pi;
pi_dos = 7;
console.log(pi);
console.log(pi_dos);


// tipos de datos

// dinamicamente tipado

let mensaje = "Hola";
mensaje = 1234;

// tipo de dato (numero)

let n=123;
n=12.523;

// tipo de dato (valoners de numeros especialers Infinity, - Infinity y NaN)

// infinity: representa el infinito matematico. Es un valor especial que es mayor que cualquier numnero

console.log(1 / 0);
console.log(Infinity);


//NaN: representa un error de calculo.
// Es el resultado de una operacion matematica incorrecta o ndefinida

console.log("no es un numero" / 2);

//Nan: Cualquier operacion sobre NaN se devuelve NaN

console.log("no es un numero" / 2 + 5);

//tipo de dato (BigInt)

// los valores mayores que (2^53-1)o menor que -9.007.199.254.740.991

let numero_grande = 123456789456789123456789456132n;
console.log(numero_grande);

//tipo de datos (Scring)
let t = "a";
let texto = "hola";
let texto_dos = 'hola';
let texto_tres = ``; //backticks funcionalidad extendida
let nomb = "cristian";
console.log("hola" + nomb);
console.log("hola", nomb)

console.log("hola ${nomb}");
console.log('hola ${nomb}');
console.log(`hola ${nomb}`);

//tipo de dato (Booleano)

// true y false
let verdadero = true;
let falso = false;

let mayor =4 > 1; //true

// tipo de dato (null)
// valor especial qque no pertenece a niongun tipó de dato anterior.
//Forma un tipo ptropio separado que contiene solo el valor null

let edad = null;
console.log(edad);
// en JS null NO significa un objeto no existente
//Es solo un valor especial que representa nada, vacio o valor desconocido.

// Tipo de valor (calor underfined)
// Es un valor especial que no pertenece a ningun tipo de dato anterior.
// el sig de underfined es valor no asignado

let edda_dos;



//tipo de dato (operador tyeof). devuelve el tipo de dato
console.log(typeof undefined);// underfined
console.log(typeof 0);//number
console.log(typeof true);//boolean
console.log(typeof 10n);//biginit
console.log(typeof "hola");//string

console.log(typeof(alert));// funcion
console.log(typeof(null));//object -    ERROR DE JAVASCRIPT
console.log(typeof(Math));//object
