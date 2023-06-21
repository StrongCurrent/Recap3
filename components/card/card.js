export function createCharacterCard(char) {
  const listElement = document.createElement("li");
  listElement.classList.add("card");
  listElement.innerHTML = `<div class="card__image-container">
    <img
      class="card__image"
      src=${char.image}
      alt="${char.name}"
    />
    <div class="card__image-gradient"></div>
  </div>
  <div class="card__content">
    <h2 class="card__title">${char.name}</h2>
    <dl class="card__info">
      <dt class="card__info-title">Status</dt>
      <dd class="card__info-description">${char.status}</dd>
      <dt class="card__info-title">Type</dt>
      <dd class="card__info-description">${char.type}</dd>
      <dt class="card__info-title">Occurrences</dt>
      <dd class="card__info-description">${char.episode.length}</dd>
    </dl>
  </div>`;
  return listElement;
}
