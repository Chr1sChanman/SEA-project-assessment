// Unchanging data, increased from previous list of strings
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

// "Shallow copying" original array to use dynamically, similar to Python's []
let displayedNeighborhoodData = [...originalNeighborhoodData];

// Function to display cards on page like original js
function showCards() {
  const cardContainer = document.getElementById("card-container");    // Accesses HTML element to edit
  cardContainer.innerHTML = "";                                       // Clears out template content in card-container
  const templateCard = document.querySelector(".card");               // Accesses HTML element .card to be copied for each neighborhood

  // Edge case to make sure the template card exists, error message displays both on page and console
  if (!templateCard) {
      console.error("Template card element with class '.card' not found.");
      cardContainer.innerHTML = "<p>Error: Card template not found.</p>";
      return; 
  }

  // Looping through displayed array
  for (let i = 0; i < displayedNeighborhoodData.length; i++) {
    let neighborhood = displayedNeighborhoodData[i];

    const nextCard = templateCard.cloneNode(true);    // Copies template card for each neighborhood
    editCardContent(nextCard, neighborhood);          // Call to function editCardContent
    cardContainer.appendChild(nextCard);              // Adds the card as a child element in card-container to be displayed
  }
}

// Function similar to original js, callling to HTML element and object data for a neighborhood to display
function editCardContent(card, neighborhood) {
  card.style.display = "block";   // To ensure card is visible

  // Check to make sure HTML structure contains the header for neighborhood name
  const cardHeader = card.querySelector("h2");
  if (cardHeader) cardHeader.textContent = neighborhood.name;
  else console.warn("Card header (h2) not found in template for:", neighborhood.name);

  // Same as above but for the image instead
  const cardImage = card.querySelector("img");
  if (cardImage) {
      cardImage.src = neighborhood.imageUrl;
      cardImage.alt = neighborhood.name + " Image";
  } else {
      console.warn("Card image (img) not found in template for:", neighborhood.name);
  }

  // Same check as previous two but for the statistics portion of the HTML
  // Altered portion of original js code to make bullet points functional
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

// Slight modification of original 'getQuote' button to show set statistics about crime
function getStatistics() {
  console.log("Button Clicked.");
  alert(
    "There are no areas where violent crime exceeds property crime (which is a good thing).\n\nThe neighborhoods with the highest rates of violent crime are as follows: Downtown Long Beach, Wilington, Poly High District, and Wrigley"
  );
}

// Modification of removeLastCard() to account for dynamic array
function removeNeighborhood() {
  if (displayedNeighborhoodData.length > 0) {
    displayedNeighborhoodData.pop();
    showCards();
    console.log("Last card removed. Remaining:", displayedNeighborhoodData.length);
  } else {
    console.log("No cards left to remove.");
    alert("No more neighborhoods to remove.");
  }
}

// Function to add existing or new neighborhoods
function addNeighborhood() {
  if (displayedNeighborhoodData.length < originalNeighborhoodData.length) {
    const nextIndexToAdd = displayedNeighborhoodData.length;                  // Takes array length of displayed array
    const neighborhoodToAdd = originalNeighborhoodData[nextIndexToAdd];       // Returns index of original array to be added according to displayed array length

    // Adds back and logs neighborhood from array that was added back
    displayedNeighborhoodData.push(neighborhoodToAdd);
    console.log("Added back:", neighborhoodToAdd.name);
    showCards(); 
  } else {  // Condition where if all neighborhoods from original list was added, user can create a new one
    console.log("All original neighborhoods currently displayed. Adding new neighborhood.");
    const wantsToAdd = window.confirm("All original neighborhoods are displayed. Add a neighborhood?"); 

    // Code for prompting user to enter information about new neighborhood if adding one
    if (wantsToAdd) {
      console.log("Adding a new neighborhood.");
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

      // Mainly a check for mainCrimeType and imageUrl if inputs were left empty to allow placeholder values
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

      // Pushes new neighborhood to both arrays for the current session to be added and removed according to user
      originalNeighborhoodData.push(newNeighborhood);
      displayedNeighborhoodData.push(newNeighborhood);

      console.log("Added new neighborhood:", newNeighborhood.name);
      showCards();

    } else {
      console.log("Action cancelled.");
    }
  }
}

// Event listener from original js to display card content
document.addEventListener("DOMContentLoaded", showCards);