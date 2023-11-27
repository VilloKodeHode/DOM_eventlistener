// Ekstra greier som er komplisert, men kjekt å kunne siden:

// Først "fanger" vi elementene i html dokumentet vi vil bruke i javascripten vår
// I dette tilfelle er det bare et element:
const movable = document.getElementById("movable");

// vi definerer alle variabler.
// siden vi skal lage en boks som skal kunne bevege på seg må vi definere:
// posisjon på X-aksen:
let posX = 0;
// posisjon på Y-aksen:
let posY = 0;
// hvor mye den skal flytte på seg hver gang noe skjer:
const moveAmount = 10;

// når vi i tillegg vil at det skal være mulig å endre på størrelsen må vi legge til mer
// vi må lage en variabel for størrelse på elementet:
let currentSize = 50;
// variabel for å si hvor mye større elementet skal bli hver gang noe skjer:
const sizeIncrement = 10;

// Vi lager en funksjon som oppdaterer elementet hver gang noe skjer:
function updateElement() {
// Her oppdaterer vi posisjonen på elementet:
movable.style.transform = `translate(${posX}px, ${posY}px)`
// setningen over betyr dette når koden kjøres første gang:
// `translate (0px, 0px)`
// de 2 linjene under øker eller minsker størrelsen på elementet:
movable.style.width = `${currentSize}px`;
movable.style.height = `${currentSize}px`;
}


// Vi må nå lage hva som skal skje for at elementet endrer på seg.
// Vi lager en eventlistener som sier at ved keydown (knappetrykk) skal en funksjon kjøres:
// vi må ha et parameter fordi vi vil fange opp .key fra de forskjellig tastetrykkene
document.addEventListener("keydown", function(e) {
    // keydown har en property som heter key og vi ser om (knappen man trykker på).key er det samme som "ArrowUp" (som refererer til piltast opp) 
if  (e.key === "ArrowUp") {
    // hvis koden over stemmer kjøres koden under
    // posisjon Y blir oppdatert med å flytte elementet 10px oppover (translate(0px,-10px))
posY -= moveAmount; 
} else if (e.key === "ArrowDown") {
    // posisjon Y blir oppdatert med å flytte elementet 10px nedover (translate(0px,10px))
    posY += moveAmount;
} else if (e.key === "ArrowLeft") {
    // posisjon Y blir oppdatert med å flytte elementet 10px til venstre (translate(-10px,0px))
    posX -= moveAmount;
} else if (e.key === "ArrowRight") {
    // posisjon Y blir oppdatert med å flytte elementet 10px til venstre (translate(10px,0px))
    posX += moveAmount;
} else if (e.key === "Enter") {
    // currentSize blir oppdatert med å øke størrelsen på elementet med 10px (width: "10px") Økes med 10px hver gang knappen blir trykket på
    currentSize += sizeIncrement;
} else if (e.key === "Backspace") {
    // currentSize blir oppdatert med å minske størrelsen på elementet med 10px (width: "-10px") Minskes med 10px hver gang knappen blir trykket på
    currentSize -= sizeIncrement;
} 

//! Hvis man vil bruke AWSD istedet:
// if  (e.key === "W" || e.key === "w") {
//     posY -= moveAmount; 
//     } else if (e.key === "S" || e.key === "s") {
//         posY += moveAmount;
//     } else if (e.key === "A" || e.key === "a") {
//         posX -= moveAmount;
//     } else if (e.key === "D" || e.key === "d") {
//         posX += moveAmount;
//     } else if (e.key === "Enter") {
//         currentSize += sizeIncrement;
//     } else if (e.key === "Backspace") {
//         currentSize -= sizeIncrement;
//     } 
updateElement();

})





