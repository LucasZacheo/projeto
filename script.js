function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")
  const descricao = document.querySelector("profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./fotos/oculosescuro.png")
    descricao.setAttribute(
      "alt",
      "Foto de Lucas Zacheo, usando oculos escuros, fazendo joinha"
    )
  } else {
    img.setAttribute("src", "./fotos/livam.png")
    descricao.setAttribute(
      "alt",
      "Foto de Lucas Zacheo, de óculos juliete, usando um moletom roxo."
    )
  }
}
