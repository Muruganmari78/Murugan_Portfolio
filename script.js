const sections = document.querySelectorAll(".section");

const revealSection = () => {
  sections.forEach(section => {
    const top = section.getBoundingClientRect().top;
    const trigger = window.innerHeight - 120;
    if (top < trigger) {
      section.classList.add("show");
    }
  });
};

window.addEventListener("scroll", revealSection);
window.addEventListener("load", revealSection);
