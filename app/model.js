var key = "53599ec288054906a0a203018222908";
var baseURL = "http://api.weatherapi.com/v1/";

function getName(name) {
  console.log(utility(name));
}

// function getCurrentDate() {
//   const date = new Date();
//   const year = date.getFullYear();
//   const month = date.getMonth() + 1;
//   const day = date.getDate();
//   const fullDate = `${year}-${month}-${day}`;
//   return fullDate;
// }

// set a query count to remove information if a new search is started
var querycnt = 0;

function getCurrentWeather(location) {
  // add one to the query count
  querycnt += 1;
  // retrieves JSON from the API with the correct credentials once they are entered (forecast which includes current)
  $.getJSON(
    `${baseURL}forecast.json?key=${key}&q=${location}&days=4&aqi=no&alerts=no`,
    (data) => {
      const location = data.location;
      const currentContainer = document.getElementById("currentContainer");
      const current = data.current;
      const condition = data.current.condition;
      const forecast = data.forecast;
      currentContainer.innerHTML += `<div id="infoContainer">

      <div id="locationInfo">
      <div id="name">${location.name}, ${location.region}</div>
      <div id="country">${location.country}</div>
      <div id="time">${location.localtime}</div>
      </div>

      <div id="conditionInfo">
      <img id="conditionImage "src="${condition.icon}" alt="">
      <div id="conditionText">${condition.text}</div>
      </div>
      
      <div id="tempInfo">
      <div id="tempF">Temperature: ${current.temp_f}°F</div>
      <div id="realFeel">Real Feel: ${current.feelslike_f}°F</div>
      <div id="wind">Wind: ${current.wind_mph} mph ${current.wind_dir}</div>
      </div>

      <div id="extraInfo">
    
      <div id="precip">Precipitation: ${current.precip_in} in</div>
      <div id="uv">UV Index: ${current.uv}</div>
      <div id="pressure">Pressure: ${current.pressure_in} inHg</div>
      <div id="visMiles">Visibility: ${current.vis_miles} miles</div>
      </div>
      </div>

      <div id="forecastHeader">Coming Up</div>

      <div id="fcContain">
      <div id="forecastContainer">
      <div id="forecastDate">${forecast.forecastday[0].date}</div>
      <div id="fcConditionContain">
      <img id="forecastConditionImg "src="${forecast.forecastday[0].day.condition.icon}" alt="">
      <div id="forecastCondition">${forecast.forecastday[0].day.condition.text}</div>
      </div>
      <div id="forecastLow">Low: ${forecast.forecastday[0].day.mintemp_f}</div>
      <div id="forecastHigh">High: ${forecast.forecastday[0].day.maxtemp_f}</div>
      <div id="rainChance">Chance of rain: ${forecast.forecastday[0].day.daily_chance_of_rain}%</div>
      <div id="fcUv">UV Index: ${forecast.forecastday[0].day.uv}</div>
      <div id="fcHumidity">Sunrise: ${forecast.forecastday[0].astro.sunrise}</div>
      <div id="fcHumidity">Sunset: ${forecast.forecastday[0].astro.sunset}</div>
      </div>
      
      <div id="forecastContainer">
      <div id="forecastDate">${forecast.forecastday[1].date}</div>
      <div id="fcConditionContain">
      <img id="forecastConditionImg "src="${forecast.forecastday[1].day.condition.icon}" alt="">
      <div id="forecastCondition">${forecast.forecastday[1].day.condition.text}</div>
      </div>
      <div id="forecastLow">Low: ${forecast.forecastday[1].day.mintemp_f}</div>
      <div id="forecastHigh">High: ${forecast.forecastday[1].day.maxtemp_f}</div>
      <div id="rainChance">Chance of rain: ${forecast.forecastday[1].day.daily_chance_of_rain}%</div>
      <div id="fcUv">UV Index: ${forecast.forecastday[1].day.uv}</div>
      <div id="fcHumidity">Sunrise: ${forecast.forecastday[1].astro.sunrise}</div>
      <div id="fcHumidity">Sunset: ${forecast.forecastday[1].astro.sunset}</div>
      </div>

      <div id="forecastContainer">
      <div id="forecastDate">${forecast.forecastday[2].date}</div>
      <div id="fcConditionContain">
      <img id="forecastConditionImg "src="${forecast.forecastday[2].day.condition.icon}" alt="">
      <div id="forecastCondition">${forecast.forecastday[2].day.condition.text}</div>
      </div>
      <div id="forecastLow">Low: ${forecast.forecastday[2].day.mintemp_f}</div>
      <div id="forecastHigh">High: ${forecast.forecastday[2].day.maxtemp_f}</div>
      <div id="rainChance">Chance of rain: ${forecast.forecastday[2].day.daily_chance_of_rain}%</div>
      <div id="fcUv">UV Index: ${forecast.forecastday[2].day.uv}</div>
      <div id="fcHumidity">Sunrise: ${forecast.forecastday[2].astro.sunrise}</div>
      <div id="fcHumidity">Sunset: ${forecast.forecastday[2].astro.sunset}</div>
      </div>
      </div>`;

      // iterate through the JSON
      for (let i = 0; i < data.length; i++) {
        const element = data[i];
        console.log(element.name);
        $("#app").append(`<p>${element.name}<p>`);
      }
      console.log(data);
      console.log("success");
    }
  )
    .done(function () {
      console.log("second success");
    })
    .fail(function (e) {
      console.log("error", e);
      alert("please enter a location");
    })
    .always(function () {
      console.log("complete");
    });
  // if the query is more than one, remove the currentInfoContainer so that a new one can be placed over it
  if (querycnt > 1) {
    document.getElementById("infoContainer").remove();
    document.getElementById("forecastHeader").remove();
    document.getElementById("fcContain").remove();
  }
}

// excess code from non-looped testing
//   $.get(
//     `${baseURL}current.json?key=${key}&q=${location}&dt=${currentDate}`,
//     (data) => {
//       console.log(data);
//       console.log(data.location);
//       console.log(data.location.name);
//       console.log(data.location.region);
//       console.log(data.location.localtime);
//       console.log(data.current.last_updated);
//       console.log(data.current.temp_f);
//       console.log(data.current.condition.text);
//       console.log(data.current.wind_mph);
//       console.log(data.current.wind_dir);
//       console.log(data.current.pressure_in);
//       console.log(data.current.precip_in);
//       console.log(data.current.humidity);
//       console.log(data.current.cloud);
//       console.log(data.current.feelslike_f);
//       console.log(data.current.vis_miles);
//       console.log(data.current.uv);
//       console.log(data.current.gust_mph);
//       // in order to access things you need to do data.location.somethingElse
//     }
//   ).fail(function (e) {
//     alert("Please enter a location");
//   });
// }

function utility(name) {
  return name + ", howdy!";
}

export { getName, getCurrentWeather };
