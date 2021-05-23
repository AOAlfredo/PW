function analizar(){
    var numeros = document.getElementById('numeros').value.split(",");
    var mayor=-Infinity, menor = +Infinity, suma=0, media = 0;

    //SUMA
    for(i=0; i<numeros.length; i++){
        suma = parseInt(numeros[i])+suma;
    }

    //MEDIA
    media = suma/numeros.length;

    //MENOR
    for(i=0; i<numeros.length; i++){
        if(parseInt(numeros[i])<menor)menor=numeros[i];
    }

    //MAYOR
    /*
    for(i=0; i<numeros.length; i++){
        parseInt(numeros[i])>mayor ? mayor=numeros[i]:null;
    }*/

    //numeros.forEach((element) => parseInt(element) > mayor ? mayor = parseInt(element) : null); //funcion lambda : funcion flecha  

    numeros.forEach(function(numero, index){
        console.log(`${index} - ${numero}`);
    }); //funcion lambda : funcion flecha
    /*
    PARAMETROS:
    callback
        Función que producirá un elemento del nuevo array, recibe tres argumentos:
    currentValue
        El elemento actual del array que se está procesando.
    index
        El índice del elemento actual dentro del array.
    array
        El array sobre el que se llama map.
    thisArg
        Opcional. Valor a usar como this al ejecutar callback.
    */

    /* 
    DESCRIPCIÓN:
    map llama a la función callback provista una vez por elemento de un array, en orden, y construye un nuevo array con los resultados. callback se invoca sólo para los índices del array que tienen valores asignados; no se invoca en los índices que han sido borrados o a los que no se ha asignado valor.
    callback es llamada con tres argumentos: el valor del elemento, el índice del elemento, y el objeto array que se está recorriendo.
    Si se indica un parámetro thisArg a un map, se usará como valor de this en la función callback. En otro caso, se pasará undefined como su valor this. El valor de this observable por el callback se determina de acuerdo a las reglas habituales para determinar el valor this visto por una función.
    map no modifica el array original en el que es llamado (aunque callback, si es llamada, puede modificarlo).
    El rango de elementos procesado por map es establecido antes de la primera invocación del callback. Los elementos que sean agregados al array después de que la llamada a map comience no serán visitados por el callback. Si los elementos existentes del array son modificados o eliminados, su valor pasado al callback será el valor en el momento que el map lo visita; los elementos que son eliminados no son visitados.
    */
    const nuevosNumeros = numeros.map(function(numero){
        parseInt(numero) > mayor ? mayor = parseInt(numero) : null;
        return parseInt(numero)+1;
    });
     
    console.log(`Nuevos numeros: ${nuevosNumeros}`);    

    document.getElementById("contenido").innerHTML=
        "La suma es: " + suma + "<br/>" +
        "La media es: " + media + "<br/>" +
        "El menor es: " + menor + "<br/>" +
        "El mayor es: " + mayor + "<br/>";
}