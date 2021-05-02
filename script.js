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


// COMPARACIONES

console.log(2>1); // true
console.log(2==1 );//false
console.log(2!=1); // true

let resultado =2>1;


//comparaciones entre cadenas

console.log('Z' > 'A');//true
console.log('Show'> 'show');//false
console.log('casa' > 'casas');//false
console.log('a' > 'A');

//1. la letra minuscula es mayor que la mayuscula
//2. la palabra con mayor letra es mayor que la de menos letra.


//comparacion de diferentes tipos
// al compara valores de diferentes tipos, JavaScript los convierte a numneros.
//toda comparacion con NaN es falso

console.log('****');
console.log('2' > 1);//true
console.log('01' == 1);//true
console.log(true<0);//true
console.log(false ==0);//true
console.log('hola' > 0);//false
console.log('hola < 0');//false
console.log('hola' == 0); //false

console.log('**********');

a = 0;
b = '0';
Boolean_a = Boolean(a);//false
Boolean_b = Boolean(b);//true

console.log(a==b);//true



5 > 4//true
"apple" > "pineapple" // false
"2" > "12"// true
undefined == null // true
undefined === null // false
null =="0";//false
null === +"0"//false


// SENTENCIA IF
//IF de linea
if (4<5)console.log('Mensaje');
if(4<5){
    b= 5+3;
    console.log('Mensaje');
} 

if ('45a'/3){
    console.log('No entró');
}

if ('0'){
    console.log('entró');
}

if ('4'/2){
    console.log('entró');
}

if(1){
    console.log('Entró o no entró?');
}

let (edadx)
if(edad){
    console.log('Variable definida');
}else{
    console.log('variable indefinida');
}

//haga un algoritmo que dado una edad imprima true si es mayor de edad
//false si no lo es

let (edad_usuario =17);
if (edad_usuario >=18){
    console.log(true);
}else{
    console.log(false);
}
console.log(edad_usuario >= 18);

//operador ternario
//condicion ? operacion verdadera : operacion falsa;
resultado = edad_usuario >= 18 ? x=5: x=7;

//operadores

//OR
/*
v or v=v
v or f=v
f or v=v
f or f=f
*/
console.log('***** operador or ******');
console.log(true || true)//true
console.log(true || false)//true
console.log(false || true)//true
console.log(false || false)//false


if (4 == 4 || 2 > 5){
    console.log('Verdadero');
}

//resultado = valor_uno || valor_dos || valor_tres
//1. evalua los operando de izquiera a derecha
//2. por cada operando, convierte el valor a booleano.Si el resultado es true.
//se define y retorna el valor original de ese operando
//3. si todos los valores operando han sido evaluados (todos eran falsos), retorna el ulñtimo operando.

let comparacion_booleana = true || false || true;
comparacion_booleana = '0' || '0';
comparacion_booleana = undefined || null || NaN || '';// ''

// prevelancia U orden entre OR y AND

//a && b || c && d = (a && b) || (c && d)

//negacion

console.log(!true);//false
console.log(!false);//true
console.log(!!undefined);// false == Boolean (underfined)


//Nullish o funcion de nulos
a= null ?? undefined ?? undefined ?? null ?? "hola" ?? null ?? undefined//"hola"
a= null ?? undefined ?? undefined ?? undefined ?? null ?? null ?? null;//null

/*

// while condicion{
//
//}
 let i=0;
 while(i<=10){
     console.log(´el valor de i es ${i}´);
     i++;
 }
 i=10;
 while(i<=10){
    console.log(´el valor de i es ${i}´);
    i--;
}

//do - while

i=1
do{
console.log(´el valor de i es ${i}´);
i++;
}while(i<=10);

    // ciclo for

    for(i=0; i<=10; i++){
        console.log(´el valor de i es ${i}´);
    }


// alcance de la variable

for(let z=0; z<=10; z++){
    console.log(´el valor de z es ${z}´);
}
console.log(´el valor de z es ${z}´);

let w=0;
for(let w=0; w<=10; w++){
    console.log(´el valor de w es ${w}´);
}
console.log(´el valor de w es ${w}´);

//saltado de partes
w=0;
for( w<=10){
    console.log(´el valor de w es ${w++}´);
}

// break y continue

while(1){
    console.log(´el valor de w es ${w}´);
    w++;
    if (w==11) break;
}

for(i=1; i<=10; i++){
    if (i%2 != 0);
    console.log(´es un numero par´)
}

//etiqueta para break y continue
for(i=0;i<=10;i++){
    for(j=0;j<=10;j++){

        console.log(´la suma de i+j es ${i+j}´);
        if (j==2)break;
    }
    if(j==2)break;
}
console.log(´salio´);

principal: for(i=0;i<=10;i++){
    for(j=0;j<=10;j++){

        console.log(´la suma de i+j es ${i+j}´);
        if (j==2)break principal;
    }
   
}
console.log(´salio´);*/

/*switch(valor):{
    case valor1:
        [break];
        default:
            [break];
}
*/

a=2+2;
switch(a){
    case 3:
        console.log('el resultado es 3');
        break;
        case 4:
        console.log('el resultado es 4');
        break;
        default:
        console.log('ninguno de los dos valores');
        
}

// funciones
/*
function nombre([parametros]){

}
*/

function saludar(){
    console.log('hola mundo');
}
saludar();+
function saludar_nombre(){
    let nombre = 'Cristian';//variable local
    console.log('hola ${nombre_xx}');

}

 console.log('hola ${nombre_xx}');
 saludar_nombre();

 //parametros
 function mensaje (de, para){
     console.log('${de}: ${texto}');

 }
mensaje ('Cristian', 'hola maria');
mensaje ('maria', 'hola cristian');

//parametros predeterminados
function mensaje (de, para){
    console.log('${de}: ${texto}');

}
mensaje ('Cristian');
mensaje ('maria', 'hola cristian')
function sumar(a,b){
    return a+b;
}
console.log(sumar(4,5));
console.log(sumar_dos(4,5));
console.log(sumar_dos()== undefined);

//HUF que devuelva la sumatoria de los numeros pares de 1 al x
function sumatoria_apres(x){
    sumatoria =0;
    for(i=0;i<=x; i++){
        if(es_par(x))sumatoria = sumatoria + i;
        
    }
    return sumatoria;
}
function es_par(n){
    return n % 2 == 0;
}
console.log(sumatoria_apres(10));


//expresion y declaracion de una funcion

//declarar una funcion

function hola(){
    console.log('hola mundo');
}

//exprecion de una funcion

let hola = function(){
    console.log('hola mundo');
};
console.log('hola_dos');

// funciones flecha

let hola_dos_flecha = () => console.log('hola mundo');

let sumar_ex = function(a,b){
    return a+b;

}

/*let sumar_ex_flecha = (a,b){
    return a+b;
}*/

// creacion de una funcion de manera dinamica

edad=15
let saludo_edad = (edad > 18)?
() => console.log('es mayor de edad'):
() => console.log('es menor de edad');

saludo_edad();


//callback

function decidir (pregunta, si, no){
if (confirm(pregunta)) si()
else no();
}

let si = () => console.log('la persona dijo que si');
let no = () => console.log('la presona dijo no');

decidir('estas interesado en aprender javascript?', si , no);