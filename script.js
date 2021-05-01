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
//console.log ("El resultado de la suma es: ", suma);
b=7;
//console.log(b);

let nombre = "Cristian";
let nombre2 = nombre;

nombre2 = "carlos";
//console.log("el nombre uno es ", nombre);
//console.log("el nombre dos es ", nombre2);

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

//console.log(1 / 0);
//console.log(Infinity);


//NaN: representa un error de calculo.
// Es el resultado de una operacion matematica incorrecta o ndefinida

//console.log("no es un numero" / 2);

//Nan: Cualquier operacion sobre NaN se devuelve NaN

//console.log("no es un numero" / 2 + 5);

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
/*console.log("hola" + nomb);
console.log("hola", nomb)

console.log("hola ${nomb}");
console.log('hola ${nomb}');
console.log(`hola ${nomb}`);*/

//tipo de dato (Booleano)

// true y false
let verdadero = true;
let falso = false;

let mayor =4 > 1; //true

// tipo de dato (null)
// valor especial qque no pertenece a niongun tipó de dato anterior.
//Forma un tipo ptropio separado que contiene solo el valor null

let edad = null;
//console.log(edad);
// en JS null NO significa un objeto no existente
//Es solo un valor especial que representa nada, vacio o valor desconocido.

// Tipo de valor (calor underfined)
// Es un valor especial que no pertenece a ningun tipo de dato anterior.
// el sig de underfined es valor no asignado

//let edda_dos;


//tipo de dato (operador tyeof). devuelve el tipo de dato
/*console.log(typeof undefined);// underfined
console.log(typeof 0);//number
console.log(typeof true);//boolean
console.log(typeof 10n);//biginit
console.log(typeof "hola");//string

console.log(typeof(alert));// funcion
console.log(typeof(null));//object -    ERROR DE JAVASCRIPT
console.log(typeof(Math));//object*/


// Interacciones: alert, prompt, confirm

let nombre_capturado = prompt('Digite el nombre', 'hola');
//alert(nombre_capturado);

//prompt('digite el nombre');
//prompt('digite el nombre', '');//solo para IE

//confirm
let esHelado = confirm('¿te gusta el helado?');
//console.log(esHelado);// true si presiona OK y false si presiona CANCELAR

// converciones de tipos

//existen dos tipos de converciones explicita e implicita

//convertir a String

let valor = true;
console.log(typeof valor);

valor = String(valor);
valor = String(false);
valor = String(null);
valor = String(undefined);
console.log(valor);
console.log(typeof valor);

//convertir a numero
//las conversiones numericas ocurren auitomaticamente en funciones matematicas y expreciones

alert('6' / '2');//3
let num_cad = Number(cadena);//123

//console.log(Number('hola')); //NaN

/*
underfined -> NaN
null -> 0
true -> 1
false -> 0
string ''-> 0
string 'hola' -> NaN
*/

//convertir a boleano
console.log(Boolean("hola"));
/*
underfined -> false
null -> false
string ''-> false
NaN -> salse
0->false
'0' -> true
*/
console.log(Boolean(String(0)));

//OPERADORES BASICOS

//operadores unarios y binarios
let a,b, res
a=5;
b=2;
res = a+b;
res = a-b;
res = a*b;
res =a/b;
res = a%b;//mood
res =a**b;//potencia


/*alert ('1' +2);//12
alert (1+'2');//12
alert(2+2+'1')//221
alert ('1' +2+2)//41
alert ('1'+2+2)//122
alert (2-'1');//1
alert('6'/'2');//3
alert('6'/'2a');*/

//operaciones unarias

a = 1;
console.log(-a);

a=-1;
console.log(-a);

console.log(-true);
console.log(-false);

a="2";
b="3";
console.log(+a + +b);
console.log(Number(a)+Number(b));

//asignaciones
a=2+3;
a=b=c=2+3;
c=2+3;
b=ca=b;
c=3-(a=b+1);

//modificadores
a=a+2;
a+=2;
a=a-2;
a=a-2;
a-=2;

//incremento y decremento

// ++ incermento
//--decremento
a=2;
a++;
console.log(a);//3

a=2;
a--;
console.log(a);//1

//posicion de incremento o decremento
a=1;
b= ++a;
console.log(b);

a=1
b=a++;
console.log(b);

a=1
b=a++;
c=a;
console.log(b);
console.log(c);





