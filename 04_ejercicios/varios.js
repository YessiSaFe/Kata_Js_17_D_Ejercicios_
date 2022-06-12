// 1.-
// Paco hizo travesuras en el salón y la maestra lo castigó, para poder salir tiene// escribir en el pizarrón todos los números pares  del 1 al 100, ¿puedes ayudarle a Paco a// hacer un algoritmo que haga esto por el? (editado) 

var contador = 0; 
for (var index = 1; index <= 100; index++) {
    if (index % 2 == 0) {
        contador = contador + 1;
        console.log ('$(index) es multiplo de 2');
    }
}
console.log('De 0 a 100 existen ${contador} multiplos de 2');

// 2. -
//Escribir todos los números que terminan en 0 y estén entre 2 y 121 (editado) 

 // 3. -
//EXTRA// Joel lleva 5 materias, el quiere saber su promedio al recibir sus calificaciones,// ¿podrías ayudarle a crear un algoritmo que haga eso por el?

 //Ejercicios de Funciones

 //1 .-
// Hacer una función que convierta pesos a dólares - RETURN

 //2. -
// Hacer una función que cuente el número de caracteres de una palabra - RETURN

 //3 . -
// Hacer una función que halle el máximo entre dos números - RETURN
// Hacer una función que halle el máximo entre tres números - RETURN
// Hacer una función que calcule el IVA de una cantidad (16%) - RETURN (editado) 

 //4 . -
// Hacer una función para ingresar cualquier letra del alfabeto  - RETURN// y verifique si es vocal o consonante

 //5. -
// Hacer una función que verifique si un número es positivo o negativo - RETURN

 //Funcion y for
// Hacer una función que imprima todos los números pares entre 1 y 100

 // 6 -
// Hacer una función que halle la suma de todos los números naturales entre 1 y n - RETURN

 // 7 . -
// Hacer una función que imprima una pirámide de asteriscos como la siguiente:


for(let i = 1; i <= 15; ++i){
    let resultado = '';
    
    for(let j = 1; j <= i; ++j) {
      resultado += '* ';
    }
    
    console.log(resultado)
  }

