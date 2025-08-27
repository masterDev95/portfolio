document.addEventListener("DOMContentLoaded", () => {
  const buttonElement = document.querySelectorAll("button");

  if (buttonElement.length > 0) {
    buttonElement.forEach((element) => {
      element.addEventListener("click", function (e) {
        const ripple = document.createElement("span");
        ripple.classList.add("ripple");

        // Récupère les dimensions du bouton
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX > 0 ? e.clientX - rect.left : rect.width / 2;
        const y = e.clientY > 0 ? e.clientY - rect.top : rect.height / 2;

        // Positionne le ripple au centre du clic
        ripple.style.left = x + "px";
        ripple.style.top = y + "px";
        ripple.style.width = size + "px";
        ripple.style.height = size + "px";

        // Centre le ripple sur le point de clic
        ripple.style.marginLeft = -size / 2 + "px";
        ripple.style.marginTop = -size / 2 + "px";

        this.appendChild(ripple);

        // Supprime le ripple après l'animation
        setTimeout(() => {
          ripple.remove();
        }, 600);
      });
    });
  }
});
