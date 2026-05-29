/*Det är en funktion som körs när man klickar på skicka knappen och det tar det som finns i textfältet och sparar den i variabeln "meddelande" och sen visar den på skärmen med Din meddelande: .Den använder sig av textContent för att göra det till text.*/
function skicka() {
  let meddelande = document.getElementById("Meddelande").value;
  document.getElementById("resultat").textContent =
    "Din meddelande: " + meddelande;
}
