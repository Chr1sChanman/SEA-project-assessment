const originalNeighborhoodData = [
  {
    "name": "CSU Long Beach",
    "safetyRating": 6,
    "crimeRate": {
      "violentCrime": 2,
      "propertyCrime": 5,
      "overallCrime": 4
    },
    "mainCrimeType": "Theft and Larceny",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/c/c3/Walter_Pyramid.jpg"
  },
  {
    "name": "Belmont Shore",
    "safetyRating": 6,
    "crimeRate": {
      "violentCrime": 3,
      "propertyCrime": 6,
      "overallCrime": 5
    },
    "mainCrimeType": "Theft, particularly from vehicles",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/f/f5/Belmont_Shore_and_Belmont_Heights_in_Long_Beach_California.JPG"
  },
  {
    "name": "Rose Park",
    "safetyRating": 4,
    "crimeRate": {
      "violentCrime": 6,
      "propertyCrime": 7,
      "overallCrime": 6
    },
    "mainCrimeType": "Theft and Larceny",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/5/54/Rose_Park%2C_Long_Beach_airview.jpg"
  },
  {
    "name": "Hellman",
    "safetyRating": 1,
    "crimeRate": {
      "violentCrime": 9,
      "propertyCrime": 8,
      "overallCrime": 9
    },
    "mainCrimeType": "Assault and Theft", 
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/d/d4/Hellman_Neighborhood_Long_Beach_California.JPG"
  },
  {
    "name": "Peninsula",
    "safetyRating": 8,
    "crimeRate": {
      "violentCrime": 1,
      "propertyCrime": 3,
      "overallCrime": 2
    },
    "mainCrimeType": "Theft and Larceny",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/d/db/Breakwater_break1_new%28USGS%29.jpg"
  },
  {
    "name": "Alamitos Beach",
    "safetyRating": 4,
    "crimeRate": {
      "violentCrime": 5,
      "propertyCrime": 7,
      "overallCrime": 6
    },
    "mainCrimeType": "Theft and Larceny",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/0/02/Alamitos_Beach_Long_Beach_California.jpg"
  },
  {
    "name": "Bluff Park",
    "safetyRating": 8,
    "crimeRate": {
      "violentCrime": 1,
      "propertyCrime": 2,
      "overallCrime": 2
    },
    "mainCrimeType": "Theft and Larceny",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/6/6d/Bluff_Park_and_Bluff_Heights_Long_Beach_California_looking_SW.JPG"
  },
  {
    "name": "Cambodia Town",
    "safetyRating": 4,
    "crimeRate": {
      "violentCrime": 6,
      "propertyCrime": 7,
      "overallCrime": 7
    },
    "mainCrimeType": "Property crime",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/5/52/Latino-Cambodian_Business_Corrdidor.jpg"
  },
  {
    "name": "Willmore",
    "safetyRating": 3,
    "crimeRate": {
      "violentCrime": 6,
      "propertyCrime": 7,
      "overallCrime": 7
    },
    "mainCrimeType": "Theft and Larceny",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/e/e8/Downtown_Long_Beach_California_Aerial.jpg"
  },
  {
    "name": "Naples",
    "safetyRating": 7,
    "crimeRate": {
      "violentCrime": 2,
      "propertyCrime": 4,
      "overallCrime": 3
    },
    "mainCrimeType": "Theft and Larceny",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/c/c8/Belmont_Park-Naples-Peninsula_Long_Beach_California.JPG"
  }
];

let displayedNeighborhoodData = [...originalNeighborhoodData];

function showCards() {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = ""; 
  const templateCard = document.querySelector(".card");

  if (!templateCard) {
      console.error("Template card element with class '.card' not found!");
      cardContainer.innerHTML = "<p>Error: Card template not found.</p>";
      return; 
  }

  for (let i = 0; i < displayedNeighborhoodData.length; i++) {
    let neighborhood = displayedNeighborhoodData[i];

    const nextCard = templateCard.cloneNode(true); 
    editCardContent(nextCard, neighborhood); 
    cardContainer.appendChild(nextCard); 
  }
}

function editCardContent(card, neighborhood) {
  card.style.display = "block"; 

  const cardHeader = card.querySelector("h2");
  if (cardHeader) cardHeader.textContent = neighborhood.name;
  else console.warn("Card header (h2) not found in template for:", neighborhood.name);


  const cardImage = card.querySelector("img");
  if (cardImage) {
      cardImage.src = neighborhood.imageUrl;
      cardImage.alt = neighborhood.name + " Image";
  } else {
      console.warn("Card image (img) not found in template for:", neighborhood.name);
  }

  const cardList = card.querySelector("ul");
  if (cardList) {
      cardList.innerHTML = ""; 

      const safetyRate = document.createElement("li");
      safetyRate.textContent = `Safety Rating: ${neighborhood.safetyRating}/10`;
      cardList.appendChild(safetyRate);

      const oCrimeList = document.createElement("li");
      oCrimeList.textContent = `Overall Crime: ${neighborhood.crimeRate.overallCrime}/10`;
      cardList.appendChild(oCrimeList);

      const vCrimeList = document.createElement("li");
      vCrimeList.textContent = `Violent Crime: ${neighborhood.crimeRate.violentCrime}/10`;
      cardList.appendChild(vCrimeList);

      const pCrimeList = document.createElement("li");
      pCrimeList.textContent = `Property Crime: ${neighborhood.crimeRate.propertyCrime}/10`;
      cardList.appendChild(pCrimeList);

      const crimeStats = document.createElement("li");
      crimeStats.textContent = `Main Crime Type: ${neighborhood.mainCrimeType}`;
      cardList.appendChild(crimeStats);
  } else {
      console.warn("Card list (ul) not found in template for:", neighborhood.name);
  }
}

document.addEventListener("DOMContentLoaded", showCards);

function quoteAlert() {
  console.log("Button Clicked!");
  alert(
    "It's not cap"
  );
}

function removeLastCard() {
  if (displayedNeighborhoodData.length > 0) {
    displayedNeighborhoodData.pop();
    showCards();
    console.log("Last card removed. Remaining:", displayedNeighborhoodData.length);
  } else {
    console.log("No cards left to remove.");
    alert("No more neighborhoods to remove!");
  }
}

function addNeighborhood() {
  if (displayedNeighborhoodData.length < originalNeighborhoodData.length) {
    const nextIndexToAdd = displayedNeighborhoodData.length;
    const neighborhoodToAdd = originalNeighborhoodData[nextIndexToAdd];

    displayedNeighborhoodData.push(neighborhoodToAdd);
    console.log("Added back:", neighborhoodToAdd.name);
    showCards(); 
  } else {
    console.log("All original neighborhoods shown. Prompting for a new one.");
    alert("All original neighborhoods are displayed, adding new one.");

    const newName = prompt("Enter new neighborhood name:");
    if (newName === null || newName.trim() === "") {
        alert("Adding new neighborhood cancelled or name is empty.");
        return; 
    }

    const safetyRating = parseInt(prompt(`Enter safety rating for ${newName} (1-10):`), 10);
    const violentCrime = parseInt(prompt(`Enter violent crime rate for ${newName} (1-10):`), 10);
    const propertyCrime = parseInt(prompt(`Enter property crime rate for ${newName} (1-10):`), 10);
    const overallCrime = parseInt(prompt(`Enter overall crime rate for ${newName} (1-10):`), 10);
    const mainCrimeType = prompt(`Enter main crime type for ${newName}:`);
    const imageUrl = prompt(`Enter image URL for ${newName} (leave blank for default):`);

    if (isNaN(safetyRating) || isNaN(violentCrime) || isNaN(propertyCrime) || isNaN(overallCrime)) {
        alert("Invalid number entered for ratings/crime rates. Adding cancelled.");
        return;
    }

    const newNeighborhood = {
      name: newName,
      safetyRating: safetyRating || 0,
      crimeRate: {
        violentCrime: violentCrime || 0,
        propertyCrime: propertyCrime || 0,
        overallCrime: overallCrime || 0,
      },
      mainCrimeType: mainCrimeType || "Unknown",
      imageUrl: imageUrl || "https://via.placeholder.com/300x200?text=No+Image",
    };

    originalNeighborhoodData.push(newNeighborhood);
    displayedNeighborhoodData.push(newNeighborhood);

    console.log("Added new neighborhood:", newNeighborhood.name);
    showCards();
  }
}

document.addEventListener("DOMContentLoaded", () => {
    const removeButton = document.getElementById('remove-card-button'); 
    const addButton = document.getElementById('add-card-button'); 
    const quoteButton = document.getElementById('quote-button'); 

    if (removeButton) removeButton.addEventListener('click', removeLastCard);
    if (addButton) addButton.addEventListener('click', addNeighborhood);
    if (quoteButton) quoteButton.addEventListener('click', quoteAlert);

    showCards();
});