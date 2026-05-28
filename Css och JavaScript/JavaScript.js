/*den här hämtar HTML-elementet som har id "lungs" och sparar det i variabeln lungs*/
const lungs = document.getElementById("lungs");

/*Den här funktionen används när man trycker på knappen "Inhale".Den tar bort den CSS-klassen small från lungbilden så att bilden inte längre är liten sedan lägger den till CSS-klassen big vilket gör att lungorna blir större*/
function inhale() {
  lungs.classList.remove("small");
  lungs.classList.add("big");
}

/*Den här funktionen används när man trycker på knappen "Exhale".Den tar bort den CSS-klassen big från lungbilden så att bilden inte längre är stor sedan lägger den till CSS-klassen small vilket gör att lungorna blir mindre*/
function exhale() {
  lungs.classList.remove("big");
  lungs.classList.add("small");
}
