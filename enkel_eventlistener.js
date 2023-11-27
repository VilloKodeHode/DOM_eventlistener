// Viktig å kunne:
// Først "fanger" vi elementene i html dokumentet vi vil bruke i javascripten vår:
const toggleButton = document.getElementById("toggleButton")
const hiddenDiv = document.getElementById("hiddenDiv")

// Vi lager en eventlistener som aktiviseres når man trykker på elementet som har id="toggleButton"
// Når elementet blir trykket på vil funksjonen kjøres:
toggleButton.addEventListener("click", function() {
// vi spørr først om hiddenDiv har en class som sier at display: "none".
// vi sier "||" i tillegg for å fange opp om ikke display har noen verdi også (display === "")
if (hiddenDiv.style.display === "none" || hiddenDiv.style.display === "") {
    // Hvis en av conditionalene over stemmer vil koden under kjøres
    // koden sier at elementet skal få display: "block" (gjør den synlig)
hiddenDiv.style.display = "block"
// Hvis ingen av conditionalene over stemmer vil koden under kjøres istedet:
} else {
    // elementet blir igjen skjult.
    hiddenDiv.style.display = "none"
}
})