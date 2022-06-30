# Ejercicios preparación Programa TOP

## Ejercicio 1

Escribe una función llamada `numDuplicados` que reciba un string y retorne el número de caracteres que aparecen más de una vez.

1. ```Javascript
   console.log(numDuplicados("abcaa")); // 1
   ```
2. ```Javascript
   console.log(numDuplicados("abab")); // 2
   ```
3. ```Javascript
   console.log(numDuplicados("abc")); // 0
   ```

## Ejercicio 2

Escribe una función llamada `frecuencias` que reciba una cadena de texto y retorne un objeto con el número de veces que aparece cada caracter (exceptuando el espacio en blanco)

1. ```Javascript
     console.log(frecuencias("hola mundo"));
   // { h: 1, o: 2, l: 1, a: 1, m: 1, u: 1, n: 1, d: 1 }
   ```
2. ```Javascript
     console.log(frecuencias("anita lava la tina"));
   // { a: 6, n: 2, i: 2, t: 2, l: 2, v: 1 }
   ```

## Ejercicio 3

Crea una función llamada `caracteresEnComun` que recibe dos argumentos: `str1` y `str2`. La función debe retornar un arreglo con todos los caracteres que las dos cadenas tienen en común.

1. ```Javascript
    caracteresEnComun("Hola", "Mundo"); // ["o"]
   ```
2. ```Javascript
    caracteresEnComun("German", "Gabriela"); // ["G", "e", "r", "a"]
   ```
3. ```Javascript
    caracteresEnComun("Hola", "Bye"); // []
   ```

## Ejercicio 4

Escribir una función llamada `ajustarTexto` que reciba dos argumentos: un string y un número (que representa una longitud). La función debe retornar la cadena ajustada a la longitud recibida. Si la longitud de la cadena es mayor al número, debes recortar la cadena. De lo contrario agrega espacios en blanco hasta completar la longitud.

1. ```Javascript
    console.log(`${ajustarTexto("", 3)}`) // " "
   ```
2. ```Javascript
    console.log(`${ajustarTexto("hola", 2)}`) // "ho"
   ```
3. ```Javascript
    console.log(`${ajustarTexto("Hola", 0)}`) // ""
   ```
4. ```Javascript
    console.log(`${ajustarTexto("Hola", 5)}`) // "Hola "
   ```

## Ejercicios de Leetcode

Completa los siguientes ejercicios en LeetCode:

-   https://leetcode.com/problems/valid-anagram/
-   https://leetcode.com/problems/move-zeroes/
-   https://leetcode.com/problems/two-sum/
