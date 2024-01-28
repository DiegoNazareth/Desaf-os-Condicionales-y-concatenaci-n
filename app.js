//Pregunta al usuario qué día de la semana es. Si la respuesta es "Sábado" o "Domingo", 
//muestra "¡Buen fin de semana!". De lo contrario, muestra "¡Buena semana!".
let semana=prompt('Que dia de la semana es?');

if (semana=='Sabado' || semana== 'Domingo'){
    alert("Buen fin de semana");
}else{
    alert ("Buena Semana")
}

//Verifica si un número ingresado por el usuario es positivo o negativo. Muestra una alerta informativa.

let numero= prompt('Ingresa un numero: ');
if(numero<0){
    alert("Es numero negativo");
}else{
    alert("El numero es positivo")
}

//Crea un sistema de puntuación para un juego. Si la puntuación es mayor o igual a 100, 
//muestra "¡Felicidades, has ganado!". En caso contrario, muestra "Intenta nuevamente para ganar.".

let puntuacion=prompt('Ingresa tu puntuacion: ');
if(puntuacion>=100){
    alert("¡Felicidades, has ganado!")
}else{
    alert("Intentanuevamente para ganar")
}

//Crea un mensaje que informe al usuario sobre el saldo de su cuenta, 
//utilizando un template string para incluir el valor del saldo.

let saldo=233222.23
alert(`Su saldo de su cuenta es: ${saldo}`);

//Pide al usuario que ingrese su nombre mediante un prompt. 
//Luego, muestra una alerta de bienvenida usando ese nombre.

let nombre_usuario=prompt('Ingresa tu nombre de usuario: ');
alert(`Bienvenido/a ${nombre_usuario}`);