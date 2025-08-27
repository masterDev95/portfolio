const skills = [
  "Software Engineer",
  "Développeur Web",
  "Développeur Mobile",
  "Développeur jeux vidéo",
];

let skillIndex = 0;
let currentSkill = skills[skillIndex];

const changeSkill = (heroTitleElement) => {
  skillIndex++;

  if (skillIndex >= skills.length) {
    skillIndex = 0;
  }

  heroTitleElement.classList.add("fade");

  setTimeout(() => {
    currentSkill = skills[skillIndex];
    heroTitleElement.textContent = currentSkill;
    heroTitleElement.classList.remove("fade");
  }, 250);
};

const onResize = () => {
  const knowMoreButtonContainer = document.querySelector("#know-more-button");
  const knowMoreButtonElement = knowMoreButtonContainer.querySelector("button");

  if (innerWidth <= 540) {
    knowMoreButtonElement.classList = "button-filled-small expanded";
  } else {
    knowMoreButtonElement.classList = "button-filled-medium expanded";
  }
};

document.addEventListener("DOMContentLoaded", (_) => {
  const heroTitleElement = document.querySelectorAll(".hero-title").item(0);

  setInterval(() => {
    changeSkill(heroTitleElement);
  }, 1500);

  onresize = onResize;
  onResize();
});
