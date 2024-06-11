let map;
function getLocation() {
    return  navigator.geolocation.getCurrentPosition(success,error,options)
  }

  let crd
  let button1;
  let lat;
  let lo;
  function success(pos) {
    crd = pos.coords;
    initMap(crd.latitude,crd.longitude);
    button1 = document.createElement("button")
    button1.innerText = "location info"
    // button1.addEventListener()
    button1.addEventListener("click",function(){
      console.log("clicked")
      getCells(crd)
    })

    document.body.appendChild(button1)
  }

  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }

  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };


async function initMap(x,y) {
  const { Map } = await google.maps.importLibrary("maps");

  map = new Map(document.getElementById("map"), {
    center: { lat:x , lng: y },
    zoom: 18,
  });
}

console.log(getLocation())

function getCells(c){
  console.log("t ran")
  console.log(c)
    let table = document.getElementById("main_table")
    let cells = table.getElementsByTagName("td")

    table.style.visibility = "visible"
    console.log(cells)
    cells[0].innerText = c.latitude
    cells[1].innerText = c.longitude
    cells[2].innerText = new Date()
}

// let button = document.getElementsByTagName("button")[0]

