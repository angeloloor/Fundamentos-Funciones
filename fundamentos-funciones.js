
//tipos de datos = compuestos

let products = ['Zapatillas de plataforma', 'Zapatillas de deporte', 'Zapatillas de moda']; // Array
 //Array

 let product = {                      //object
    name: "Zapatillas de deporte",
    price: 24.39,
    store: "MAINALUN"
};




//ES6 - operador ternario
let productPrice = 21.71;
let discountThreshold = 25;

productPrice <= discountThreshold ? console.log("El producto está en descuento") : console.log("No hay descuento disponible");

let storeName;
!storeName ? console.log("Falta el nombre de la tienda") : console.log(`Tienda: ${storeName}`);


//------------------------------------------------------------------------

//LOOPS

const productGoals = ["Seleccionar-Producto", "Añadir a la cesta", "Pasar por la caja", "Confirmar pago"];

productGoals.forEach((goal) => { console.log(goal); }); 

let updatedGoals = productGoals.map(goal => goal.toUpperCase()); 

console.log(productGoals);   // loop array original
console.log(updatedGoals);   // loop nuevo array con mayuscula


//---------------------------------------------------------------------------------------------
//Funcion anonima y autoejecutada
(function() {
    console.log("El usuario hizo clic en 'Añadir al carrito'");
})();


