// Je séléctionne et je stocke
// Icone contient le premier élément <i> du code HTML
const icone = document.querySelector("i");

// Je soumets l'icone à une action au clic
icone.addEventListener("click", function () {
  // J'ajoute la classe "fa-face-smile-wink" et je désactive la classe "fa-face-meh-blank"
  icone.classList.add("fa-face-smile-wink");
  icone.classList.toggle("fa-face-meh-blank");
  icone.classList.toggle("happy");
});
