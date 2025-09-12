$(document).ready(function () {
  $("#autoWidth").lightSlider({
    adaptiveHeight: true,
    auto: true,
    item: 1,
    slideMargin: 0,
    loop: true,
  });
});

const navbarHome = document.querySelector(".navbarHome");

window.addEventListener("scroll", () => {
  const post = window.scrollY > 100;

  navbarHome.classList.toggle("scroll", post);
});

// menyala
const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((link) => {
  link.addEventListener("mouseenter", function () {
    setTimeout(() => this.classList.add("active"), 300); // Delay 300ms sebelum menyala
  });

  link.addEventListener("mouseleave", function () {
    setTimeout(() => this.classList.remove("active"), 500); // Tetap menyala 500ms setelah keluar
  });
});
