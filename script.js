// 1. Modificar el primer "Hola Mundo" para que diga "Adiós"
document.querySelector("h1").textContent = "Adiós";

// 2. Cambiar el color de la fuente de un encabezado a naranja
// (por ejemplo, el segundo h1)
document.querySelectorAll("h1")[1].style.color = "orange";

// 3. Crear un encabezado clickeable que cambie a marrón
const clickableHeader = document.createElement("h1");
clickableHeader.textContent = "Haz clic aquí para cambiar a marrón";
document.body.appendChild(clickableHeader);

clickableHeader.addEventListener("click", function() {
  clickableHeader.style.color = "brown";
});
