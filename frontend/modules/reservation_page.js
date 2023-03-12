import config from "../conf/index.js";

//Implementation of fetch call to fetch all reservations
async function fetchReservations() {
  // TODO: MODULE_RESERVATIONS
  // 1. Fetch Reservations by invoking the REST API and return them
  try {
    var data = await fetch('http://15.207.37.3:8082/reservations/')
    var x = await data.json()
    console.log("fetchReservations : ",x)
    return x
  } catch(err) {
    console.log(err.message)
    return null
  }

  // Place holder for functionality to work in the Stubs
  // return null;
}

//Function to add reservations to the table. Also; in case of no reservations, display the no-reservation-banner, else hide it.
function addReservationToTable(reservations) {
  // TODO: MODULE_RESERVATIONS
  // 1. Add the Reservations to the HTML DOM so that they show up in the table

  //Conditionally render the no-reservation-banner and reservation-table-parent
  if(reservations.length===0){
    document.getElementById("reservation-table-parent").style.display = "none"
    document.getElementById("no-reservation-banner").style.display = "block"
    
  } else {
    console.log("RESERVATIONS : ", reservations[0])
    document.getElementById("reservation-table-parent").style.display = "block"
    document.getElementById("no-reservation-banner").style.display = "none"

    reservations.forEach((item)=>{
      let card = document.createElement("tr")
      const d = new Date(item.date)
   let  dx = d.toLocaleDateString('en-IN')
      const bd = new Date(item.time)
      // let bdx = bd.toString('YYYY-MM-dd')
      let bdx = bd.toLocaleString('en-IN',{ year:"numeric", month:"long", day:"numeric", hour:"numeric", minute:"numeric", second:"numeric"})
      bdx = bdx.toString()
      bdx = bdx.replace(" at",",")
      console.log("bDate bd : ", bd)
      console.log("bdate after tolocale : ", bdx)
      card.innerHTML = `<tr>
      <td scope="col">${item.id}</td>
      <td scope="col">${item.name}</td>
      <td scope="col">${item.adventureName}</td>
      <td scope="col">${item.person}</td>
      <td scope="col">${dx}</td>
      <td scope="col">${item.price}</td>
      <td scope="col">${bdx}</td>
      <div id="${item.id}"><a  href="detail/?adventure=${item.adventure}" ><button class="reservation-visit-button">Visit Adventure</button></a></div>
  </tr>`
      document.getElementById("reservation-table").appendChild(card)

    })

  }
  /*
    Iterating over reservations, adding it to table (into div with class "reservation-table") and link it correctly to respective adventure
    The last column of the table should have a "Visit Adventure" button with id=<reservation-id>, class=reservation-visit-button and should link to respective adventure page

    Note:
    1. The date of adventure booking should appear in the format D/MM/YYYY (en-IN format) Example:  4/11/2020 denotes 4th November, 2020
    2. The booking time should appear in a format like 4 November 2020, 9:32:31 pm
  */

}

export { fetchReservations, addReservationToTable };
