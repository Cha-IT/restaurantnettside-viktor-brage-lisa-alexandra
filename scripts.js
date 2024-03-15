console.log("test")
        // Import JSON data from separate file
        import retterData from "./MENY.json" assert {type: "json"};
    
        // Select the existing "Meny" element from the HTML file
        const menyElement = document.querySelector("#Meny .menyPriser");
    
        // Loop through the imported JSON data and create HTML elements dynamically
        retterData.forEach(function(rett) {
            
            const rettDiv = document.createElement("div");

            rettDiv.innerHTML = `
                <h2>${rett.Navn}</h2>
                <p>${rett.Beskrivelse}</p>
                <p>${rett.Pris}</p>
                <p>${rett.Biter}</p>`;
            menyElement.appendChild(rettDiv);

            const img = document.createElement("img");
            img.setAttribute("src", rett.Bilde);
            img.setAttribute("width", "200px");
            rettDiv.appendChild(img);
        });



