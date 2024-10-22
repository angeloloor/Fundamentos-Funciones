//CALLBACK
function obtenerProductos(callback) {
  console.log("Obteniendo productos del servidor...");
  setTimeout(() => {
    const productos = ["Laptop", "Smartphone", "Audífonos"];
    console.log("Productos obtenidos:", productos);
    callback(productos);
  }, 1000); 
}
function mostrarProductos(productos) {
  console.log("Mostrando productos en la página:");
  productos.forEach(producto => console.log(producto));
}
obtenerProductos(mostrarProductos);


// CALLBACK HELL

function obtenerProductos(callback) {
    console.log("Obteniendo productos...");
    setTimeout(() => {
      const productos = ["Laptop", "Smartphone", "Audífonos"];
      console.log("Productos obtenidos:", productos);
      callback(productos);
    }, 1000);
  }
  
  function obtenerDetallesUsuario(productos, callback) {
    console.log("Obteniendo detalles del usuario...");
    setTimeout(() => {
      const usuario = { nombre: "Christian", userId: 123 };
      console.log("Detalles del usuario obtenidos:", usuario);
      callback(productos, usuario);
    }, 1000);
  }
  
  function procesarPago(productos, usuario, callback) {
    console.log("Procesando pago...");
    setTimeout(() => {
      const confirmacionPago = `Pago exitoso para ${usuario.nombre} en ${productos.length} productos.`;
      console.log(confirmacionPago);
      callback(confirmacionPago);
    }, 1000);
  }
    obtenerProductos((productos) => {
    obtenerDetallesUsuario(productos, (productos, usuario) => {
      procesarPago(productos, usuario, (confirmacion) => {
        console.log("Pedido completo:", confirmacion);
      });
    });
  });
  
//Promesas
function obtenerProductos() {
  return new Promise((resolve, reject) => {
    console.log("Obteniendo productos...");
    setTimeout(() => {
      const productos = ["Laptop", "Smartphone", "Audífonos"];
      console.log("Productos obtenidos:", productos);
      resolve(productos);
    }, 1000);
  });
}
function obtenerDetallesUsuario() {
  return new Promise((resolve, reject) => {
    console.log("Obteniendo detalles del usuario...");
    setTimeout(() => {
      const usuario = { nombre: "Christian", userId: 123 };
      console.log("Detalles del usuario obtenidos:", usuario);
      resolve(usuario);
    }, 1000);
  });
}
function procesarPago(productos, usuario) {
  return new Promise((resolve, reject) => {
    console.log("Procesando pago...");
    setTimeout(() => {
      const confirmacionPago = `Pago exitoso para ${usuario.nombre} en ${productos.length} productos.`;
      console.log(confirmacionPago);
      resolve(confirmacionPago);
    }, 1000);
  });
}
obtenerProductos()
  .then(productos => {
    return obtenerDetallesUsuario().then(usuario => {
      return { productos, usuario };
    });
  })
  .then(({ productos, usuario }) => {
    return procesarPago(productos, usuario);
  })
  .then(confirmacion => {
    console.log("Pedido completo:", confirmacion);
  })
  .catch(error => {
    console.error("Algo salió mal:", error);
  });
