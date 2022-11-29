//saludo

function saludarALosUsuarios (nombre){
    console.log(`Bienvenido ${nombre}`)
}
const nombreDelUsuario = prompt ("Ingrese su nombre")
saludarALosUsuarios(nombreDelUsuario)

//Validación usuario y password

const usuarioIngresado = "ezequiel.sanroman@icbc.com.ar"
const passwordIngresada = 12345678
const usuario = prompt("Por favor, Ingresa tu usario")
const password = prompt("Por favor, Ingresa tu clave")

if (usuarioIngresado == usuario && passwordIngresada == password) {
    alert("Bienvenido Ezequiel a NMB, tu primer banco 100%On Line")
}
  else {
      alert("¡Datos incorrectos! Por favor, intenta nuevamente...")
 }

//alerta seguridad: validación contraseña

for (let i = 0; i <= passwordIngresada ; i++){
    console.log("contraseña ok");
    
    if (i<7){
    alert ("La contraseña es demasiado corta, por favor, vuelve a ingresarla...");
    }


break;    
}



// //plazo fijo

const n = importePlazo = prompt("Ingrese el capital a simular")

function multiplicar(a, b) {
    return + a * b
}
alert("Estas simulando nueva imposición tradicional a 30 días. Al vencimiento, tendrás un capital más intereses de $" + (multiplicar(n, 1.06) + ". Por favor, aceptar para confirmar la operación."))


