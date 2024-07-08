var games=document.getElementById('games')
var market=document.getElementById('market')
var about=document.getElementById('about')

var gamesbuton = document.getElementById('gamesbuton')
var marketbuton = document.getElementById('marketbuton')
var aboutbuton = document.getElementById('aboutbuton')

gamesbuton.onclick = function () { 
  games.style.display = 'block ruby'
  market.style.display = 'none'
  about.style.display = 'none'
  document.getElementById("gamesbuton").classList.add('active');
  document.getElementById("marketbuton").classList.remove('active');
  document.getElementById("aboutbuton").classList.remove('active');
}

marketbuton.onclick = function () { 
  games.style.display = 'none'
  market.style.display = 'block ruby'
  about.style.display = 'none'
  document.getElementById("gamesbuton").classList.remove('active');
  document.getElementById("marketbuton").classList.add('active');
  document.getElementById("aboutbuton").classList.remove('active');
}

aboutbuton.onclick = function () { 
  games.style.display = 'none'
  market.style.display = 'none'
  about.style.display = 'block'
  document.getElementById("gamesbuton").classList.remove('active');
  document.getElementById("marketbuton").classList.remove('active');
  document.getElementById("aboutbuton").classList.add('active');
}
