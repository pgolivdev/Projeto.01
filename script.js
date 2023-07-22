function toggleMode() {
  const html = document.documentElement

  html.classList.toggle("light")

  //pegar a tag img
  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    //se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/assets/avatarpg-light.png")
    img.setAttribute(
      "alt",
      "Foto de homem bonito usando óculos escuros na Europa"
    )
  } else {
    img.setAttribute("src", "./assets/assets/avatarpg.png")
    img.setAttribute("alt", "Futuro do homem bonito")
  }
}
