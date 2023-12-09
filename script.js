const nombre=""
alert (nombre);
console.log (nombre);
document.write (nombre);
console.log (document.getElementById('titulo'));
var elementoHTMLtitulo =document.getElementById('titulo');

var typewriter = new Typewriter(elementoHTMLtitulo, {
    loop: true
});

typewriter.typeString('Hola Mundito,Soy Christi')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Futura desarrolladora web')
    .pauseFor(2500)
    .deleteAll()
    .start();