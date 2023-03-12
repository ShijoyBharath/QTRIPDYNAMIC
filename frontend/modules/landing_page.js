import config from "../conf/index.js";

async function init() {
  //Fetches list of all cities along with their images and description
  let cities = await fetchCities();
  // console.log(cities)

  //Updates the DOM with the cities
  if (cities) {
    cities.forEach((key) => {
      addCityToDOM(key.id, key.city, key.description, key.image);
    });
  }
}

//Implementation of fetch call
async function fetchCities() {
  // TODO: MODULE_CITIES
  // 1. Fetch cities using the Backend API and return the 
  try {
    const x = await fetch("http://15.207.37.3:8082/cities")
    // console.log(x)
    return x.json()
  } catch(err) {
    return null
  }
}

//Implementation of DOM manipulation to add cities
function addCityToDOM(id, city, description, image) {
  // TODO: MODULE_CITIES
  // 1. Populate the City details and insert those details into the DOM
  // console.log(id,city,description,image)
  let card = document.createElement("div")
  card.className = "tile"
  card.innerHTML = `<a id=${id} href="pages/adventures/?city=${id}"><img src=${image}/></a><p class="tile-text">${city}<br/>${description}</p>`
  // console.log(card)
  // console.log(document.getElementById("data"))
  document.getElementById("data").appendChild(card)


}

export { init, fetchCities, addCityToDOM };
