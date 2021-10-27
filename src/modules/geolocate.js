document.addEventListener("DOMContentLoaded", init);

function init() {
  if (navigator.geolocation) {
    let giveUp = 1000 * 30;
    let tooOld = 1000 * 60 * 60;
    options = {
      enableHighAccuracy: true,
      timeout: giveUp,
      maximumminimumAge: tooOld
    };
    navigator.geolocation.getCurrentPosition(gotPos, posFail, options);
  } else {
  }
}

function gotPos(position) {
  spans = document.querySelectorAll("p span");
  spans[0].textContent = position.coords.latitude;
  spans[1].textContent = position.coords.longitude;
  spans[2].textContent = position.coords.accuracy;

  spans[6].textContent = position.timestamp;
}

function posFail(err) {
  //err is a number
  let errors = {
    1: "No permission",
    2: "Unable to determine",
    3: "Took too long"
  };
  document.querySelector("h1").textContent = errors[err];
}
