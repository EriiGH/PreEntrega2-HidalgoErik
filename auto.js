//----CALCULADOR DE VENTAS DE AUTOS----



alert("Bienvenido/a. \n\n Aquí podras calcular y llevar el control autos vendidos");


class FechaDeVenta {
    constructor(fecha, autosVendidos) {
        this.fecha = fecha;
        this.autosVendidos = autosVendidos;
    }
}


const diasDeVentas = [];



const pregunta = parseFloat(prompt("Quieres ingresar una nueva venta? \n\n 1. Si \n 2.No"))
if (pregunta == "1") {

    let agregarNuevaVenta = true
    while (agregarNuevaVenta) {

        const nuevoDia = nuevaEntrada();



        diasDeVentas.push(nuevoDia);

        const pregunta = prompt("Deseas agregar nueva venta? \n\n 1. Si \n 2.No")
        if (pregunta == "1") {
            agregarNuevaVenta = true;
        } else {
            agregarNuevaVenta = false;

        }

    }


    let totalAutos = 0;
    const ventaDeAutos = diasDeVentas.map(h => h.autosVendidos)


    for (const i of ventaDeAutos) {
        totalAutos = totalAutos + i
    }


    alert("Este mes vendiste " + totalAutos + " autos")


    const precioAutos = parseFloat(prompt("Cual es el precio aproximado de cada auto?"))


    function calculartotalVentas(autos, precio) {
        const totalVentas = autos * precio;
        return totalVentas;
    }

    function nuevaEntrada() {
        const fecha = prompt("Ingrese fecha de venta del automovil");
        const autosVendidos = parseFloat(prompt("Ingrese cantidad de autos vendidos"));
        alert("Entrada cargada")
        return new FechaDeVenta(fecha, autosVendidos);
    }

    alert("Vendiste autos por un aproximado de  $" + calculartotalVentas(totalAutos, precioAutos))
}
else if(pregunta == 2){alert("Esta bien, hasta luego!")}


else{alert("Perdon, no pude entender tu respuesta \n\nPorfavor, reinicie el programa")}

