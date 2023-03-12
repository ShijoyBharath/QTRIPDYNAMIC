
import config from "../conf/index.js";

//Implementation to extract city from query params
function getCityFromURL(search) {
  // TODO: MODULE_ADVENTURES
  // 1. Extract the city id from the URL's Query Param and return it
  let x = search.split('=')[1]
  console.log(x)
  return x
}

//Implementation of fetch call with a paramterized input based on city
async function fetchAdventures(city) {
  // TODO: MODULE_ADVENTURES
  // 1. Fetch adventures using the Backend API and return the data
  try {
    let x = await fetch(`http://15.207.37.3:8082/adventures/?city=${city}`)
    let y = await x.json()
    // console.log(y)
    return y
  } catch (err) {
    return null
  }
}

//Implementation of DOM manipulation to add adventures for the given city from list of adventures
function addAdventureToDOM(adventures) {
  // TODO: MODULE_ADVENTURES
  // 1. Populate the Adventure Cards and insert those details into the DOM
  adventures.forEach((item)=> {
    let card = document.createElement("div")
    card.className = "activity-card"
    card.innerHTML = `<a id=${item.id} href="http://15.207.37.3:8081/frontend/pages/adventures/detail/?adventure=${item.id}"><div class="category-banner">${item.category}</div><img src=${item.image}/></a><div>${item.name}&nbsp;&nbsp;&nbsp;&nbsp;Rs.${item.costPerHead}<br/>Duration&nbsp;&nbsp;&nbsp;&nbsp;${item.duration}&nbsp;Hours</div>`
    document.getElementById("data").appendChild(card)
  })
}

//Implementation of filtering by duration which takes in a list of adventures, the lower bound and upper bound of duration and returns a filtered list of adventures.
function filterByDuration(list, low, high) {
  // TODO: MODULE_FILTERS
  // 1. Filter adventures based on Duration and return filtered list
  // console.log(list)
  if (low===undefined || high===undefined) {
    return list
  }

  let x = list.filter((item)=>{
    if(parseInt(item.duration)>=parseInt(low) && parseInt(item.duration)<=parseInt(high)){
      return true
    } else {
      return false
    }
  })

  console.log("duration : ", x)

  return x
}

//Implementation of filtering by category which takes in a list of adventures, list of categories to be filtered upon and returns a filtered list of adventures.
function filterByCategory(list, categoryList) {
  // TODO: MODULE_FILTERS
  // 1. Filter adventures based on their Category and return filtered list
  if(categoryList.length===0){
    return list
  }

  let x = list.filter((item)=>{
    if(categoryList.includes(item.category)){
      return true
    } else {
      return false
    }
  })

  console.log("category", x)

  return x
}

// filters object looks like this filters = { duration: "", category: [] };

//Implementation of combined filter function that covers the following cases :
// 1. Filter by duration only
// 2. Filter by category only
// 3. Filter by duration and category together

function filterFunction(list, filters) {
  // TODO: MODULE_FILTERS
  // 1. Handle the 3 cases detailed in the comments above and return the filtered list of adventures
  // 2. Depending on which filters are needed, invoke the filterByDuration() and/or filterByCategory() methods
// console.log("filters",filters)
 let x = filterByCategory(list, filters.category)
 let low = filters.duration.split('-')[0]
 let high = filters.duration.split('-')[1]
 if (high>15){
  high = 20
 }
 console.log("low high ",low,high)
 let y = filterByDuration(x, low, high)
 console.log("Combined : ", y)
  // console.log(x)
  // Place holder for functionality to work in the Stubs
  return y;
}

//Implementation of localStorage API to save filters to local storage. This should get called everytime an onChange() happens in either of filter dropdowns
function saveFiltersToLocalStorage(filters) {
  // TODO: MODULE_FILTERS
  // 1. Store the filters as a String to localStorage
 console.log("save local ", JSON.stringify(filters))
  // window.localStorage.setItem("duration",JSON.stringify(filters.duration))
  // window.localStorage.setItem("category",JSON.stringify(filters.category))
  window.localStorage.setItem("filters", JSON.stringify(filters))

  return true;
}

//Implementation of localStorage API to get filters from local storage. This should get called whenever the DOM is loaded.
function getFiltersFromLocalStorage() {
  // TODO: MODULE_FILTERS
  // 1. Get the filters from localStorage and return String read as an object
  
  //  let dur = JSON.parse(localStorage.getItem("duration"))
  //  let cat = JSON.parse(localStorage.getItem("category"))
  // Place holder for functionality to work in the Stubs
  // let comb = {"duration": dur, "category":[...cat]}
  let comb = JSON.parse(localStorage.getItem("filters"))
  console.log("get filters from local ", comb)
  return comb;
  

  // return null;
}

//Implementation of DOM manipulation to add the following filters to DOM :
// 1. Update duration filter with correct value
// 2. Update the category pills on the DOM

function generateFilterPillsAndUpdateDOM(filters) {
  // TODO: MODULE_FILTERS
  // 1. Use the filters given as input, update the Duration Filter value and Generate Category Pills

  console.log("Filter PIlls  : ", filters)
  filters.category.forEach((item)=> {
    let card = document.createElement("div")
    card.className = "category-filter"
    card.innerHTML = `<div>${item}</div>`
    document.getElementById("category-list").appendChild(card)
  })

}
export {
  getCityFromURL,
  fetchAdventures,
  addAdventureToDOM,
  filterByDuration,
  filterByCategory,
  filterFunction,
  saveFiltersToLocalStorage,
  getFiltersFromLocalStorage,
  generateFilterPillsAndUpdateDOM,
};
