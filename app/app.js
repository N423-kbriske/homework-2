import * as MODEL from "./model.js";

function initListeners() {
  // when the retrieve weather button is clicked, this triggers an event that sets the location equal to the value of the input in getWeatherInput
  $("#getWeatherBtn").click((e) => {
    // const location = $("#getLocation").val();
    const cityLocation = $("#getCityLocation").val();
    const zipLocation = $("#getZipLocation").val();
    const days = $("getDays").val();

    // if city is not empty and zip is, pass in the value for city
    if (cityLocation != "" && zipLocation == "") {
      getWeather(cityLocation);
    }
    // if city is empty and zip is not, pass in the value for zip
    else if (
      cityLocation == "" &&
      zipLocation.length > 0 &&
      zipLocation.length < 7
    ) {
      getWeather(zipLocation);
    }
    // if city and zip are both filled, go based off of city
    else if (cityLocation != "" && zipLocation != "") {
      getWeather(cityLocation);
    }
    // if some other combination happens, error message
    else {
      alert("Please enter a valid location");
    }
  });
}

function getWeather(location) {
  //   console.log("weather " + location);
  MODEL.getCurrentWeather(location);
  //   $("#gwInput").val("");
}

$(document).ready(function () {
  initListeners();
});
