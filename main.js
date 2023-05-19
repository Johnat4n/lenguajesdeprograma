// alert('Prueba Javascript')

var nombre = "Johnatan Molina";
var edad = 26;
var estatura = 175

// document.write(nombre);

var datos = document.getElementById("datos");

datos.innerHTML = `
    <h1>DATOS DE PERSONAS</h1>
    <h2>Mi nombre es: ${nombre}</h2>
    <h2>Mi edad es: ${edad}</h2>
    <h2>Mi estatura: ${estatura}</h2>
`;

if(estatura >= 150){
    datos.innerHTML += '<h2>Eres una persona ALTA</h2>';
    datos.innerHTML += '<h2>Eres una persona ALTA</h2>';
datos.innerHTML += '<h2>Eres una persona ALTA</h2>';
        datos.innerHTML += '<h2>Eres una persona ALTA</h2>';
}
else{
    datos.innerHTML += '<h2>Eres una persona Bajita </h2>';
    datos.innerHTML += '<h2>Eres una persona CHAPARRA</h2>';
datos.innerHTML += '<h2>Eres una persona CHAPARRA</h2>';
    datos.innerHTML += '<h2>Eres una persona Bajita</h2>';
        datos.innerHTML += '<h2>Eres una persona Bajita</h2>';
}