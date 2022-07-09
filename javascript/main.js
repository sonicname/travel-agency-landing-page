window.onload = () => {
  const menu = document.getElementById("menu");
  const listMenu = document.getElementById("menu-list");
  const overlay = document.getElementById("overlay")

  menu.addEventListener("click", e => {
    if(listMenu.classList.contains("active")) {
      listMenu.classList.remove("active");
      overlay.classList.remove("active");
    } else {
      listMenu.classList.add("active");
      overlay.classList.add("active");
    }
  });

  overlay.addEventListener("click", e => {
    if(overlay.classList.contains("active")) {
      listMenu.classList.remove("active");
      overlay.classList.remove("active");
    } else {
      listMenu.classList.add("active");
      overlay.classList.add("active");
    }
  })
}