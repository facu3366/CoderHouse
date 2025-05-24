let carrito = 0;
let listaDeCompra = [];

let usuario = prompt('Por favor, ingrese su nombre');
console.log("El usuario ingresó: " + usuario);

let opcion;

do {
  opcion = prompt(
    'Bienvenido ' + usuario + ',\n\n' +
    'Por favor ingrese la opción que desea:\n' +
    '1. Ver catálogo\n' +
    '2. Ver total del carrito\n' +
    '3. Salir'
  );

  switch (opcion) {
    case '1':
      let eleccion = prompt(
        "Catálogo:\n" +
        "1. Remera - $5000\n" +
        "2. Buzo - $12000\n" +
        "3. Pantalón - $20000\n\n" +
        "Ingrese el número del producto que desea agregar al carrito:"
      );

      switch (eleccion) {
        case '1':
          carrito += 5000;
          listaDeCompra.push('Remera');
          alert("Remera agregada al carrito.");
          break;
        case '2':
          carrito += 12000;
          listaDeCompra.push('Buzo');
          alert("Buzo agregado al carrito.");
          break;
        case '3':
          carrito += 20000;
          listaDeCompra.push('Pantalon')
          alert("Pantalón agregado al carrito.");
          break;
        default:
          alert("Opción de producto no válida.");
          break;
      }
      break;

    case '2':
        alert("Total en el carrito: $" + carrito +
            "\nSu lista de compra es: " + listaDeCompra.join('\n-'));
        break;

    case '3':
      alert("Gracias por visitar, ¡hasta luego!");
      break;

    default:
      alert("Opción no válida, por favor intente de nuevo.");
      break;
  }
} while (opcion !== '3');
