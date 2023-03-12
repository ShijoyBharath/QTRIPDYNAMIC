import config from "../conf/index.js";

//Implementation to extract adventure ID from query params
function getAdventureIdFromURL(search) {
  // TODO: MODULE_ADVENTURE_DETAILS
  // 1. Get the Adventure Id from the URL

  
  // Place holder for functionality to work in the Stubs
  return search.split('=')[1];
}
//Implementation of fetch call with a paramterized input based on adventure ID
async function fetchAdventureDetails(adventureId) {
  // TODO: MODULE_ADVENTURE_DETAILS
  // 1. Fetch the details of the adventure by making an API call
  try {
    console.log("advID : ",adventureId)
    var x = await fetch(`http://15.207.37.3:8082/adventures/detail/?adventure=${adventureId}`)
    var y = await x.json()
    console.log("fetchAdvDetai : ",y)
  } catch(err) {
    return null
  }


  // Place holder for functionality to work in the Stubs
  return y;
}

//Implementation of DOM manipulation to add adventure details to DOM
function addAdventureDetailsToDOM(adventure) {
  // TODO: MODULE_ADVENTURE_DETAILS
  // 1. Add the details of the adventure to the HTML DOM

  // console.log("addadv :", adventure)
  // console.log("IMGAES LENGth : ", adventure.images)
  // var count = 0
  // adventure.images.forEach((item)=> {
  //   let card = document.createElement("div")
  //   if(count === 0){

  //     card.className = "carousel-item active"
  //     count = 1
  //   } else {

  //     card.className = "carousel-item"
  //   }
  //   if(item===null || item === undefined){
      
  //   } else {


  //     // card.innerHTML = `<img src=""></img>`
  //     card.innerHTML = `
  //     <img src="${item}" class="d-block w-100 activity-card-image" alt="..."></img>`
  //     document.getElementById("hello").appendChild(card)
  //     document.getElementById("adventure-name").innerHTML=adventure.name
  //     document.getElementById("adventure-subtitle").innerHTML=adventure.subtitle
  //     document.getElementById("adventure-content").innerHTML=adventure.content
  //   }
  // })

 

  //   let card = document.createElement("div")
  //   card.innerHTML = `<div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  //   <div class="carousel-indicators activity-card-image">
  //     <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
  //     <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
  //     <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  //   </div>
  //   <div id="hello" class="carousel-inner activity-card-image">
  //   </div>
  //   <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
  //     <span class="carousel-control-prev-icon" aria-hidden="true"></span>
  //     <span class="visually-hidden">Previous</span>
  //   </button>
  //   <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
  //     <span class="carousel-control-next-icon" aria-hidden="true"></span>
  //     <span class="visually-hidden">Next</span>
  //   </button>
  // </div>`
  //   document.getElementById("photo-gallery").appendChild(card)
  //   document.getElementById("adventure-subtitle").innerHTML=adventure.subtitle
  //   document.getElementById("adventure-name").innerHTML=adventure.name
  //   document.getElementById("adventure-content").innerHTML=adventure.content



adventure.images.forEach(
  (item)=>{

    let card = document.createElement("div")
    card.innerHTML = `<div class="activity-card-image"></div>`
  document.getElementById("photo-gallery").appendChild(card)
    document.getElementById("adventure-subtitle").innerHTML=adventure.subtitle
    document.getElementById("adventure-name").innerHTML=adventure.name
    document.getElementById("adventure-content").innerHTML=adventure.content
  }
)

}

//Implementation of bootstrap gallery component
function addBootstrapPhotoGallery(images) {
  // TODO: MODULE_ADVENTURE_DETAILS
  // 1. Add the bootstrap carousel to show the Adventure images

  // console.log("add boots :", images)
  //   let card = document.createElement("div")
  //   card.innerHTML = `<div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  //   <div class="carousel-indicators">
  //     <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
  //     <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
  //     <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  //   </div>
  //   <div id="hello" class="carousel-inner">
  //   </div>
  //   <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
  //     <span class="carousel-control-prev-icon" aria-hidden="true"></span>
  //     <span class="visually-hidden">Previous</span>
  //   </button>
  //   <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
  //     <span class="carousel-control-next-icon" aria-hidden="true"></span>
  //     <span class="visually-hidden">Next</span>
  //   </button>
  // </div>`
  //   document.getElementById("photo-gallery").appendChild(card)


  
  // console.log("IMGAES LENGth : ", images)
  // var count = 0
  // images.forEach((item)=> {
  //   let card = document.createElement("div")
  //   if(count === 0){

  //     card.className = "carousel-item active"
  //     count = 1
  //   } else {

  //     card.className = "carousel-item"
  //   }
  //     card.innerHTML = `<img src="${item}" class="d-block w-100" alt="..."></img>`
  //       document.getElementById("hello").appendChild(card)
  // })


  var count = 0
  var imagecard = "<div>"
  images.forEach((item)=> {
    if(count === 0){

      imagecard = imagecard+`<div class="carousel-item active"><img src="${item}" class="d-block w-100" alt="..."></img></div>`
      count = 1
    } else {
      imagecard = imagecard+`<div class="carousel-item"><img src="${item}" class="d-block w-100" alt="..."></img></div>`
    }
  })
  imagecard = imagecard + "</div>"

  let card = document.createElement("div")
    card.innerHTML = `<div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div id="hello" class="carousel-inner">
    ${imagecard}
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>`
    document.getElementById("photo-gallery").appendChild(card)
}

//Implementation of conditional rendering of DOM based on availability
function conditionalRenderingOfReservationPanel(adventure) {
  // TODO: MODULE_RESERVATIONS
  // 1. If the adventure is already reserved, display the sold-out message.
  console.log("conditionalRenderofRservationpanel : ", adventure)
  if(adventure.available){

    document.getElementById("reservation-panel-sold-out").style.display = "none"
    document.getElementById("reservation-panel-available").style.display = "block"
    document.getElementById("reservation-person-cost").innerHTML = adventure.costPerHead

  } else {
    document.getElementById("reservation-panel-available").style.display = "none"
    document.getElementById("reservation-panel-sold-out").style.display = "block"
  }
}

//Implementation of reservation cost calculation based on persons
function calculateReservationCostAndUpdateDOM(adventure, persons) {
  // TODO: MODULE_RESERVATIONS
  // 1. Calculate the cost based on number of persons and update the reservation-cost field
  var x =  adventure.costPerHead*persons
  x = x.toString()
  document.getElementById("reservation-cost").innerHTML = x
}

//Implementation of reservation form submission
function captureFormSubmit(adventure) {
  // TODO: MODULE_RESERVATIONS
  // 1. Capture the query details and make a POST API call using fetch() to make the reservation
  // 2. If the reservation is successful, show an alert with "Success!" and refresh the page. If the reservation fails, just show an alert with "Failed!".
  let form = document.getElementById("myForm");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
  console.log(e)
    let name = document.getElementById("name").value;
    let date = document.getElementById("date").value;
    let person = document.getElementById("person").value;
    let id = adventure.id

    let postbody = `{"name":"${name}","date":"${date}","person":"${person}","adventure":"${id}"}`
    // let postbody = `{name=${name}&date=${date}&person=${person}&adventure=${id}`
    console.log("POST Body : ", postbody)
  

    try{
       fetch('http://15.207.37.3:8082/reservations/new', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: `${postbody}`
      })
      alert("Success!")
    } catch(err) {
      alert("Failed!")
    }
  });
  
}

//Implementation of success banner after reservation
function showBannerIfAlreadyReserved(adventure) {
  // TODO: MODULE_RESERVATIONS
  // 1. If user has already reserved this adventure, show the reserved-banner, else don't

  if(adventure.reserved){

    document.getElementById("reserved-banner").style.display = "block"
    
  } else {
    document.getElementById("reserved-banner").style.display = "none"

  }

}

export {
  getAdventureIdFromURL,
  fetchAdventureDetails,
  addAdventureDetailsToDOM,
  addBootstrapPhotoGallery,
  conditionalRenderingOfReservationPanel,
  captureFormSubmit,
  calculateReservationCostAndUpdateDOM,
  showBannerIfAlreadyReserved,
};
