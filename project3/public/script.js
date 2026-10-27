// This is used when a user wants to select a species outside of the options
// JS listens for when the user clicks on other species, and reveals a hidden text box.
const speciesSelect = document.querySelector("#species");
const otherSpeciesField = document.querySelector("#other-species-field");
const otherSpeciesInput = document.querySelector("#other-species");

if (speciesSelect) {
    speciesSelect.addEventListener("change", () => {
    const choseOther = speciesSelect.value === "Other species";
    otherSpeciesField.hidden = !choseOther;
    otherSpeciesInput.required = choseOther;
  });
}

// Select the Home-page bird card and its markers.
const birdCard = document.querySelector("#bird-card");

if (birdCard) {
  const birdMarkers = document.querySelectorAll(".bird-marker");

  birdMarkers.forEach((marker) => {
    marker.addEventListener("mouseenter", () => {
      console.log("bird was hovered over");
      document.querySelector("#card-species").textContent = marker.dataset.species;
      document.querySelector("#card-location").textContent =
        `${marker.dataset.borough} · ${marker.dataset.time}`;
      document.querySelector("#card-status").textContent = marker.dataset.status;
      document.querySelector("#card-observation").textContent =
        marker.dataset.observation || "No observation was added.";

      birdCard.hidden = false;
    });
  });

  // Close the one shared card.
  document.querySelector("#close-card").addEventListener("click", () => {
    birdCard.hidden = true;
  });
}
