// Victoria - script.js

const projectButton = document.getElementById("projectsButton");

projectButton.addEventListener("click", () => {

  document.getElementById("work").scrollIntoView({
    behavior: "smooth"
  });

});

const cards = document.querySelectorAll(".project-card");

cards.forEach((card) => {

  card.addEventListener("mouseenter", () => {
    card.style.boxShadow = "0 0 25px rgba(255,255,255,0.05)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.boxShadow = "none";
  });

});