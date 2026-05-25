// En estas primeras preguntas sustituye `null` por la respuesta (constantes iniciales + hoisting):

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = "Hola mundo";

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 42;

// Crea una variable booleana:
const nuevoBool = true;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;

// Pensá este orden como si siguiera ejecutándose línea por línea (hoisting de `var`):
// console.log(typeof y);
// var y = 10;
// ¿Qué string devuelve `typeof y` antes de llegar al `=` ? Reemplazá null por ese string entre comillas.
const resultadoHoisting = "undefined";

// En los próximos problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function devolverString(str) {
  return str;
}

function suma(x, y) {
  return x + y;
}

function resta(x, y) {
  return x - y;
}

function multiplica(x, y) {
  return x * y;
}

function divide(x, y) {
  return x / y;
}

function sonIguales(x, y) {
  return x == y;
}

function sonEstrictamenteIguales(x, y) {
  return x === y;
}

function tienenMismaLongitud(str1, str2) {
  return str1.length === str2.length;
}

function menosQueNoventa(num) {
  return num < 90;
}

function mayorQueCincuenta(num) {
  return num > 50;
}

function obtenerResto(x, y) {
  return x % y;
}

function esPar(num) {
  return num % 2 === 0;
}

function esImpar(num) {
  return num % 2 !== 0;
}

function elevarAlCuadrado(num) {
  return num ** 2;
}

function elevarAlCubo(num) {
  return num ** 3;
}

function elevar(num, exponent) {
  return num ** exponent;
}

function redondearNumero(num) {
  return Math.round(num);
}

function redondearHaciaArriba(num) {
  return Math.ceil(num);
}

function agregarSimboloExclamacion(str) {
  return str + "!";
}

function combinarNombres(nombre, apellido) {
  return nombre + " " + apellido;
}

function obtenerSaludo(nombre) {
  return "Hola " + nombre + "!";
}

function obtenerAreaRectangulo(alto, ancho) {
  return alto * ancho;
}

function obtenerMayor(x, y) {
  if (x >= y) return x;
  return y;
}

function saludo(idioma) {
  if (idioma === "aleman") return "Guten Tag!";
  if (idioma === "mandarin") return "Ni Hao!";
  if (idioma === "ingles") return "Hello!";
  return "Hola!";
}

function esDiezOCinco(numero) {
  return numero === 10 || numero === 5;
}

function estaEnRango(numero) {
  return numero > 20 && numero < 50;
}

function esEntero(numero) {
  return Math.floor(numero) === numero;
}

function fizzBuzz(numero) {
  if (numero % 3 === 0 && numero % 5 === 0) return "fizzbuzz";
  if (numero % 3 === 0) return "fizz";
  if (numero % 5 === 0) return "buzz";
  return numero;
}

function esPrimo(numero) {
  if (numero <= 1) return false;
  for (let i = 2; i < numero; i++) {
    if (numero % i === 0) return false;
  }
  return true;
}

// --- Temario ampliado ---

function valoresDelIndiceConLetEnBucle() {
  const funciones = [];
  for (let i = 0; i < 3; i++) {
    funciones.push(() => i);
  }
  return funciones.map(fn => fn());
}

function construirListaConConstMutando() {
  const lista = [];
  for (let i = 1; i <= 3; i++) {
    lista.push(i);
  }
  return lista;
}

function esRealmenteNulo(valor) {
  return valor === null;
}

function esValorUndefined(valor) {
  return valor === undefined;
}

function esNumeroValido(n) {
  return typeof n === "number" && !Number.isNaN(n);
}

function acumularPorPasos(inicial, pasos) {
  let total = inicial;
  for (let i = 0; i < pasos.length; i++) {
    if (pasos[i] >= 0) {
      total += pasos[i];
    } else {
      total -= Math.abs(pasos[i]);
    }
  }
  return total;
}

function aplicarIncrementoDesdeCero(intentos) {
  let contador = 0;
  for (let i = 0; i < intentos; i++) {
    contador++;
  }
  return contador;
}

function enteroDesdeBinario(binarioStr) {
  return parseInt(binarioStr, 2);
}

function floatDesdeTexto(texto) {
  return parseFloat(texto);
}

function precioFormateadoDosDecimales(precio) {
  return precio.toFixed(2);
}

function esNumeroFinitoValor(n) {
  return Number.isFinite(n);
}

function redondearHaciaAbajo(num) {
  return Math.floor(num);
}

function aleatorioEnteroInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function buscarIndiceCadena(texto, subcadena) {
  return texto.indexOf(subcadena);
}

function extraerPorSlice(texto, inicio, fin) {
  return texto.slice(inicio, fin);
}

function limpiarEspaciosExtremos(texto) {
  return texto.trim();
}

function partirEnEspacios(texto) {
  return texto.split(" ");
}

function reemplazarGuionesPorEspacio(texto) {
  return texto.replaceAll("-", " ");
}

function minusculasYRecortado(texto) {
  return texto.trim().toLowerCase();
}

function mayusculasTrasTrim(texto) {
  return texto.trim().toUpperCase();
}

function puedePasarAlEvento(edad, tieneEntrada, esVIP) {
  return edad >= 18 && (tieneEntrada === true || esVIP === true);
}

function noEsValorFalso(valor) {
  return !(valor === false);
}

function clasificarSigno(num) {
  return num > 0 ? "positivo" : num < 0 ? "negativo" : "cero";
}

function clasificarTipoDia(codigo) {
  switch (codigo) {
    case "lun":
    case "mar":
    case "mie":
    case "jue":
    case "vie":
      return "habil";
    case "sab":
    case "dom":
      return "descanso";
    default:
      return "desconocido";
  }
}

function sumaDesdeUnoConWhile(numeroFinal) {
  if (numeroFinal < 1) return 0;
  let total = 0;
  let i = 1;
  while (i <= numeroFinal) {
    total += i;
    i++;
  }
  return total;
}

function primerMultiploEnIntervaloDoWhile(inicio, divisor, limiteSuperior) {
  if (divisor === 0) return null;
  let actual = divisor;
  do {
    if (actual >= inicio) return actual;
    actual += divisor;
  } while (actual <= limiteSuperior);
  return null;
}

function tablaMultiplicacionForBase(base) {
  const resultado = [];
  for (let k = 0; k < 10; k++) {
    resultado.push(base * (k + 1));
  }
  return resultado;
}

function saludarConTitulo(nombre, titulo = "Sr.") {
  return `Hola, ${titulo} ${nombre}!`;
}

function elevarConExponentePorDefecto(base, exponente = 2) {
  return base ** exponente;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  nuevaString,
  nuevoNum,
  nuevoBool,
  nuevaResta,
  nuevaMultiplicacion,
  nuevoModulo,
  resultadoHoisting,
  devolverString,
  tienenMismaLongitud,
  sonIguales,
  sonEstrictamenteIguales,
  menosQueNoventa,
  mayorQueCincuenta,
  suma,
  resta,
  divide,
  multiplica,
  obtenerResto,
  esPar,
  esImpar,
  elevarAlCuadrado,
  elevarAlCubo,
  elevar,
  redondearNumero,
  redondearHaciaArriba,
  agregarSimboloExclamacion,
  combinarNombres,
  obtenerSaludo,
  obtenerAreaRectangulo,
  obtenerMayor,
  saludo,
  esDiezOCinco,
  estaEnRango,
  esEntero,
  fizzBuzz,
  esPrimo,
  valoresDelIndiceConLetEnBucle,
  construirListaConConstMutando,
  esRealmenteNulo,
  esValorUndefined,
  esNumeroValido,
  acumularPorPasos,
  aplicarIncrementoDesdeCero,
  enteroDesdeBinario,
  floatDesdeTexto,
  precioFormateadoDosDecimales,
  esNumeroFinitoValor,
  redondearHaciaAbajo,
  aleatorioEnteroInclusive,
  buscarIndiceCadena,
  extraerPorSlice,
  limpiarEspaciosExtremos,
  partirEnEspacios,
  reemplazarGuionesPorEspacio,
  minusculasYRecortado,
  mayusculasTrasTrim,
  puedePasarAlEvento,
  noEsValorFalso,
  clasificarSigno,
  clasificarTipoDia,
  sumaDesdeUnoConWhile,
  primerMultiploEnIntervaloDoWhile,
  tablaMultiplicacionForBase,
  saludarConTitulo,
  elevarConExponentePorDefecto,
};
