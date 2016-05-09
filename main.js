// #1 EL MENOR DE LOS NUMEROS ...............................................................
function numMenor(num1,num2) {
	if(num1 < num2) {
		return num1
	} else {
		return num2
	}
}

// numMenor(20,15);
document.write("El numero menor es " + numMenor(20,15));


// #2 NUMERO PAR O IMPAR.....................................................................
// var num = prompt("Introduce un numero");

// function numero(num) {
// 	if(num % 2 == 0) {
// 		return "par"
// 	} else {
// 		return num "impar"
// 	}
// }

// numero("par","impar");
// document.write("El numero " + num + " es " + numero);


// #3 ORDENANDO NUMEROS


// #4 MAYUSCULAS O MINUSCULAS ...............................................................
function inf(cadena) {
	var r = "<br>" + "La cadena " + cadena;

	if(cadena == cadena.toUpperCase()) {
		r += "Esta formada solo por mayusculas";
	} else if(cadena == cadena.toLowerCase()) {
		r += "Esta formada solo por minusculas";
	} else {
		r += "Esta formada por mayusculas y minusculas";
	}

	return r
}

document.write(inf("TEXTO "));


// #5 PALINDROMO ............................................................................
/*function palindromo(cadena) {
	var r = "<br>" + "La cadena " + cadena;

	var cadenaOriginal = cadena.toLowerCase();
	var letrasEspacio = cadenaOriginal.split("");

	var cadenaSinEspacio = "";
	for(i in letrasEspacio) {
		if(letrasEspacio[i] != " ") {
			cadenaSinEspacios += letrasEspacio[i];
		}
	}

	var letras = cadenaSinEspacios.split("");
	var letrasReves = cadenaSinEspacios.split("").reverse();

	var iguales = true;

	for(i in letras) {
		if(letras[i] == letrasReves[i]){

		} else {
			iguales = false,
		}
	}

	if(iguales) {
		r += "es un palindromo ";
	} else {
		r += "no es un palindromo";
	}

	return r
}

document.write(palindromo("La ruta nos aporto otro paso natural")); */


// #6 OPERACIONES MATEMATICAS ...............................................................
function operaciones(operacion) {

}


// #7 CUADRADO DE LA SUMA DE DOS NUMEROS ....................................................
function cuadrado(num1,num2) {
	suma = num1 + num2;
	resultado = suma * suma;

	return resultado
}

document.write("<br>" + "El cuadrado es " + cuadrado(4,2));


// #8 NUMERO PRIMO ..........................................................................
var numero = prompt("Ingresa un numero")

function primo(numero) {
	if(numero)
}