const neighborhoodData = [
  {
    "name": "Belmont Shore",
    "safetyRating": 6,
    "crimeRate": {
      "violentCrime": 3,
      "propertyCrime": 6,
      "overallCrime": 5
    },
  "mainCrimeType": "Theft, particulary from vehicles",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/f/f5/Belmont_Shore_and_Belmont_Heights_in_Long_Beach_California.JPG"
  },
  {
      "name": "Hellman",
      "safetyRating": 1,
      "crimeRate": {
        "violentCrime": 9,
        "propertyCrime": 8,
        "overallCrime": 9
      },
      "mainCrimeType": "Assult and Theft",
      "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/d/d4/Hellman_Neighborhood_Long_Beach_California.JPG"
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
      "name": "Downtown Long Beach",
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
      "name": "California State University Long Beach",
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
      "name": "Naples",
      "safetyRating": 7,
      "crimeRate": {
        "violentCrime": 2,
        "propertyCrime": 4,
        "overallCrime": 3
      },
      "mainCrimeType": "Theft and Larceny",
      "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/c/c8/Belmont_Park-Naples-Peninsula_Long_Beach_California.JPG"
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
      "name": "Rose Park",
      "safetyRating": 4,
      "crimeRate": {
        "violentCrime": 6,
        "propertyCrime": 7,
        "overallCrime": 6
      },
      "mainCrimeType": "Theft and Larceny",
      "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/5/54/Rose_Park%2C_Long_Beach_airview.jpg"
    }
]

// This function adds cards the page to display the data in the array
function showCards() {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";
  const templateCard = document.querySelector(".card");

  for (let i = 0; i < neighborhoodData.length; i++) {
    let neighborhood = neighborhoodData[i];

    const nextCard = templateCard.cloneNode(true); // Copy the template card
    editCardContent(nextCard, neighborhood); // Edit title and image
    cardContainer.appendChild(nextCard); // Add new card to the container
  }
}

function editCardContent(card, neighborhood) {
  card.style.display = "block";

  const cardHeader = card.querySelector("h2");
  cardHeader.textContent = neighborhood.name;

  const cardImage = card.querySelector("img");
  cardImage.src = neighborhood.imageUrl;
  cardImage.alt = neighborhood.name + " Image";

  const cardList = card.querySelector("ul");
  cardList.innerHTML = "";

  const safetyRate = document.createElement("li");
  safetyRate.textContent = `Safety Rating: ${neighborhood.safetyRating}/10`;
  cardList.appendChild(safetyRate);

  const oCrimeList = document.createElement("li");
  oCrimeList.textContent = `Overall Crime: ${neighborhood.crimeRate.overallCrime}/10`;
  cardList.appendChild(oCrimeList);

  const vCrimeList = document.createElement("li");
  vCrimeList.textContent = `Violet Crime: ${neighborhood.crimeRate.violentCrime}/10`;
  cardList.appendChild(vCrimeList);

  const pCrimeList = document.createElement("li");
  pCrimeList.textContent = `Property Crime: ${neighborhood.crimeRate.propertyCrime}/10`;
  cardList.appendChild(pCrimeList);

  const crimeStats = document.createElement("li");
  crimeStats.textContent = `Main Crime Type: ${neighborhood.mainCrimeType}`;
  cardList.appendChild(crimeStats);

  console.log("new card:", neighborhood.name, "- html: ", card);
}

// This calls the addCards() function when the page is first loaded
document.addEventListener("DOMContentLoaded", showCards);

// Console is located in 'Inspect Element'
function quoteAlert() {
  console.log("Button Clicked!");
  alert(
    "I guess I can kiss heaven goodbye, because it got to be a sin to look this good!"
  );
}

function removeLastCard() {
  if (neighborhoodData.length > 0) {
    neighborhoodData.pop();
    showCards();
  } else {
    console.log("No cards to remove.");
  }
}