import "../scss/app.scss";

async function GetData() {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=10");
  const data = await response.json();
  return data.results.map((x) => x.name);
  
}

window.addEventListener("DOMContentLoaded",async () => {
  // This block will be executed once the page is loaded and ready

  const ul = document.querySelector("ul");

  const pokemonNames = await GetData();

  for(let pokemon of pokemonNames){
    const li = document.createElement("li");
    li.innerText = pokemon;
    ul.appendChild(li);
  }

});
