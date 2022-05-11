//Objetos con Class - constructor

class    Producto{
    constructor (id, nombre, tipo, medida, precio) {
        this.id = id;
        this.nombre = nombre.toUpperCase();
        this.tipo = tipo;
        this.medida = medida;
        this.precio = parseFloat(precio);
        this.vendido = false;
        this.detalle = function(){console.log(this.nombre + " " + this.medida + "ml $" + this.precio)}
    }
    sumaIva(){
        this.precio = this.precio * 1.21;
    }
    vender(){
        this.vendido = true;
    }
    } 
    
    const producto1 = new Producto ("id:001","Coca-Cola Original","Gaseosas", 2.25, 350);
    const producto2 = new Producto ("id:002","Sprite Original","Gaseosas",2.25, 350);
    const producto3 = new Producto ("id:003","Coca-Cola Zero","Gaseosas",2.25, 350);
    const producto4 = new Producto ("id:005","Andes Miel","Cervezas",473,200);
    const producto5 = new Producto ("id:006","Andes Negra","Cervezas",473,200);
    const producto6 = new Producto ("id:007","Andes Roja","Cervezas",473,200);
    const producto7 = new Producto ("id:004","Andes Rubia","Cervezas",473,200);
    const producto8 = new Producto ("id:008","Andes IPA","Cervezas",473,200);
    const producto9 = new Producto ("id:009","Brahma","Cervezas",473,170);
    const producto10 = new Producto ("id:010","Fernet Branca","Aperitivos",750,950);
    const producto11 = new Producto ("id:011", "Fernet Branca","Aperitivos",1000, 1200);
    const producto12 = new Producto ("id:012", "Mumm","Espumantes", 750,680);
    const producto13 = new Producto ("id:013","Novecento","Espumantes", 750,350);
    const producto14 = new Producto ("id:014","Campari","Aperitivos",750,920);
    const producto15 = new Producto ("id:015","Gancia","Aperitivos",980,600);
    
    
    producto1.detalle();
    producto1.sumaIva();
    producto1.detalle();
    producto2.sumaIva();
    producto3.sumaIva();

    
    const gaseosas = [producto1,producto2,producto3];    
    console.log (gaseosas.length);
    const cervezas = [producto4,producto5,producto6,producto7,producto8,producto9];
    console.log (cervezas.length);
    const espumantes = [producto12,producto13];
    console.log( espumantes.length);
    const aperitivos = [producto10,producto11,producto14];
    console.log( aperitivos.length);
    const rubias = cervezas.slice(3, 6);
    
    let nombreIngresado = prompt ("Ingresa tu nombre")

function saludarCliente(){
    alert (" Bienvenido " + nombreIngresado + " a Alcoholemia Delivery")
    }
        
    saludarCliente()
    
    let confirmarEdad = parseInt(prompt("Ingrese tu edad"))
    if (confirmarEdad <18)
    {
        alert("Recuerde que tienes que ser mayor de edad");
        
    }
    else {alert("Beber con responsabilidad.");
}

let categorias = alert("Tenemos estas categorias disponibles \n" + " 1. Gaseosas \n" + " 2. Cervezas \n" + " 3. Espumantes \n" + " 4. Aperitivos \n");
    
let seleccion = prompt ("Elige una categoria");

 if (seleccion = gaseosas){
alert (producto1.detalle() +"\n",producto2.detalle() +"\n",producto3.detalle())    
};

let resultado = 0;

function carrito (articulo1, articulo2,){
    return articulo1 + articulo2;
}

resultado = carrito(producto1.precio, producto2.precio);
alert("El total de tu compra es de $" +resultado);










/*


     function seleccionCliente(){
        switch (seleccion){
            case "Gaseosas":
            console.log (arrayGaseosas.join("*"));
            break;
            case "Cervezas":
            console.log (arrayCervezas.toString());
            break;
            case "Espumantes":
            console.log (arrayEspumantes.toString());
            break;
            case "Aperitivos":
            console.log (arrayAperitivos.toString());
            break;
            default:
            console.log ("Elige una opción valida");
            break;
    
    }
    }
    seleccionCliente();

*/

