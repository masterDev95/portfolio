const skills = [
  "Software Engineer",
  "Développeur Web",
  "Développeur Mobile",
  "Développeur jeux vidéo",
];

let heroTitleElement = document.getElementsByClassName('hero-title').item(0);

document.addEventListener("DOMContentLoaded", (_) => {
    heroTitleElement = document.getElementsByClassName('hero-title').item(0);
    setInterval(() => {
        changeSkill();
    }, 1500);
});

let skillIndex = 0;
let currentSkill = skills[skillIndex];

function changeSkill() {
    skillIndex++;

    if (skillIndex >= skills.length) {
        skillIndex = 0;
    }

    heroTitleElement.classList.add('fade');

    setTimeout(() => {
        currentSkill = skills[skillIndex];
        heroTitleElement.textContent = currentSkill;
        heroTitleElement.classList.remove('fade');
    }, 250);
}
