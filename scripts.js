// Import JSON data from separate file
import retterData from "./MENY.json" assert {type: "json"};

// Select the existing "Meny" element from the HTML file
const menyElement = document.querySelector(".menyPriser");

// Loop through the imported JSON data and create HTML elements dynamically
retterData.forEach(function(rett) {

    const rettDiv = document.createElement("div");

    rettDiv.innerHTML = `
        <h2>${rett.Navn}</h2>
        <p>${rett.Beskrivelse}</p>
        <p>${rett.Pris}</p>
        <p>${rett.Biter}</p>`;
    menyElement.appendChild(rettDiv);
});



