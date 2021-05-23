function Persona(nombre, twitter) {
    this.nombre = nombre;
    this.twitter = twitter;
};
var objeto = new Persona("Adolfo", "@asanzdiego");
console.log(objeto);

console.log(Object.getPrototypeOf(objeto));

// No es estandar y falla en IE
console.log(objeto.__proto__);