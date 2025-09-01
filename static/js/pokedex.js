    const pokemonGrid = document.getElementById("pokemonGrid");

    async function fetchPokemon(id) {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      return await response.json();
    }

    async function loadPokemons() {
      for (let i = 1; i <= 151; i++) {
        const data = await fetchPokemon(i);
        const card = document.createElement("div");
        card.className = "pokemon-card";
        card.onclick = function() {
          window.location.href = `pokemon.html?id=${data.id}`;
        };
        card.innerHTML = `
          <img src="${data.sprites.front_default}" alt="${data.name}">
          <p class="pokemon-name">${data.name}</p>
          <p>#${data.id}</p>
        `;
        pokemonGrid.appendChild(card);
      }
    }

    loadPokemons();
document.getElementById('pokemon-logo').addEventListener('click',function() {
  window.location.href = 'index.html';
});