const btns = document.querySelectorAll(".btn1");
const login = document.querySelector(".login");
const btnOut = document.querySelector(".btn-out");

const signIn = () => {
  console.log("klik");
  login.style.display = "block";
  window.style.backgroundColor = "black";
};
const close = () => {
  login.style.display = "none";
};

btns.forEach((button) => {
  button.addEventListener("click", signIn);
});
btnOut.addEventListener("click", close);

ScrollReveal({
  reset: false,
  distance: "60px",
  duration: 1000,
  delay: 400,
});

ScrollReveal().reveal(".hero_h1, .hero_p", {
  delay: 700,
  origin: "right",
});
ScrollReveal().reveal(".offer_animation", {
  delay: 700,
  origin: "bottom",
  interval: 400,
});
