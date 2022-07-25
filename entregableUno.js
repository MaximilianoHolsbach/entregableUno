
//BLOQUE DE VARIABLES//

let moneda, montoIngresar, plazo, nombre, apellido, añoNacimiento, filtroEdad, suGanancia 
const tna = 53
const tnaD = 5
const añoActual = 2022 
const montoFiltro = 1500

//BlOQUE DE FUNCIONES//

const resta = (a, b) => a - b // Servira para comprobar la mayoria de edad.

const ganancia = (a, b = 0, c) => (a * (b / 100) * c) / 365 //Sirve para calcular la ganancia de ambas monedas.

//BLOQUE DE DATOS PERSONALES//

do{
    nombre = prompt("Ingrese su Nombre: ")
    apellido = prompt("Ingrese su apellido: ")
    if(!isNaN(nombre)||!isNaN(apellido)){
        alert("Ingrese datos validos")
        continue
    }
    añoNacimiento = parseInt(prompt("Ingrese su año de nacimiento: "))
    if (isNaN(añoNacimiento)){
        alert("Ingrese un número")
        continue
    }
    filtroEdad = resta(añoActual, añoNacimiento)
    if(filtroEdad < 18){
        alert("Usted no puede realizar esta operación")
        continue
    }
}while(!isNaN(nombre)||!isNaN(apellido)||(filtroEdad < 18 || isNaN(añoNacimiento)))

//BLOQUE DE DATOS ECONOMICOS//

do{
    moneda = prompt("Desea operar en pesos o dolares: ")
    if(moneda != "pesos" && moneda != "dolares"){
        alert("Ingrese pesos o dolares")
        continue
    }
    montoIngresar = parseFloat(prompt("Ingrese la suma de dinero a invertir: "))
    if (isNaN(montoIngresar) || montoIngresar < montoFiltro){
        alert("Ingrese una cifra numérica o mayor a $ 1500")
        continue
    }
    plazo = parseInt(prompt("Ingrese el plazo de 30 a 365 días: "))
    if (isNaN(plazo) || plazo < 30 || plazo > 365){
        alert("Ingrese un plazo valido")
        continue
    }
}while((moneda != "pesos" && moneda != "dolares" || isNaN(montoIngresar) || montoIngresar < montoFiltro ||  plazo < 30 || plazo > 365))

//BLOQUE DE CALCULOS//

switch (moneda){
    case "dolares" : 
        suGanancia = ganancia(montoIngresar, tnaD, plazo)
        document.write(`<h2 style="font-size:25px;">Su ganancia en dolares es: ${suGanancia}</h2>`)
    break
    case "pesos" :
        suGanancia = ganancia(montoIngresar, tna, plazo)
        document.write(`<h2 style="font-size:25px;">Su ganancia en pesos es: ${suGanancia}</h2>`)
    break
}