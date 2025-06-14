let carrito = 0;
let listaDeCompra = JSON.parse(localStorage.getItem("lista")) || [];

window.addEventListener("DOMContentLoaded", () => {
  const btnIniciar = document.getElementById("iniciar");
  const nombreInput = document.getElementById("nombre");

  btnIniciar.addEventListener("click", () => {
    const nombre = nombreInput.value.trim();
    if (nombre) {
      document.getElementById("bienvenida").textContent = `Bienvenido, ${nombre}`;
      document.getElementById("user-section").style.display = "none";
      document.getElementById("app").style.display = "block";
      actualizarCarrito();
    }
  });

  document.querySelectorAll(".catalogo button").forEach(btn => {
    btn.addEventListener("click", () => {
      const producto = btn.getAttribute("data-producto");
      const precio = parseInt(btn.getAttribute("data-precio"));
      carrito += precio;
      listaDeCompra.push(producto);
      localStorage.setItem("lista", JSON.stringify(listaDeCompra));
      actualizarCarrito();
    });
  });
});

function actualizarCarrito() {
  document.getElementById("total").textContent = "Total: $" + carrito;
  const listaUl = document.getElementById("lista");
  listaUl.innerHTML = "";
  listaDeCompra.forEach(prod => {
    const li = document.createElement("li");
    li.textContent = prod;
    listaUl.appendChild(li);
  });
}
document.getElementById("limpiar").addEventListener("click", function () {
  carrito = 0;
  listaDeCompra = [];
  localStorage.removeItem("lista");
  actualizarCarrito();
});

