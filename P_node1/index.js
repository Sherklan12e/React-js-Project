const sumr = require('./sumar')
function  jugar(datos){
    setTimeout(() => {
        const dato = {nombre:"juan",eda:23}
        datos(dato);
    })
}

function procesar(da){
    console.log(da)
}

jugar(procesar);
console.log(sumr(2,2))

let a = parseInt("23.22");
console.log(typeof(a))
