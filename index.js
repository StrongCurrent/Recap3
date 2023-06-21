import { createCharacterCard } from "./components/card/card.js";

const url = "https://rickandmortyapi.com/api/character";
const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const searchBarInput = document.querySelector('[data-js="search-bar-input"]');
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

// States
const maxPage = 42;
let page = 1;
let searchQuery = "";
pagination.innerHTML = `${page} / ${maxPage}`;

// Fetch Characters with REST-API
async function fetchCharacters() {
  cardContainer.innerHTML = "";
  const response = await fetch(
    `https://rickandmortyapi.com/api/character?page=${page}&name=${searchQuery}`
  );
  const allCharacters = await response.json();
  console.log(allCharacters);
  const characters = allCharacters.results;
  console.log(characters);
  characters.forEach((char) => {
    const listElement = createCharacterCard(char);
    cardContainer.append(listElement);
  });
}
fetchCharacters();

nextButton.addEventListener("click", async () => {
  cardContainer.innerHTML = "";
  page++;
  fetchCharacters();
  pagination.innerHTML = `${page}/${maxPage}`;
});

prevButton.addEventListener("click", async () => {
  if (page != 1) {
    cardContainer.innerHTML = "";
    page--;
    fetchCharacters();
    pagination.innerHTML = `${page}/${maxPage}`;
  }
});

// Fetch searchbar with REST-API

searchBar.addEventListener("submit", async (event) => {
  event.preventDefault();
  searchQuery = searchBarInput.value;
  page = 1;
  console.log(searchQuery);
  fetchCharacters();
});
