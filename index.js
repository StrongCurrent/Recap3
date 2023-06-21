import { createCharacterCard } from "./components/card/card.js";

const url = "https://rickandmortyapi.com/api/character";
const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

// States
const maxPage = 1;
const page = 1;
const searchQuery = "";

// Fetch Characters Api
async function fetchCharacters() {
  cardContainer.innerHTML = "";
  const response = await fetch("https://rickandmortyapi.com/api/character");
  const allCharacters = await response.json();

  const characters = allCharacters.results;
  console.log(characters);
  characters.forEach((char) => {
    const listElement = createCharacterCard(char);
    cardContainer.append(listElement);
  });
}

fetchCharacters();
