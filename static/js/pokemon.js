async function getPokemonData(id) {
    console.log(`Fetching data for Pokémon ID: ${id}`);
    const response = await fetch('pokemon.json');
    const data = await response.json();
    data_pokemons = data.pokemon; // Store the fetched data globally}
    return data_pokemons.find(p => p.id == id);
}
function getQueryParam(param) {
  const params = new URLSearchParams(window.location.search);
  return params.get(param);
}
async function loadPokemon() {
  const id = getQueryParam('id');
  if (!id) {
    document.getElementById('pokemonContainer').innerHTML = "<p>Pokémon no especificado.</p>";
    return;
  }
  try {
    const data = await getPokemonData(id);
    document.getElementById('pokeName').textContent = data.name;
    document.getElementById('pokeImageFront').src = data.sprites.front_default;
    document.getElementById('pokeImageBack').src = data.sprites.back_default;
    document.getElementById('pokedex-sprite').src = data.sprites.front_default;
    document.getElementById('ReasonNumber').textContent = `Reason #${data.id}`;
    document.getElementById('reason').textContent = data.reason;
    document.getElementById('explanation').textContent = data.explanation;
    types = data.type;
    for (let i = 0; i < types.length; i++) {
      const typeElement = document.createElement('img');
      typeElement.src = `static/images/types/${types[i].toLowerCase()}.png`;
      typeElement.alt = types[i];
      document.getElementById('pokeTypes').appendChild(typeElement);
    }
    const cards = data.cards;
    for (let i = 0; i < cards.length; i++) {
      document.getElementById(`PokeCard${i+1}`).src = cards[i];
    }
  } catch (error) {
    document.getElementById('pokemonContainer').innerHTML = "<p>Error cargando el Pokémon.</p>";
  }
}
loadPokemon();

document.addEventListener('DOMContentLoaded', () => {
  //Obtengo los botones
  const anterior = document.getElementById('anterior');
  const siguiente = document.getElementById('siguiente');
  //Creo sus funciones respectivas
  anterior.addEventListener('click', () => {
    const currentId = parseInt(getQueryParam('id'));
    if (currentId > 1) {
      window.location.href = `pokemon.html?id=${currentId - 1}`;
    }
    else {
      window.location.href = 'pokemon.html?id=151'; // Redirige al último Pokémon si es el primero
    }
      
  }
  );
  siguiente.addEventListener('click', () => {
    const currentId = parseInt(getQueryParam('id'));
    if (currentId < 151) {
      window.location.href = `pokemon.html?id=${currentId + 1}`;
    }
    else {
      window.location.href = 'pokemon.html?id=1'; // Redirige al primer Pokémon si es el último
    }
  }
  );
  document.getElementById('volver').addEventListener('click', () => {
    window.location.href = 'pokedex.html';
  }
  );

  document.getElementById('openReason').addEventListener('click', () => {
    document.getElementById('pokedexPopup').classList.remove('hidden');
    document.getElementById('continuardiv').classList.add('hidden');
  }
  );

  document.getElementById('closeReason').addEventListener('click', () => {
    document.getElementById('pokedexPopup').classList.add('hidden');
    document.getElementById('continuardiv').classList.remove('hidden');
  }
  );
  document.getElementById('pokemon-logo').addEventListener('click',function() {
    window.location.href = 'index.html';
  });

});