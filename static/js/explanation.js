function showExplanation1() {
  document.getElementById('pokecard1-explanation').style.display = 'flex';
}

function closeExplanation1() {
  document.getElementById('pokecard1-explanation').style.display = 'none';
}

function showExplanation2() {
  document.getElementById('pokecard2-explanation').style.display = 'flex';
}

function closeExplanation2() {
  document.getElementById('pokecard2-explanation').style.display = 'none';
}

function showExplanation3() {
  document.getElementById('pokecard3-explanation').style.display = 'flex';
}

function closeExplanation3() {
  document.getElementById('pokecard3-explanation').style.display = 'none';
  document.getElementById('continuar-div').style.display = 'flex';
}

function showExplanation4() {
  document.getElementById('pikachu-explanation').style.display = 'flex';
}

function closeExplanation4() {
  document.getElementById('pikachu-explanation').style.display = 'none';
}

document.getElementById('continuar').addEventListener('click', function() {
    window.location.href = 'pokedex.html';
});

document.getElementById('pokemon-logo').addEventListener('click',function() {
  window.location.href = 'index.html';
});