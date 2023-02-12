const body = document.body;
// const nav = document.querySelector(".header nav");
// const logo = document.querySelector(".header .header-logo-container");
// const dropdown_menu = document.querySelector("#menu-dropdown");
const scrollUp = "scroll-up";
const scrollDown = "scroll-down";
let lastScroll = 0;

// Evento para que al hacer scroll hacia arriba, aparezca el header; y al hacer scroll hacia abajo, desaparezca el header. Nota: El header debe tener position sticky.
window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll == 0) {
    body.classList.remove(scrollUp);
    return;
  }
  
  if (currentScroll > lastScroll && !body.classList.contains(scrollDown)) {
    // down 
    body.classList.remove(scrollUp);
    body.classList.add(scrollDown);
  } else if (currentScroll < lastScroll && body.classList.contains(scrollDown)) {
    // up 
    body.classList.remove(scrollDown);
    body.classList.add(scrollUp);
  }
  lastScroll = currentScroll;
});