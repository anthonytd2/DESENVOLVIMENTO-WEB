const inputElement = document.getElementById("inputTarefa");
const botaoElement = document.getElementById("btnAdicionar");
const listaElement = document.getElementById("listaTarefas");

botaoElement.addEventListener("click", function () {
  const textoDaTarefa = inputElement.value;

  if (textoDaTarefa !== "") {
    const novoItem = document.createElement("li");
    novoItem.textContent = textoDaTarefa;
    listaElement.appendChild(novoItem);
    inputElement.value = "";
  }
});

listaElement.addEventListener("click", function (evento) {
  if (evento.target.tagName === "LI") {
    evento.target.remove();
  }
});
