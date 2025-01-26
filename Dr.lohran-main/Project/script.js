function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  // Pegar Img
  const img = document.querySelector("#profile img")
  //SUBISTITUIR A IMG
  if (html.classList.contains("light")) {
    // SE TIVER SEM O LIGHT MODE, ADC A IMG
    img.setAttribute("src", "./assets/avatarlight.png")
  } else {
    img.setAttribute("src", "./assets/avatarDark.png")
  }
}
